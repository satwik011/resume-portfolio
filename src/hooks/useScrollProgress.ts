"use client";

import { useEffect, useRef } from "react";

/**
 * Calls `onFrame` at most once per animation frame while the page scrolls or resizes.
 * Cheap: one passive listener, no React re-renders (write to the DOM / CSS vars inside onFrame).
 */
export function useScrollProgress(onFrame: () => void) {
  const cb = useRef(onFrame);
  cb.current = onFrame;

  useEffect(() => {
    let frame = 0;
    const run = () => {
      frame = 0;
      cb.current();
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(run);
    };
    run();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);
}
