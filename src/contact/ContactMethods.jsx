import { Phone, Mail, MessageCircle } from "lucide-react";
import Container from "../components/common/Container";
import { contactMethods } from "../data/contactData";

const ICONS = { phone: Phone, mail: Mail, whatsapp: MessageCircle };

/**
 * Quick-access contact cards — phone, email, WhatsApp.
 * Each card is a tappable link.
 */
function ContactMethods() {
  return (
    <section className="contact-methods" aria-label="Contact channels">
      <Container>
        <div className="contact-methods__grid">
          {contactMethods.map(({ icon, label, value, href, description }) => {
            const Icon = ICONS[icon];
            return (
              <a
                key={label}
                href={href}
                className="contact-method-card"
                target={icon === "whatsapp" ? "_blank" : undefined}
                rel={icon === "whatsapp" ? "noopener noreferrer" : undefined}
              >
                <span className="contact-method-card__icon" aria-hidden="true">
                  <Icon size={24} strokeWidth={1.75} />
                </span>
                <span className="contact-method-card__content">
                  <span className="contact-method-card__label">{label}</span>
                  <span className="contact-method-card__value">{value}</span>
                  <span className="contact-method-card__desc">{description}</span>
                </span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default ContactMethods;
