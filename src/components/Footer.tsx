import { profile } from "@/data/portfolio";
import Car from "./Car";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="hi" className={styles.footer}>
      <div className={`${styles.main} wrap`} data-reveal="up">
        <h2 className={`${styles.title} display`}>Let&apos;s ride<br />together.</h2>
        <p className={styles.text}>
          Need someone who can own a feature from UI to database? Or just want to talk shop? My inbox is open.
        </p>
        <div className={styles.ctas}>
          <a className="btn btn-light" href={`mailto:${profile.email}`}>Email me</a>
          <a className="btn btn-yellow" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-ghost" href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume (PDF)</a>
        </div>
      </div>

      <div className={styles.road} aria-hidden="true">
        <div className={styles.lane} />
        <div className={styles.car}>
          <Car width={66} wheel="#F6F6F1" />
        </div>
      </div>

      <div className={`${styles.base} wrap`}>
        <span>© {new Date().getFullYear()} {profile.name} · {profile.city}</span>
        <span>Built end to end, obviously.</span>
      </div>
    </footer>
  );
}
