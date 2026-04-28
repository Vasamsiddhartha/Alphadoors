import Icon from "./Icon";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-visual">
          <div className="about-image about-image-1" />
          <div className="about-image about-image-2" />
          <div className="about-card">
            <div className="about-card-icon">
              <Icon name="award" size={22} color="#00DF82" />
            </div>
            <div>
              <strong>ISO Certified</strong>
              <span>Quality & security standards</span>
            </div>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow">About Alphadoors</span>
          <h2 className="section-title">
            Engineered security for{" "}
            <span className="accent">modern spaces.</span>
          </h2>
          <p className="about-lead">
            From high-tech access control to precision-engineered automatic
            doors, Alphadoors combines reliable hardware with intelligent
            automation so your property stays secure, efficient and future-ready.
          </p>

          <ul className="about-points">
            <li>
              <span className="check">
                <Icon name="shield" size={16} color="#03624C" />
              </span>
              <div>
                <strong>End-to-end installation</strong>
                <p>
                  Consultation, design, supply, installation and annual
                  maintenance — handled in-house by certified technicians.
                </p>
              </div>
            </li>
            <li>
              <span className="check">
                <Icon name="bolt" size={16} color="#03624C" />
              </span>
              <div>
                <strong>Smart & scalable systems</strong>
                <p>
                  IoT-ready access, cloud CCTV and automation that grows with
                  your building.
                </p>
              </div>
            </li>
            <li>
              <span className="check">
                <Icon name="clock" size={16} color="#03624C" />
              </span>
              <div>
                <strong>Round-the-clock support</strong>
                <p>
                  Rapid response service across the UAE, 365 days a year.
                </p>
              </div>
            </li>
          </ul>

          <div className="about-actions">
            <a href="#services" className="btn btn-primary">
              Our Services <span className="arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Talk to an Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
