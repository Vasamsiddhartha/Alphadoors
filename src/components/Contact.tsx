import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Icon from "./Icon";

// ─────────────────────────────────────────────────────────────
// EmailJS credentials — paste your 3 values below after setup
// Setup guide is at the bottom of this file
// ─────────────────────────────────────────────────────────────
const EJS_SERVICE_ID  = "service_pi94jff";
const EJS_TEMPLATE_ID = "template_lejs9if";
const EJS_PUBLIC_KEY  = "sW7cyBFbodwiO0SCO";
// ─────────────────────────────────────────────────────────────

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        EJS_SERVICE_ID,
        EJS_TEMPLATE_ID,
        form,
        { publicKey: EJS_PUBLIC_KEY }
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">

        {/* ── Left column – contact info ── */}
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
                <Icon name="shield" size={20} color="#B3CFE5" />
              </span>
              <div>
                <small>Contact Person</small>
                <strong>Narender Singh</strong>
              </div>
            </li>

            <li>
              <span className="contact-icon">
                <Icon name="phone" size={20} color="#B3CFE5" />
              </span>
              <div>
                <small>Call Us</small>
                <a href="tel:+971567216267" className="contact-link">
                  <strong>+971 567 216 267</strong>
                </a>
                <a href="tel:+971522010175" className="contact-link">
                  <strong>+971 522 010 175</strong>
                </a>
              </div>
            </li>

            <li>
              <span className="contact-icon">
                <Icon name="mail" size={20} color="#B3CFE5" />
              </span>
              <div>
                <small>Email</small>
                <a href="mailto:sales@alphalinetechs.com" className="contact-link">
                  <strong>sales@alphalinetechs.com</strong>
                </a>
                <a href="mailto:alphalinetechnicals@gmail.com" className="contact-link">
                  <strong>alphalinetechnicals@gmail.com</strong>
                </a>
              </div>
            </li>

            <li>
              <span className="contact-icon">
                <Icon name="pin" size={20} color="#B3CFE5" />
              </span>
              <div>
                <small>Office</small>
                <strong>
                  Bank Street Building, Office 4F-37<br />
                  Mankhool, Dubai,<br />
                  United Arab Emirates
                </strong>
              </div>
            </li>

          </ul>
        </div>

        {/* ── Right column – form ── */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>

          <div className="form-row">
            <label>
              <span>Full Name</span>
              <input name="from_name" type="text" required placeholder="John Doe" />
            </label>
            <label>
              <span>Phone</span>
              <input name="phone" type="tel" required placeholder="+971 50 000 0000" />
            </label>
          </div>

          <label>
            <span>Email</span>
            <input name="reply_to" type="email" required placeholder="you@company.com" />
          </label>

          <label>
            <span>Service</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Choose a service</option>
              <option>Access Control System</option>
              <option>CCTV Surveillance</option>
              <option>Gate Barriers</option>
              <option>Automatic Sliding Gate</option>
              <option>Facial Recognition Biometric</option>
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
              name="message"
              rows={4}
              placeholder="Tell us about your property and requirements..."
            />
          </label>

          {/* Status feedback */}
          {status === "success" && (
            <div className="form-alert form-alert--success">
              ✓ Message sent! We'll get back to you within one business day.
            </div>
          )}
          {status === "error" && (
            <div className="form-alert form-alert--error">
              ✗ Something went wrong. Please email us directly at sales@alphalinetechs.com
            </div>
          )}

          <button
            type="submit"
            className="btn btn-accent form-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send Message"}
            {status === "idle" && <span className="arrow">→</span>}
          </button>

        </form>
      </div>
    </section>
  );
}
