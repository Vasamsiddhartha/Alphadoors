import Icon from "./Icon";
import { services } from "../data/services";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="services-head">
          <div>
            <span className="eyebrow">Our Services</span>
            <h2 className="section-title">
              Complete security &{" "}
              <span className="accent">entrance solutions.</span>
            </h2>
          </div>
          <p className="services-intro">
            Nine specialised services under one trusted roof — from access
            control and CCTV to heavy-duty industrial doors. Every Alphadoors
            install is engineered for longevity, safety and seamless day-to-day
            use.
          </p>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <article key={s.id} className="service-card" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="service-number">0{i + 1}</div>
              <div className="service-icon">
                <Icon name={s.icon} size={30} color="#00DF82" />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.description}</p>
              <a href="#contact" className="service-link">
                Learn more
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
