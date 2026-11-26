import { trustedCompanies } from "../data/home";
import "../styles/marquee.css";

// Repeat the 4 logos 3x per track so the strip stays wider than ultra-wide
// viewports and loops seamlessly with zero gap.
const TRACK_ITEMS = [
  ...trustedCompanies.logos,
  ...trustedCompanies.logos,
  ...trustedCompanies.logos,
];

function LogoTrack({ hidden = false }) {
  return (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {TRACK_ITEMS.map((logo, index) => (
        <div key={`${logo.name}-${index}`} className="marquee-item">
          <img
            src={logo.src}
            alt={hidden ? "" : logo.name}
            width={logo.width}
            height={logo.height}
            loading="lazy"
            decoding="async"
            className={`marquee-logo${logo.trimBorder ? " marquee-logo--trim" : ""}`}
          />
        </div>
      ))}
    </div>
  );
}

function CompanyMarquee() {
  return (
    <section
      id="trusted-companies"
      className="marquee-section"
      aria-label={trustedCompanies.badge}
    >
      <div className="marquee-badge-wrap">
        <div className="marquee-badge">
          <span className="marquee-badge__dot" aria-hidden="true" />
          <span className="marquee-badge__text">{trustedCompanies.badge}</span>
        </div>
      </div>

      <div className="marquee-viewport">
        <div className="marquee-fade marquee-fade--left" aria-hidden="true" />
        <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

        <div className="marquee-rail">
          <LogoTrack />
          <LogoTrack hidden />
        </div>
      </div>
    </section>
  );
}

export default CompanyMarquee;
