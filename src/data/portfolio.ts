// All the words on the site live here.
// Change this file to update your portfolio — no need to touch the components.

export const profile = {
  name: "Satwik Nakhate",
  firstName: "Satwik",
  role: "Full Stack Developer",
  city: "Pune",
  years: "4 years",
  currentCompany: "NOVATEKNO",
  intro:
    "who builds the whole road — the UI you drive on, the APIs underneath, and the data that keeps it running.",
  email: "satwiknakhate2000@gmail.com",
  linkedin: "https://www.linkedin.com/in/satwik-nakhate-418619177/",
  // Files live in /public. Replace the file to update it (keep the same name).
  resumeUrl: "/resume.pdf",
  // Small square crop of /public/me.jpg (336×336, ~23 KB) so the page stays fast.
  photo: "/me-avatar.jpg" as string | null,
};

// The "Road Trip Pass" card in the hero.
export const ticket = {
  fields: [
    { label: "FROM", value: "Circuits" },
    { label: "TO", value: "Code" },
    { label: "BASE", value: "Pune, IN" },
    { label: "ON THE ROAD", value: profile.years },
  ],
  stack: "React · MongoDB · Express · Node",
  stickers: ["Full stack", "4 yrs shipping", "Pune, India"],
};

export type Stop = {
  dates: string;
  place: string;
  title: string;
  body: string;
  stat?: { value: string; label: string };
  tone: "white" | "yellow" | "accent";
};

export const stops: Stop[] = [
  {
    dates: "2018 – 2022",
    place: "VIT, Pune",
    title: "Engineering roots",
    body: "B.Tech in Instrumentation & Control at VIT Pune. Learned to think in systems — sensors, logic, feedback. That's still how I build apps today, just with code instead of circuits.",
    tone: "white",
  },
  {
    dates: "Dec 2022 – Feb 2023",
    place: "Kylo Apps, Delhi",
    title: "First job, first ship",
    body: "Levelled up with the Web Developer Bootcamp, then joined Kylo Apps as an SDE-1. Responsive React features with role-based access control for several SaaS apps, tight sprints, lots of code reviews.",
    tone: "white",
  },
  {
    dates: "Feb 2023 – Mar 2024",
    place: "vmedulife, Pune",
    title: "Big system, front to back",
    body: "A large college ERP: admissions, fees, financial reports. Built the workflows, integrated REST APIs for real-time data sync, added OAuth/JWT auth, tested with Jest + RTL.",
    stat: { value: "35%", label: "less manual processing time" },
    tone: "yellow",
  },
  {
    dates: "Mar 2024 – now",
    place: "NOVATEKNO, Pune",
    title: "The whole stack",
    body: "A healthcare product, end to end — React + TypeScript on web, React Native on mobile, GraphQL APIs in between. I own modules end to end, on real-time diagnostic data.",
    stat: { value: "50%", label: "faster page loads" },
    tone: "accent",
  },
];

export const stack = [
  { name: "Frontend", color: "lav", items: ["React", "Next.js", "TypeScript", "React Native", "Redux · Zustand"] },
  { name: "Backend", color: "yellow", items: ["Node.js", "Express", "GraphQL", "REST APIs", "JWT · OAuth", "Role-based access", "Postman"] },
  { name: "Data", color: "orange", items: ["MySQL", "Oracle PL/SQL", "MongoDB"] },
  { name: "Ship it", color: "paper", items: ["Jest + RTL", "Jenkins CI/CD", "Git"] },
] as const;

export const marquee = [
  "React", "TypeScript", "Next.js", "React Native", "Node.js",
  "Express", "GraphQL", "MySQL", "MongoDB",
];

export type Project = {
  name: string;
  blurb: string;
  url?: string;
  image?: string; // e.g. "/projects/my-app.png" inside /public
  tags?: string[];
};

// Projects shown in "The garage". While this list is empty, only the
// "More parts arriving soon" card shows. Uncomment / add entries when ready:
export const projects: Project[] = [
  // { name: "My App", blurb: "One line on what it does", url: "https://...", image: "/projects/my-app.png" },
  // { name: "[Project two]", blurb: "[One line on what it does]" },
];
