const projects = [
  {
    tag: "Infrastructure",
    title: "Sharjah Airport Sub Station",
    desc: "Full CCTV surveillance system and structured cabling installation across the airport sub station facility.",
    gradient: "linear-gradient(135deg, #0A1931 0%, #1A3D63 100%)",
  },
  {
    tag: "Hospitality & Sports",
    title: "Al Ain Equestrian, Shooting & Golf Club",
    desc: "Complete automatic door and gate barrier solutions across all entry and exit points of the club.",
    gradient: "linear-gradient(135deg, #1A3D63 0%, #4A7FA7 100%)",
  },
  {
    tag: "Commercial",
    title: "Dubai Properties Group",
    desc: "All electrical and civil works, stainless steel bollard lights and barrier gate systems.",
    gradient: "linear-gradient(135deg, #4A7FA7 0%, #0A1931 100%)",
  },
  {
    tag: "Corporate",
    title: "Office Park Building",
    desc: "Premium automatic sliding glass door installation — engineered for seamless, high-traffic daily use.",
    gradient: "linear-gradient(135deg, #0A1931 20%, #4A7FA7 100%)",
  },
  {
    tag: "Residential Community",
    title: "Golf Jumeirah Estate Community",
    desc: "Large-scale gate barrier deployment across the full community — 20 machines installed and commissioned.",
    gradient: "linear-gradient(135deg, #1A3D63 0%, #0A1931 100%)",
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
              Trusted across the{" "}
              <span className="accent">UAE.</span>
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
