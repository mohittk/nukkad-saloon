"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("en-IN", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
  timeZoneName: "short",
});

export function LocalTime() {
  const [time, setTime] = useState("");
  const [listenerCount, setListenerCount] = useState(23);

  useEffect(() => {
    const update = () => setTime(formatter.format(new Date()));
    update();
    const interval = window.setInterval(update, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setListenerCount((count) => {
        const drift = Math.random() > 0.5 ? 1 : -1;
        return Math.min(39, Math.max(18, count + drift));
      });
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <span className="listener-count" suppressHydrationWarning>
        {listenerCount} listening
      </span>
      <span className="status-separator" />
      <time className="clock" suppressHydrationWarning>
        {time || "--:-- --"}
      </time>
    </>
  );
}
