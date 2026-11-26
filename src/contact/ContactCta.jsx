import Container from "../components/common/Container";
import Button from "../components/common/Button";
import { companyInfo } from "../data/navigation";

/**
 * Final call-to-action strip before the footer.
 * Provides a last-chance conversion point for users who scrolled
 * past the form.
 */
function ContactCta() {
  return (
    <section className="contact-cta" aria-label="Get started">
      <Container className="contact-cta__inner">
        <h2 className="contact-cta__title">Ready to Ship?</h2>
        <p className="contact-cta__text">
          Get in touch with our team to discuss your freight requirements.
        </p>
        <div className="contact-cta__actions">
          <Button href="#quote-form" variant="light">
            Request a Quote
          </Button>
          <Button href={companyInfo.phones[0].href} variant="light">
            Call Us Now
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default ContactCta;
