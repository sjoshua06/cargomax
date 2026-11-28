import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, ArrowUpRight, ArrowRight, ArrowUp } from "lucide-react";

import Logo from "./Logo";
import { companyInfo, socialLinks, footerColumns } from "../../data/navigation";
import "../../styles/footer.css";

const YEAR = new Date().getFullYear();
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// Set VITE_NEWSLETTER_ENDPOINT in .env once a real sign-up service exists.
const NEWSLETTER_ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT;

/**
 * Isolated so typing / status changes only re-render the form,
 * not the whole footer. Never claims success without a real endpoint.
 */
function NewsletterForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim() ?? "";

    if (!EMAIL_RE.test(email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }
    if (!NEWSLETTER_ENDPOINT) {
      setStatus({
        type: "info",
        message: `Sign-up opens soon — meanwhile write to ${companyInfo.email}.`,
      });
      return;
    }

    setStatus({ type: "loading", message: "Subscribing…" });
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus({ type: "success", message: "Thanks — you're subscribed." });
    } catch {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  }

  const hasMessage = status.type !== "idle";

  return (
    <form className="footer-form" onSubmit={handleSubmit} noValidate>
      <label htmlFor="footer-email" className="footer-label">
        Get updates
      </label>
      <div className="footer-form-row">
        <input
          id="footer-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Newsletter email"
          className="footer-input"
          aria-describedby="footer-form-note"
          required
        />
        <button
          type="submit"
          className="footer-submit"
          aria-label="Subscribe"
          disabled={status.type === "loading"}
        >
          <ArrowUpRight size={22} strokeWidth={1.75} />
        </button>
      </div>
      <p
        id="footer-form-note"
        className={`footer-form-note ${hasMessage ? `is-${status.type}` : ""}`}
        aria-live="polite"
      >
        {hasMessage ? status.message : "Your information is never disclosed to third parties."}
      </p>
    </form>
  );
}

function scrollToTop() {
  // Uses CSS `scroll-behavior` → smooth, or instant with reduced-motion.
  window.scrollTo({ top: 0 });
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        {/* ---------- Top: brand + contact | newsletter + socials ---------- */}
        <div className="footer-top">
          <div className="footer-brand-block">
            <Logo variant="light" />
            <p className="footer-blurb">{companyInfo.blurb}</p>

            <div className="footer-contact-block">
              <span className="footer-label">Contact</span>
              <ul className="footer-contact-list">
                <li>
                  <a href={`mailto:${companyInfo.email}`} className="footer-contact-item">
                    <Mail size={20} strokeWidth={1.5} aria-hidden="true" />
                    <span>{companyInfo.email}</span>
                  </a>
                </li>
                {companyInfo.phones.map(({ display, href }) => (
                  <li key={href}>
                    <a href={href} className="footer-contact-item">
                      <Phone size={20} strokeWidth={1.5} aria-hidden="true" />
                      <span>{display}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer-signup-block">
            <NewsletterForm />

            <ul className="footer-social-list" aria-label="Social media">
              {socialLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-social-item"
                  >
                    <span className="footer-social-text">{label}</span>
                    <ArrowRight size={20} strokeWidth={1.5} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ---------- Middle: back to top | link columns ---------- */}
        <div className="footer-middle">
          <button type="button" className="footer-back-top" onClick={scrollToTop}>
            <span className="footer-back-top__arrows" aria-hidden="true">
              <ArrowUp size={22} strokeWidth={1.75} />
              <ArrowUp size={22} strokeWidth={1.75} />
            </span>
            <span>Back To Top</span>
          </button>

          <nav className="footer-nav-grid" aria-label="Footer">
            {footerColumns.map(({ title, links }) => (
              <div key={title} className="footer-nav-column">
                <span className="footer-label">{title}</span>
                <ul className="footer-nav-list">
                  {links.map(({ label, to }) => (
                    <li key={to}>
                      <Link to={to} className="footer-nav-link">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* ---------- Bottom bar ---------- */}
        <div className="footer-bottom">
          <p>
            © {YEAR} {companyInfo.legalName}. All rights reserved.
          </p>
          <p>Built for better global connectivity.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
