import Icon from "./Icon";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-video-wrap">
        <video
          className="hero-video"
          src={`${import.meta.env.BASE_URL}hero.mp4`}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <span className="hero-eyebrow">
          <span className="dot" /> Smart security & automation since 2010
        </span>

        <h1 className="hero-title">
          Securing entrances.<br />
          <span className="hero-accent">Empowering spaces.</span>
        </h1>

        <p className="hero-sub">
          Alphadoors designs and installs intelligent security, access control,
          and automatic door solutions for homes, commercial buildings and
          industrial facilities across the UAE.
        </p>

        <div className="hero-cta">
          <a href="#services" className="btn btn-accent">
            Explore Services <span className="arrow">→</span>
          </a>
          <a href="#contact" className="btn btn-light">
            <span className="play-icon">
              <Icon name="play" size={12} color="#03624C" />
            </span>
            Book a Site Visit
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <strong>15+</strong>
            <span>Years of expertise</span>
          </div>
          <div>
            <strong>1200+</strong>
            <span>Projects delivered</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Support & monitoring</span>
          </div>
        </div>
      </div>

      <div className="hero-badge">
        <div className="hero-badge-icon">
          <Icon name="shield" size={22} color="#00DF82" />
        </div>
        <div>
          <strong>Certified Installers</strong>
          <span>Trusted across UAE</span>
        </div>
      </div>
    </section>
  );
}
