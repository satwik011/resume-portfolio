import { stack } from "@/data/portfolio";
import styles from "./Stack.module.css";

// Hand-placed sticker tilts (degrees), one list per card, matching the prototype.
const TILTS = [
  [-3, 2, -1, 3, -2],
  [2, -2, 1, -3, 2, -1, 3],
  [-2, 3, -1],
  [2, -2, 1],
];
const tiltFor = (g: number, i: number) => TILTS[g % TILTS.length][i % TILTS[g % TILTS.length].length];

export default function Stack() {
  return (
    <section id="stack" className={styles.band}>
      <div className={`${styles.section} wrap`}>
        <div className={styles.head} data-reveal="up">
          <div className="eyebrow">The toolkit</div>
          <h2 className="h2"><span className="mark">Packed for the full stack</span></h2>
        </div>
        <div className={styles.grid}>
          {stack.map((group, g) => (
            <div key={group.name} className={`${styles.card} ${styles[group.color]} lift`} data-reveal="up">
              <div className={styles.cardHead}>
                <h3 className={`${styles.name} display`}>{group.name}</h3>
                <span className={styles.num}>{String(g + 1).padStart(2, "0")}</span>
              </div>
              <ul className={styles.items}>
                {group.items.map((item, i) => (
                  <li key={item} className="sticker" style={{ "--r": `${tiltFor(g, i)}deg` } as React.CSSProperties}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
