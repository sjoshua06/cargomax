import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import { servicesPreviewContent } from "../data/home";
import "../styles/services-preview.css";

function ServicesPreview() {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
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
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const { badge, title, summary, items } = servicesPreviewContent;

  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="container">
        {/* ---------- Centered Header ---------- */}
        <div className="services-head">
          <div className="section-badge section-badge--subtle">
            <span className="section-badge__dot" aria-hidden="true" />
            <span className="section-badge__text">{badge}</span>
          </div>

          <h2 id="services-heading" className="services-title">
            {title}
          </h2>

          <p className="services-summary">{summary}</p>
        </div>

        {/* ---------- 4 Square Service Cards ---------- */}
        <div
          ref={gridRef}
          className={`services-grid${visible ? " is-visible" : ""}`}
        >
          {items.map((service, index) => (
            <Link
              key={service.number}
              to={service.to}
              className="service-card"
              style={{ "--i": index }}
            >
              <div className="service-card__top">
                <span className="service-card__dot" aria-hidden="true" />
                <span className="service-card__number">{service.number}</span>
              </div>

              <div className="service-card__media">
                <img
                  src={service.image}
                  alt={service.alt}
                  width="480"
                  height="480"
                  loading="lazy"
                  decoding="async"
                  className="service-card__img"
                />
                <div className="service-card__blur" aria-hidden="true" />
                <div className="service-card__cta" aria-hidden="true">
                  <span className="service-card__cta-label">View Details</span>
                  <span className="service-card__cta-icon">
                    <ArrowUpRight size={16} strokeWidth={2} />
                  </span>
                </div>
              </div>

              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPreview;
