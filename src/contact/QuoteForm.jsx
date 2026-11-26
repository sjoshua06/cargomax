import { useState, useRef, useEffect } from "react";
import { Pause, Play } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import FormField from "../components/common/FormField";
import { freightModes } from "../data/contactData";
import { companyInfo } from "../data/navigation";

/**
 * Set VITE_QUOTE_ENDPOINT in .env once a real form-submission service
 * exists (Formspree, Resend, custom backend, etc.).
 * Without it the form shows a helpful fallback — never claims success.
 */
const QUOTE_ENDPOINT = import.meta.env.VITE_QUOTE_ENDPOINT;

const VIDEO_POSTER =
  "https://cdn.prod.website-files.com/6a9167ba1c0603fd365493d1%2F6a96b377c731f6d3e483d4f7_10451891-hd_1440_2560_30fps_poster.0000000.jpg";
const VIDEO_MP4 =
  "https://cdn.prod.website-files.com/6a9167ba1c0603fd365493d1%2F6a96b377c731f6d3e483d4f7_10451891-hd_1440_2560_30fps_mp4.mp4";
const VIDEO_WEBM =
  "https://cdn.prod.website-files.com/6a9167ba1c0603fd365493d1%2F6a96b377c731f6d3e483d4f7_10451891-hd_1440_2560_30fps_webm.webm";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  origin: "",
  destination: "",
  freightMode: "",
  readyDate: "",
  message: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.firstName.trim()) errors.firstName = "First name is required.";
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  if (!values.message.trim())
    errors.message = "Please describe your shipment or enquiry.";
  return errors;
}

function QuoteForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isPlaying, setIsPlaying] = useState(true);

  const formRef = useRef(null);
  const videoRef = useRef(null);

  // Respect prefers-reduced-motion: pause video on mount if reduced motion is preferred.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const fieldErrors = validate(values);
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const fieldErrors = validate(values);
    const errorKeys = Object.keys(fieldErrors);

    if (errorKeys.length > 0) {
      setErrors(fieldErrors);
      setTouched(Object.fromEntries(errorKeys.map((k) => [k, true])));
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      const first = formRef.current?.querySelector("[aria-invalid]");
      first?.focus();
      return;
    }

    /* ---- Guard: no backend configured ---- */
    if (!QUOTE_ENDPOINT) {
      setStatus({
        type: "info",
        message: `Online submissions open soon. Please email ${companyInfo.email} or call ${companyInfo.phones[0].display} with your enquiry.`,
      });
      return;
    }

    /* ---- Real submission ---- */
    setStatus({ type: "loading", message: "Sending your enquiry…" });

    try {
      const res = await fetch(QUOTE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error(String(res.status));

      setValues(INITIAL_VALUES);
      setTouched({});
      setErrors({});
      setStatus({
        type: "success",
        message:
          "Thank you! We\u2019ve received your enquiry and will be in touch shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again, or contact us directly by phone or email.",
      });
    }
  }

  const today = new Date().toISOString().split("T")[0];
  const isSubmitting = status.type === "loading";
  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  return (
    <section id="quote-form" className="quote-section">
      <Container>
        <div className="contact-grid">
          {/* Left column: CargoHype-style vertical video panel */}
          <div className="contact-video-wrap">
            <video
              ref={videoRef}
              id="contact-quote-video"
              className="contact-video"
              poster={VIDEO_POSTER}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src={VIDEO_MP4} type="video/mp4" />
              <source src={VIDEO_WEBM} type="video/webm" />
            </video>
            <div className="video-overlay" aria-hidden="true" />

            <p className="contact-subtitle">
              As soon as possible contact us
            </p>

            <button
              type="button"
              className="video-control-btn"
              onClick={toggleVideo}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              aria-pressed={!isPlaying}
              aria-controls="contact-quote-video"
            >
              {isPlaying ? (
                <Pause size={18} strokeWidth={2} aria-hidden="true" />
              ) : (
                <Play size={18} strokeWidth={2} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Right column: Request for Quote form */}
          <div className="quote-form-card">
            <SectionHeading
              eyebrow="RFQ / Request for Quote"
              title="Request a Quote"
              description="Fill in the details below and our team will get back to you with a tailored logistics solution."
            />

            <form
              ref={formRef}
              className="quote-form"
              onSubmit={handleSubmit}
              noValidate
            >
              {/* Name row */}
              <div className="quote-form__row">
                <FormField
                  label="First Name"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={visibleError("firstName")}
                  placeholder="Your first name"
                  autoComplete="given-name"
                />
                <FormField
                  label="Last Name"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={visibleError("lastName")}
                  placeholder="Your last name"
                  autoComplete="family-name"
                />
              </div>

              {/* Contact row */}
              <div className="quote-form__row">
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={visibleError("email")}
                  placeholder="you@company.com"
                  autoComplete="email"
                />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={visibleError("phone")}
                  placeholder="+91 XXXXX XXXXX"
                  autoComplete="tel"
                />
              </div>

              {/* Company */}
              <FormField
                label="Company"
                name="company"
                value={values.company}
                onChange={handleChange}
                onBlur={handleBlur}
                error={visibleError("company")}
                placeholder="Company name (optional)"
                autoComplete="organization"
              />

              {/* Route row */}
              <div className="quote-form__row">
                <FormField
                  label="Origin"
                  name="origin"
                  value={values.origin}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={visibleError("origin")}
                  placeholder="City or port of origin"
                />
                <FormField
                  label="Destination"
                  name="destination"
                  value={values.destination}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={visibleError("destination")}
                  placeholder="City or port of destination"
                />
              </div>

              {/* Freight / date row */}
              <div className="quote-form__row">
                <FormField
                  label="Freight Mode"
                  name="freightMode"
                  type="select"
                  value={values.freightMode}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={visibleError("freightMode")}
                  options={freightModes}
                  placeholder="Select freight mode"
                />
                <FormField
                  label="Ready Date"
                  name="readyDate"
                  type="date"
                  value={values.readyDate}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={visibleError("readyDate")}
                  min={today}
                />
              </div>

              {/* Message */}
              <FormField
                label="Cargo Details / Message"
                name="message"
                type="textarea"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={visibleError("message")}
                placeholder="Describe your shipment, cargo type, weight, dimensions, or any questions."
                rows={4}
              />

              {/* Submit */}
              <button
                type="submit"
                className="quote-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending…" : "Send Request"}
              </button>

              {/* Status feedback */}
              {status.type !== "idle" && (
                <p
                  className={`quote-form__status is-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default QuoteForm;
