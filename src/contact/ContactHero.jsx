import Container from "../components/common/Container";
import Button from "../components/common/Button";

/**
 * Contact page hero — background photo (/images/contact/contact-bg.jpg)
 * with a dark navy overlay for WCAG AA contrast.
 */
function ContactHero() {
  return (
    <section className="contact-hero">
      <img
        src="/images/contact/contact-bg.jpg"
        alt=""
        className="contact-hero__bg"
        fetchPriority="high"
        decoding="async"
      />
      <div className="contact-hero__overlay" aria-hidden="true" />

      <Container className="contact-hero__inner">
        <span className="contact-hero__eyebrow">Contact Us</span>
        <h1 className="contact-hero__title">
          Let&rsquo;s Move Your Cargo&nbsp;Forward.
        </h1>
        <p className="contact-hero__text">
          Tell us what you need to ship. Our team will help you explore
          the right logistics solution.
        </p>
        <Button href="#quote-form" variant="primary">
          Request a Quote
        </Button>
      </Container>
    </section>
  );
}

export default ContactHero;
