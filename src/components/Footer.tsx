export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand brand-footer">
            <span className="brand-mark" aria-hidden>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="2" width="28" height="28" rx="8" fill="#00DF82" />
                <path
                  d="M10 22L16 8l6 14M12.5 18h7"
                  stroke="#03624C"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="brand-text brand-text-light">
              Alpha<span>doors</span>
            </span>
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
            <li><a href="#services">CCTV</a></li>
            <li><a href="#services">Gate Barriers</a></li>
            <li><a href="#services">Automatic Doors</a></li>
            <li><a href="#services">Rolling Shutters</a></li>
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
            <li>+971 4 000 0000</li>
            <li>info@alphadoors.ae</li>
            <li>Dubai, UAE</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Alphadoors. All rights reserved.</span>
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
