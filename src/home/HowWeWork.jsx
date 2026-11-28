import { useEffect, useRef } from "react";

import Button from "../components/common/Button";
import { howWeWorkContent } from "../data/home";
import "../styles/how-we-work.css";

function clamp01(value) {
  return Math.max(0, Math.min(1, value));
}

function HowWeWork() {
  const stickyRef = useRef(null);
  const gridRef = useRef(null);

  // Scroll-driven step reveal on desktop — mutates CSS variables via rAF
  // directly on the DOM node so scrolling triggers zero React re-renders.
  useEffect(() => {
    const stickyEl = stickyRef.current;
    const gridEl = gridRef.current;
    if (!stickyEl || !gridEl) return undefined;

    const desktopQuery = window.matchMedia("(min-width: 961px)");
    const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    let rafId = 0;

    function updateProgress() {
      rafId = 0;
      if (!desktopQuery.matches || reducedQuery.matches) {
        gridEl.style.setProperty("--p1", "1");
        gridEl.style.setProperty("--p2", "1");
        gridEl.style.setProperty("--p3", "1");
        gridEl.dataset.activeStep = "3";
        return;
      }

      const rect = stickyEl.getBoundingClientRect();
      const scrollable = Math.max(1, stickyEl.offsetHeight - window.innerHeight);
      const progress = clamp01(-rect.top / scrollable);

      // Divide the sticky travel evenly across the 3 steps
      const p1 = clamp01(progress * 3);
      const p2 = clamp01((progress - 1 / 3) * 3);
      const p3 = clamp01((progress - 2 / 3) * 3);

      gridEl.style.setProperty("--p1", p1.toFixed(3));
      gridEl.style.setProperty("--p2", p2.toFixed(3));
      gridEl.style.setProperty("--p3", p3.toFixed(3));

      const active = progress >= 2 / 3 ? "3" : progress >= 1 / 3 ? "2" : "1";
      if (gridEl.dataset.activeStep !== active) {
        gridEl.dataset.activeStep = active;
      }
    }

    function scheduleUpdate() {
      if (!rafId) {
        rafId = window.requestAnimationFrame(updateProgress);
      }
    }

    updateProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    desktopQuery.addEventListener("change", scheduleUpdate);
    reducedQuery.addEventListener("change", scheduleUpdate);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      desktopQuery.removeEventListener("change", scheduleUpdate);
      reducedQuery.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  const { badge, title, summary, cta, steps } = howWeWorkContent;

  return (
    <section className="process-section" aria-labelledby="how-we-work-heading">
      <div className="container">
        {/* ---------- Section header ---------- */}
        <div className="process-head">
          <div className="process-badge">
            <span className="process-badge__dot" aria-hidden="true" />
            <span className="process-badge__text">{badge}</span>
          </div>

          <div className="process-head-row">
            <h2 id="how-we-work-heading" className="process-title">
              {title}
            </h2>

            <div className="process-head-right">
              <p className="process-summary">{summary}</p>
              <Button to={cta.to} variant="primary">
                {cta.label}
              </Button>
            </div>
          </div>
        </div>

        {/* ---------- Sticky 3-step progression ---------- */}
        <div ref={stickyRef} className="process-sticky">
          <div ref={gridRef} className="process-grid" data-active-step="1">
            {steps.map((item, index) => (
              <article
                key={item.step}
                className={`process-step process-step--${index + 1}`}
              >
                <div className="process-step__top">
                  <div className="process-line-track" aria-hidden="true">
                    <div className="process-line-fill" />
                  </div>
                  <span className="process-step__dot" aria-hidden="true" />
                  <span className="process-step__label">{item.step}</span>
                </div>

                <div className="process-step__media">
                  <img
                    src={item.image}
                    alt={item.alt}
                    width="640"
                    height="800"
                    loading="lazy"
                    decoding="async"
                    className="process-step__img"
                  />
                </div>

                <div className="process-step__body">
                  <h3 className="process-step__title">{item.title}</h3>
                  <p className="process-step__desc">{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;
