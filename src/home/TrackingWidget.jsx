import { useEffect, useRef, useState } from "react";

import Button from "../components/common/Button";
import { trackingPlatformContent } from "../data/home";
import "../styles/tracking-platform.css";

function TrackingWidget() {
  const stageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = stageRef.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { badge, title, summary, cta, image } = trackingPlatformContent;

  return (
    <section
      className="platform-section"
      aria-labelledby="tracking-platform-heading"
    >
      <div className="container">
        <div
          ref={stageRef}
          className={`platform-wrap${visible ? " is-visible" : ""}`}
        >
          {/* ---------- Left column: badge, title, summary, CTA ---------- */}
          <div className="platform-left">
            <div className="platform-top">
              <div className="section-badge section-badge--subtle">
                <span className="section-badge__dot" aria-hidden="true" />
                <span className="section-badge__text">{badge}</span>
              </div>

              <h2 id="tracking-platform-heading" className="platform-title">
                {title}
              </h2>

              <p className="platform-summary">{summary}</p>
            </div>

            <div className="platform-cta">
              <Button to={cta.to} variant="primary">
                {cta.label}
              </Button>
            </div>
          </div>

          {/* ---------- Right column: clean tracking image (no outer boxes) ---------- */}
          <div className="platform-media">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading="lazy"
              decoding="async"
              className="platform-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrackingWidget;
