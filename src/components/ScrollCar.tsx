"use client";

import { useRef } from "react";
import Car from "./Car";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import styles from "./ScrollCar.module.css";

// Progress bar + car at the top of the screen that drive across as you scroll.
export default function ScrollCar() {
  const ref = useRef<HTMLDivElement>(null);

  useScrollProgress(() => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    ref.current?.style.setProperty("--p", p.toFixed(4));
  });

  return (
    <div className={styles.root} ref={ref} aria-hidden="true">
      <div className={styles.bar} />
      <div className={styles.car}>
        <Car />
      </div>
    </div>
  );
}
