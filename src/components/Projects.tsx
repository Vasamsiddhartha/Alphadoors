const projects = [
  {
    tag: "Commercial",
    title: "Corporate HQ — Dubai Marina",
    desc: "Integrated access control + CCTV across 14 floors.",
    gradient: "linear-gradient(135deg, #03624C 0%, #000 100%)",
  },
  {
    tag: "Industrial",
    title: "Logistics Hub — Jebel Ali",
    desc: "Sectional overhead doors and high-speed barriers.",
    gradient: "linear-gradient(135deg, #000 0%, #03624C 100%)",
  },
  {
    tag: "Retail",
    title: "Flagship Mall — Abu Dhabi",
    desc: "Sliding glass doors and 4K surveillance network.",
    gradient: "linear-gradient(135deg, #00DF82 0%, #03624C 100%)",
  },
  {
    tag: "Residential",
    title: "Private Villa — Al Barsha",
    desc: "Automatic sliding gate, garage door and smart access.",
    gradient: "linear-gradient(135deg, #03624C 0%, #00DF82 100%)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-head">
          <div>
            <span className="eyebrow">Our Projects</span>
            <h2 className="section-title">
              Built across the{" "}
              <span className="accent">UAE skyline.</span>
            </h2>
          </div>
          <a href="#contact" className="btn btn-ghost">
            View All Projects <span className="arrow">→</span>
          </a>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <article
              key={p.title}
              className="project-card"
              style={{ background: p.gradient }}
            >
              <div className="project-tag">{p.tag}</div>
              <div className="project-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <a href="#contact" className="project-link">
                  Case Study <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
