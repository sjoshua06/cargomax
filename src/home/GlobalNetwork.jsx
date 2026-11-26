import { useEffect, useRef, useState } from "react";

import Button from "../components/common/Button";
import { globalNetworkContent } from "../data/home";
import "../styles/global-network.css";

function GlobalNetwork() {
  const mapRef = useRef(null);
  const [visible, setVisible] = useState(false);

  // Reveal hub pins and cards smoothly once the globe enters the viewport.
  useEffect(() => {
    const node = mapRef.current;
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

  const { badge, summary, cta, inlineImages, mapImage, hubs, stats } =
    globalNetworkContent;

  return (
    <section className="network-section" aria-labelledby="network-heading">
      {/* ---------- Header ---------- */}
      <div className="container">
        <div className="network-head">
          <div className="section-badge">
            <span className="section-badge__dot" aria-hidden="true" />
            <span className="section-badge__text">{badge}</span>
          </div>

          <div className="network-head__right">
            <h2 id="network-heading" className="network-title">
              <span className="network-title__line">
                <span>Five Hubs, One</span>
                <img
                  src={inlineImages.corridor.src}
                  alt={inlineImages.corridor.alt}
                  width="88"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="network-title__pill"
                />
                <span>Owned Corridor,</span>
              </span>
              <span className="network-title__line">
                <span>Every Major Trade Lane.</span>
                <img
                  src={inlineImages.lane.src}
                  alt={inlineImages.lane.alt}
                  width="88"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="network-title__pill"
                />
              </span>
            </h2>

            <p className="network-summary">{summary}</p>

            <div className="network-cta">
              <Button to={cta.to} variant="primary">
                {cta.label}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* ---------- Globe & Hub Pins ---------- */}
      <div
        ref={mapRef}
        className={`network-map-stage${visible ? " is-visible" : ""}`}
      >
        <div className="network-map-frame">
          <img
            src={mapImage.src}
            alt={mapImage.alt}
            width={mapImage.width}
            height={mapImage.height}
            loading="lazy"
            decoding="async"
            className="network-map-image"
          />

          {hubs.map((hub, index) => (
            <div
              key={hub.id}
              className={`hub-anchor hub-anchor--${hub.placement}${
                hub.isOrigin ? " is-origin" : ""
              }`}
              style={{
                left: `${hub.x}%`,
                top: `${hub.y}%`,
                "--i": index,
              }}
            >
              <span className="hub-dot" aria-hidden="true" />
              <div className="hub-card">
                <span className="hub-card__role">{hub.role}</span>
                <div className="hub-card__title">
                  {hub.code} — {hub.city}
                </div>
                <span className="hub-card__detail">{hub.detail}</span>
              </div>
            </div>
          ))}

          {/* Bottom gradient & stats strip */}
          <div className="network-stats-overlay">
            <div className="container">
              <ul className="network-stats-list">
                {stats.map((item) => (
                  <li key={item} className="network-stats-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Mobile hub list (shown on narrow screens where floating cards would overlap) */}
        <div className="container network-mobile-hubs">
          <div className="network-mobile-grid">
            {hubs.map((hub) => (
              <div
                key={hub.id}
                className={`hub-card hub-card--static${
                  hub.isOrigin ? " is-origin" : ""
                }`}
              >
                <span className="hub-card__role">{hub.role}</span>
                <div className="hub-card__title">
                  {hub.code} — {hub.city}
                </div>
                <span className="hub-card__detail">{hub.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalNetwork;
