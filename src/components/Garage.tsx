import { projects, type Project } from "@/data/portfolio";
import styles from "./Garage.module.css";

export default function Garage() {
  return (
    <section id="garage" className={styles.band}>
      <div className={`${styles.section} wrap`}>
        <div className={styles.head} data-reveal="up">
          <div className="eyebrow">Side projects</div>
          <h2 className="h2"><span className="mark">The garage</span></h2>
          <p className={styles.sub}>Under construction. Mind the tape.</p>
        </div>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i} />
          ))}
          <div className={`${styles.soon} ${projects.length === 0 ? styles.soonAlone : ""}`} data-reveal="up">
            <div className={`${styles.soonTitle} display`}>More parts arriving soon</div>
            <div className={styles.soonSub}>Check back in a bit</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <a
      className={`${styles.project} lift`}
      href={project.url ?? "#"}
      target={project.url ? "_blank" : undefined}
      rel={project.url ? "noreferrer" : undefined}
      data-reveal="up"
    >
      <div className={styles.tape} aria-hidden="true" />
      <div className={`${styles.shot} ${styles[`shot${index % 2}`]}`}>
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
        ) : (
          "[Screenshot]"
        )}
      </div>
      <div className={styles.body}>
        <h3 className={`${styles.name} display`}>{project.name}</h3>
        <p className={styles.blurb}>{project.blurb}</p>
      </div>
    </a>
  );
}
