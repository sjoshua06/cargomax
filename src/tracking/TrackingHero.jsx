import Container from "../components/common/Container";

/**
 * Tracking page hero — background photo (/images/tracking/tarcking-hero.jpeg)
 * with a dark navy overlay for WCAG AA contrast.
 */
function TrackingHero() {
  return (
    <section className="tracking-hero">
      <img
        src="/images/tracking/tracking2.jpg"
        alt=""
        className="tracking-hero__bg"
        fetchPriority="high"
        decoding="async"
      />
      <div className="tracking-hero__overlay" aria-hidden="true" />

      <Container className="tracking-hero__inner">
        <span className="tracking-hero__eyebrow">Shipment Tracking</span>
        <h1 className="tracking-hero__title">Track Your Shipment</h1>
        <p className="tracking-hero__text">
          Enter your shipment reference below. Our operations team will verify
          the latest carrier and customs status and update you directly.
        </p>
      </Container>
    </section>
  );
}

export default TrackingHero;
