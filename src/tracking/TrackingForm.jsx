import { useState, useRef } from "react";
import { Phone, Mail, Clock, CheckCircle2, Search } from "lucide-react";
import Container from "../components/common/Container";
import SectionHeading from "../components/common/SectionHeading";
import FormField from "../components/common/FormField";
import { companyInfo } from "../data/navigation";

/**
 * Uses VITE_TRACKING_ENDPOINT if set, or falls back to VITE_QUOTE_ENDPOINT.
 * Never claims success without a real endpoint response.
 */
const TRACKING_ENDPOINT =
  import.meta.env.VITE_TRACKING_ENDPOINT ||
  import.meta.env.VITE_QUOTE_ENDPOINT;

const REFERENCE_TYPES = [
  { value: "bill-of-lading", label: "Bill of Lading (B/L)" },
  { value: "air-waybill", label: "Air Waybill (AWB)" },
  { value: "container-number", label: "Container Number" },
  { value: "booking-reference", label: "Booking / Job Reference" },
];

const STEPS = [
  {
    icon: Search,
    title: "1. Submit Your Reference",
    text: "Share your B/L, AWB, container, or job number along with your contact details.",
  },
  {
    icon: Clock,
    title: "2. Operations Check",
    text: "Our team verifies real-time vessel, flight, or customs clearance status.",
  },
  {
    icon: CheckCircle2,
    title: "3. Direct Update",
    text: "We send the latest milestone and ETA directly to your email or phone.",
  },
];

const INITIAL_VALUES = {
  referenceType: "",
  referenceNumber: "",
  name: "",
  email: "",
  phone: "",
  notes: "",
  _honey: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.referenceType)
    errors.referenceType = "Please select a reference type.";
  if (!values.referenceNumber.trim())
    errors.referenceNumber = "Reference number is required.";
  if (!values.name.trim()) errors.name = "Your name is required.";
  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_RE.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) errors.phone = "Phone number is required.";
  return errors;
}

function TrackingForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const formRef = useRef(null);

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

    if (!TRACKING_ENDPOINT) {
      setStatus({
        type: "info",
        message: `Online tracking requests open soon. Please call Customer Care at ${companyInfo.phones[1].display} or email ${companyInfo.email} with reference ${values.referenceNumber.trim()}.`,
      });
      return;
    }

    setStatus({ type: "loading", message: "Submitting tracking request…" });

    try {
      const payload = {
        ...values,
        _subject: `Shipment Tracking Request — ${values.referenceNumber.trim()}`,
        _replyto: values.email.trim(),
        _template: "table",
      };

      const res = await fetch(TRACKING_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));

      const data = await res.json().catch(() => null);
      if (data && (data.success === false || data.success === "false")) {
        throw new Error(data.message || "Submission rejected");
      }

      setValues(INITIAL_VALUES);
      setTouched({});
      setErrors({});
      setStatus({
        type: "success",
        message:
          "Tracking request received! Our operations team will check your shipment and contact you shortly.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Something went wrong. Please try again or call Customer Care directly.",
      });
    }
  }

  const isSubmitting = status.type === "loading";
  const visibleError = (name) => (touched[name] ? errors[name] : undefined);

  return (
    <section className="tracking-section" aria-label="Shipment status request">
      <Container>
        <div className="tracking-grid">
          {/* Left: Tracking Request Form */}
          <div className="tracking-form-card">
            <SectionHeading
              eyebrow="Status Request"
              title="Request a Shipment Update"
              description="Provide your reference number and contact details so our team can send you the latest status."
            />

            <form
              ref={formRef}
              className="tracking-form"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="tracking-form__row">
                <FormField
                  label="Reference Type"
                  name="referenceType"
                  type="select"
                  value={values.referenceType}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={visibleError("referenceType")}
                  options={REFERENCE_TYPES}
                  placeholder="Select reference type"
                />
                <FormField
                  label="Reference Number"
                  name="referenceNumber"
                  value={values.referenceNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                  error={visibleError("referenceNumber")}
                  placeholder="e.g. BL / AWB / Container No."
                />
              </div>

              <FormField
                label="Your Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                error={visibleError("name")}
                placeholder="Full name"
                autoComplete="name"
              />

              <div className="tracking-form__row">
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
                  label="Phone Number"
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

              <FormField
                label="Additional Notes"
                name="notes"
                type="textarea"
                value={values.notes}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Optional — e.g. specific port, expected delivery date, or questions."
                rows={3}
              />

              {/* Honeypot field for FormSubmit spam protection */}
              <input
                type="text"
                name="_honey"
                value={values._honey}
                onChange={handleChange}
                className="visually-hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <button
                type="submit"
                className="tracking-form__submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Check Shipment Status"}
              </button>

              {status.type !== "idle" && (
                <p
                  className={`tracking-form__status is-${status.type}`}
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>

          {/* Right: How It Works + Urgent Support */}
          <aside className="tracking-sidebar">
            <div className="tracking-info-card">
              <span className="tracking-info-card__eyebrow">
                How Tracking Works
              </span>
              <h2 className="tracking-info-card__title">
                Operations-Verified Updates
              </h2>

              <ul className="tracking-steps">
                {STEPS.map(({ icon: Icon, title, text }) => (
                  <li key={title} className="tracking-step">
                    <span className="tracking-step__icon" aria-hidden="true">
                      <Icon size={20} strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="tracking-step__title">{title}</h3>
                      <p className="tracking-step__text">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="tracking-support-card">
              <span className="tracking-support-card__eyebrow">
                Need Urgent Assistance?
              </span>
              <h2 className="tracking-support-card__title">
                Contact Customer Care
              </h2>
              <p className="tracking-support-card__text">
                For time-critical shipments, reach our operations desk directly.
              </p>

              <div className="tracking-support-links">
                <a
                  href={companyInfo.phones[1].href}
                  className="tracking-support-link"
                >
                  <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span>
                    Customer Care: <strong>{companyInfo.phones[1].display}</strong>
                  </span>
                </a>
                <a
                  href={companyInfo.phones[0].href}
                  className="tracking-support-link"
                >
                  <Phone size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span>
                    Office: <strong>{companyInfo.phones[0].display}</strong>
                  </span>
                </a>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="tracking-support-link"
                >
                  <Mail size={18} strokeWidth={1.75} aria-hidden="true" />
                  <span>{companyInfo.email}</span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

export default TrackingForm;
