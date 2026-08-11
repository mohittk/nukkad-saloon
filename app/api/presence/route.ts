import { NextResponse } from "next/server";

const PRESENCE_PREFIX = "nukkad-saloon:presence:";
const PRESENCE_TTL_SECONDS = 70;

type PresenceStore = {
  sessions: Map<string, number>;
};

const globalPresence = globalThis as typeof globalThis & {
  __nukkadPresence?: PresenceStore;
};

function getLocalPresenceStore() {
  globalPresence.__nukkadPresence ??= { sessions: new Map<string, number>() };
  return globalPresence.__nukkadPresence;
}

function getRedisConfig() {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

  return url && token ? { token, url } : null;
}

async function runRedisCommand<T>(command: unknown[]) {
  const config = getRedisConfig();
  if (!config) {
    throw new Error("Redis is not configured");
  }

  const response = await fetch(config.url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(command),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Redis command failed with ${response.status}`);
  }

  const data = (await response.json()) as { result?: T };
  return data.result as T;
}

async function touchRedisSession(sessionId: string) {
  await runRedisCommand([
    "SET",
    `${PRESENCE_PREFIX}${sessionId}`,
    Date.now().toString(),
    "EX",
    PRESENCE_TTL_SECONDS,
  ]);
}

async function countRedisSessions() {
  let cursor = "0";
  let count = 0;

  do {
    const result = await runRedisCommand<[string, string[]]>([
      "SCAN",
      cursor,
      "MATCH",
      `${PRESENCE_PREFIX}*`,
      "COUNT",
      "1000",
    ]);
    cursor = result[0];
    count += result[1].length;
  } while (cursor !== "0");

  return count;
}

function touchLocalSession(sessionId: string) {
  const store = getLocalPresenceStore();
  const now = Date.now();
  const expiresBefore = now - PRESENCE_TTL_SECONDS * 1000;

  store.sessions.set(sessionId, now);
  for (const [id, lastSeen] of store.sessions) {
    if (lastSeen < expiresBefore) {
      store.sessions.delete(id);
    }
  }

  return store.sessions.size;
}

function isValidSessionId(value: unknown): value is string {
  return typeof value === "string" && /^[a-zA-Z0-9_-]{12,80}$/.test(value);
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const sessionId =
    body && typeof body === "object" && "sessionId" in body
      ? (body as { sessionId: unknown }).sessionId
      : null;

  if (!isValidSessionId(sessionId)) {
    return NextResponse.json({ error: "Invalid session" }, { status: 400 });
  }

  if (getRedisConfig()) {
    await touchRedisSession(sessionId);
    const count = await countRedisSessions();
    return NextResponse.json({ count, source: "redis" });
  }

  const count = touchLocalSession(sessionId);
  return NextResponse.json({ count, source: "memory" });
}
