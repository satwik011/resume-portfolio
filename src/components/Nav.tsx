import styles from "./Nav.module.css";

const links = [
  { href: "#road", label: "The road" },
  { href: "#stack", label: "Stack" },
  { href: "#garage", label: "Garage" },
];

export default function Nav() {
  return (
    <nav className={`${styles.nav} wrap`} aria-label="Main">
      <div className={styles.inner}>
        <a href="#top" className={`${styles.logo} display`}>
          satwik<span className={styles.star}>✺</span>
        </a>
        <div className={styles.links}>
          {links.map((l) => (
            <a key={l.href} className={styles.link} href={l.href}>{l.label}</a>
          ))}
          <a className={`btn btn-dark ${styles.cta}`} href="#hi">Say hi</a>
        </div>
      </div>
    </nav>
  );
}
