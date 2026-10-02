"use client";

import { useRef } from "react";
import { stops, type Stop } from "@/data/portfolio";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import styles from "./Road.module.css";

const PATH = "M50,0 C90,120 90,180 50,250 C10,320 10,420 50,500 C90,580 90,680 50,750 C10,820 10,920 50,1000";

export default function Road() {
  const roadRef = useRef<HTMLDivElement>(null);

  // Draw the blue route as the road scrolls through the screen.
  useScrollProgress(() => {
    const el = roadRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight;
    const p = (vh * 0.8 - r.top) / (r.height + vh * 0.1);
    el.style.setProperty("--draw", Math.min(1, Math.max(0, p)).toFixed(4));
  });

  return (
    <section id="road" className={`${styles.section} wrap`}>
      <div className={styles.head} data-reveal="up">
        <div className="eyebrow">The journey</div>
        <h2 className={`h2 ${styles.title}`}><span className="mark">The road so far</span></h2>
      </div>

      <div className={styles.road} ref={roadRef}>
        <svg className={styles.svg} viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true">
          <path d={PATH} fill="none" stroke="var(--road)" strokeWidth="34" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          <path d={PATH} pathLength={100} fill="none" stroke="#fff" strokeWidth="3" strokeDasharray="0.5 0.8" vectorEffect="non-scaling-stroke" />
          <path className={styles.route} d={PATH} pathLength={1} fill="none" stroke="var(--accent)" strokeWidth="8" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        </svg>

        {stops.map((stop, i) => (
          <StopCard key={stop.title} stop={stop} index={i} />
        ))}

        <div className={`${styles.stop} ${styles.center}`}>
          <a className={`${styles.next} display`} href="#hi" data-reveal="up">
            Next stop: your team?
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function StopCard({ stop, index }: { stop: Stop; index: number }) {
  const side = index % 2 === 0 ? "left" : "right";
  return (
    <div className={`${styles.stop} ${styles[side]}`}>
      <div className={styles.cardWrap} data-reveal={side}>
        <article className={`${styles.card} ${styles[stop.tone]} lift`}>
          <span className={`${styles.num} display`} aria-hidden="true">{index + 1}</span>
          <div className={styles.chips}>
            <span className={styles.chip}>{stop.dates}</span>
            <span className={styles.chip}>{stop.place}</span>
          </div>
          <h3 className={`${styles.stopTitle} display`}>{stop.title}</h3>
          <p className={styles.body}>{stop.body}</p>
          {stop.stat && (
            <div className={styles.stat}>
              <span className={`${styles.statValue} display`}>{stop.stat.value}</span>
              <span className={styles.statLabel}>{stop.stat.label}</span>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
