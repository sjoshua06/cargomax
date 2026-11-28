import { useEffect, useRef, useState } from "react";

import { trustedCompanies } from "../data/home";
import "../styles/marquee.css";

function CompanyMarquee() {
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

  return (
    <section
      id="trusted-companies"
      className="companies-section"
      aria-label={trustedCompanies.badge}
    >
      <div className="container">
        <div className="companies-badge-wrap">
          <div className="companies-badge">
            <span className="companies-badge__dot" aria-hidden="true" />
            <span className="companies-badge__text">
              {trustedCompanies.badge}
            </span>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`companies-grid${visible ? " is-visible" : ""}`}
        >
          {trustedCompanies.logos.map((company, index) => (
            <article
              key={company.number}
              className="company-card"
              style={{ "--i": index }}
            >
              <div className="company-card__top">
                <span className="company-card__dot" aria-hidden="true" />
                <span className="company-card__number">{company.number}</span>
              </div>

              <div className="company-card__media">
                <img
                  src={company.src}
                  alt={company.title}
                  width={company.width}
                  height={company.height}
                  loading="lazy"
                  decoding="async"
                  className={`company-card__logo${
                    company.trimBorder ? " company-card__logo--trim" : ""
                  }`}
                />
              </div>

              <div className="company-card__body">
                <h3 className="company-card__title">{company.title}</h3>
                {company.description ? (
                  <p className="company-card__desc">{company.description}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyMarquee;
