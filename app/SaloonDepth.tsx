"use client";

import { useEffect } from "react";

export function SaloonDepth() {
  useEffect(() => {
    const scene = document.querySelector<HTMLElement>(".saloon-scene");
    if (!scene || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const setDepth = (x: number, y: number) => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        scene.style.setProperty("--scene-x", x.toFixed(2));
        scene.style.setProperty("--scene-y", y.toFixed(2));
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;
      setDepth(x, y);
    };

    const handlePointerLeave = () => setDepth(0, 0);

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return null;
}
