import { profile, ticket } from "@/data/portfolio";
import styles from "./Hero.module.css";

const delay = (s: number) => ({ animationDelay: `${s}s` });

export default function Hero() {
  const letters = profile.firstName.split("");

  return (
    <header id="top" className={`${styles.hero} wrap`}>
      <div className={styles.text}>
        <div className={`${styles.live} fade`}>
          <span className={styles.dot} aria-hidden="true" />
          Currently building at {profile.currentCompany}
        </div>

        <div className={`${styles.hello} fade`} style={delay(0.1)}>Hey there, I&apos;m</div>

        <h1 className={`${styles.name} display`} aria-label={profile.firstName}>
          {letters.map((l, i) => (
            <span key={i} className={styles.ltr} style={delay(0.15 + i * 0.07)} aria-hidden="true">{l}</span>
          ))}
          <span className={`${styles.ltr} ${styles.period}`} style={delay(0.2 + letters.length * 0.07)} aria-hidden="true">.</span>
        </h1>

        <p className={`${styles.intro} fade`} style={delay(0.9)}>
          A <strong>{profile.role.toLowerCase()}</strong> from {profile.city} {profile.intro}
        </p>

        <div className={`${styles.ctas} fade`} style={delay(1.1)}>
          <a className="btn btn-dark" href="#road">
            Start the trip
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </a>
          <a className="btn btn-light" href={profile.resumeUrl} target="_blank" rel="noreferrer">Resume (PDF)</a>
        </div>
      </div>

      <div className={styles.ticketWrap}>
        <div className={styles.ticket}>
          <div className={styles.head}><span>ROAD TRIP PASS</span><span>NO. 2022</span></div>
          <div className={styles.who}>
            <div className={`${styles.photo} ${profile.photo ? styles.photoImg : ""}`}>
              {profile.photo ? (
                // Plain <img>: one small local photo, no need for the image optimizer.
                // eslint-disable-next-line @next/next/no-img-element
                <img src={profile.photo} alt={profile.name} width={112} height={112} />
              ) : (
                "[Your photo]"
              )}
            </div>
            <div>
              <div className={`${styles.fullName} display`}>{profile.name}</div>
              <div className={styles.role}>{profile.role}</div>
            </div>
          </div>
          <div className={styles.grid}>
            {ticket.fields.map((f) => (
              <div key={f.label} className={styles.field}>
                <span className={styles.label}>{f.label}</span>
                <span className={`${styles.value} display`}>{f.value}</span>
              </div>
            ))}
          </div>
          <div className={styles.foot}>
            <div className={styles.field}>
              <span className={styles.label}>STACK</span>
              <span className={styles.stack}>{ticket.stack}</span>
            </div>
            <div className={styles.barcode} aria-hidden="true" />
          </div>
        </div>

        {ticket.stickers.map((s, i) => (
          <div key={s} className={`${styles.float} ${styles[`f${i + 1}`]}`} aria-hidden="true">{s}</div>
        ))}
      </div>
    </header>
  );
}
