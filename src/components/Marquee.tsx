import { Fragment } from "react";
import { marquee } from "@/data/portfolio";
import styles from "./Marquee.module.css";

// The list is rendered twice so the -50% slide loops seamlessly.
export default function Marquee() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={`${styles.track} display`}>
        {[0, 1].map((copy) =>
          marquee.map((word) => (
            <Fragment key={`${copy}-${word}`}>
              <span>{word}</span>
              <span className={styles.star}>✺</span>
            </Fragment>
          )),
        )}
      </div>
    </div>
  );
}
