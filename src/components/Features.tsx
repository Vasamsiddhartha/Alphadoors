import Icon from "./Icon";

const features = [
  {
    icon: "shield",
    title: "Certified & Insured",
    desc: "Fully licensed technicians and insured installations across every project.",
  },
  {
    icon: "bolt",
    title: "Smart Automation",
    desc: "IoT-ready hardware integrated with cloud dashboards and mobile apps.",
  },
  {
    icon: "clock",
    title: "24/7 Response",
    desc: "On-call engineers available any hour for service and emergency callouts.",
  },
  {
    icon: "award",
    title: "Premium Hardware",
    desc: "Partnerships with leading global brands — built to last decades, not years.",
  },
];

export default function Features() {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features-head">
          <span className="eyebrow eyebrow-light">Why Alphadoors</span>
          <h2 className="section-title features-title">
            Smart Features Built{" "}
            <span className="features-accent">For Security.</span>
          </h2>
          <p className="features-sub">
            Every system we deploy is designed around four promises — so the
            people and assets behind our doors are always protected.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon">
                <Icon name={f.icon} size={28} color="#00DF82" />
              </div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <a href="#contact" className="feature-link">
                Read More <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="features-cta">
          <div>
            <h3 className="features-cta-title">
              Ready to secure your space with Alphadoors?
            </h3>
            <p>
              Get a free on-site assessment and a detailed quote within 24
              hours.
            </p>
          </div>
          <a href="#contact" className="btn btn-light">
            Request Assessment <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
