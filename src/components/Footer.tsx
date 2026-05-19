
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand brand-footer">
            <img
              src={`${import.meta.env.BASE_URL}Logo.jpeg`}
              alt="Alpha Line Technical Services"
              className="brand-logo brand-logo-footer"
            />
          </a>
          <p>
            Smart security, access control and automatic door solutions —
            engineered for reliability across the UAE.
          </p>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">Access Control</a></li>
            <li><a href="#services">CCTV Systems</a></li>
            <li><a href="#services">Gate Barriers</a></li>
            <li><a href="#services">Automatic Doors</a></li>
            <li><a href="#services">Facial Recognition</a></li>
            <li><a href="#services">Structural Cabling</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Why Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li>Narender Singh</li>
            <li>
              <a href="tel:+971567216267" className="footer-contact-link">
                +971 567 216 267
              </a>
            </li>
            <li>
              <a href="tel:+971522010175" className="footer-contact-link">
                +971 522 010 175
              </a>
            </li>
            <li>
              <a href="mailto:sales@alphalinetechs.com" className="footer-contact-link">
                sales@alphalinetechs.com
              </a>
            </li>
            <li>
              <a href="mailto:alphalinetechnicals@gmail.com" className="footer-contact-link">
                alphalinetechnicals@gmail.com
              </a>
            </li>
            <li>Bank Street Building, Office 4F-37,<br />Mankhool, Dubai, UAE</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Alpha Line Technical Services Est. All rights reserved.</span>
          <div className="footer-links">
            <a href="#contact">Privacy</a>
            <a href="#contact">Terms</a>
            <a href="#contact">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
