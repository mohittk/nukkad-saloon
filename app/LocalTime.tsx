"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZoneName: "short",
});

function getPresenceSessionId() {
  const storageKey = "nukkad-saloon-presence-id";
  const existing = window.localStorage.getItem(storageKey);

  if (existing) {
    return existing;
  }

  const sessionId =
    typeof window.crypto?.randomUUID === "function"
      ? window.crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const safeSessionId = sessionId.replace(/[^a-zA-Z0-9_-]/g, "");
  window.localStorage.setItem(storageKey, safeSessionId);

  return safeSessionId;
}

export function LocalTime() {
  const [time, setTime] = useState("");
  const [listenerCount, setListenerCount] = useState<number | null>(null);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const sessionId = getPresenceSessionId();
    let isMounted = true;

    const updatePresence = async () => {
      try {
        const response = await fetch("/api/presence", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
          cache: "no-store",
        });

        if (!response.ok) {
          return;
        }

        const data = (await response.json()) as { count?: number };
        if (isMounted && typeof data.count === "number") {
          setListenerCount(data.count);
        }
      } catch {
        // Keep the previous count if the heartbeat fails.
      }
    };

    updatePresence();
    const interval = window.setInterval(updatePresence, 25000);

    return () => {
      isMounted = false;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <div className="top-status-bar">
      <div className="status-pill live-status">
        <span className="status-dot" />
        <span className="listener-count" suppressHydrationWarning>
          {listenerCount ?? "--"} listening
        </span>
      </div>
      <div className="status-pill time-status">
        <time className="clock" suppressHydrationWarning>
          {time || "--:-- --"}
        </time>
      </div>
    </div>
  );
}
