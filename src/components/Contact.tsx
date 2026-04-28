import { useState, type FormEvent } from "react";
import Icon from "./Icon";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <span className="eyebrow eyebrow-light">Get in Touch</span>
          <h2 className="section-title contact-title">
            Let's design your security,{" "}
            <span className="contact-accent">together.</span>
          </h2>
          <p className="contact-lead">
            Tell us about your space and what you need — our engineers will get
            back to you within one business day with a tailored recommendation.
          </p>

          <ul className="contact-info">
            <li>
              <span className="contact-icon">
                <Icon name="phone" size={20} color="#00DF82" />
              </span>
              <div>
                <small>Call Us</small>
                <strong>+971 4 000 0000</strong>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Icon name="mail" size={20} color="#00DF82" />
              </span>
              <div>
                <small>Email</small>
                <strong>info@alphadoors.ae</strong>
              </div>
            </li>
            <li>
              <span className="contact-icon">
                <Icon name="pin" size={20} color="#00DF82" />
              </span>
              <div>
                <small>Office</small>
                <strong>Dubai, United Arab Emirates</strong>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              <span>Full Name</span>
              <input type="text" required placeholder="John Doe" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" required placeholder="+971 50 000 0000" />
            </label>
          </div>
          <label>
            <span>Email</span>
            <input type="email" required placeholder="you@company.com" />
          </label>
          <label>
            <span>Service</span>
            <select required defaultValue="">
              <option value="" disabled>
                Choose a service
              </option>
              <option>Access Control System</option>
              <option>CCTV Surveillance</option>
              <option>Gate Barriers</option>
              <option>Automatic Sliding Gate</option>
              <option>Automatic Sliding Glass Door</option>
              <option>Trunslide Entrance</option>
              <option>Sectional Overhead Door</option>
              <option>Garage Door</option>
              <option>Automatic Rolling Shutter</option>
            </select>
          </label>
          <label>
            <span>Project details</span>
            <textarea
              rows={4}
              placeholder="Tell us about your property and requirements..."
            />
          </label>
          <button type="submit" className="btn btn-accent form-submit">
            {submitted ? "Message sent ✓" : "Send Message"}
            {!submitted && <span className="arrow">→</span>}
          </button>
        </form>
      </div>
    </section>
  );
}
