import { Link } from "react-router-dom";

/**
 * CargoMax logo (public/logo/logo.png).
 * `plate` puts the logo on a small white card so a dark-coloured logo
 * stays visible on navy backgrounds.
 */
function Logo({ plate = false, className = "", onClick }) {
  return (
    <Link
      to="/"
      className={`brand-link ${plate ? "brand-link--plate" : ""} ${className}`.trim()}
      aria-label="CargoMax — home"
      onClick={onClick}
    >
      <img
        src="/logo/image.png"
        alt="CargoMax"
        width="150"
        height="44"
        className="brand-logo"
        decoding="async"
      />
    </Link>
  );
}

export default Logo;
