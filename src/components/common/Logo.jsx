import { Link } from "react-router-dom";

const WHITE_LOGO = "logo/logo-png.png";
const BLUE_LOGO = "/logo/logo-png.png";

/**
 * CargoMax logo (3:1 ratio).
 * - variant="swap"  : white logo at rest, smoothly swaps to blue logo when scrolled (Navbar)
 * - variant="light" : white logo only (dark navy backgrounds like Footer)
 * - variant="dark"  : blue logo only (light backgrounds)
 */
function Logo({ variant = "swap", className = "", onClick }) {
  return (
    <Link
      to="/"
      className={`brand-link brand-link--${variant} ${className}`.trim()}
      aria-label="CargoMax — home"
      onClick={onClick}
    >
      {variant !== "dark" ? (
        <img
          src={WHITE_LOGO}
          alt="CargoMax — We Serve With Passion"
          width="276"
          height="92"
          className="brand-logo brand-logo--light"
          decoding="async"
        />
      ) : null}

      {variant !== "light" ? (
        <img
          src={BLUE_LOGO}
          alt={variant === "swap" ? "" : "CargoMax — We Serve With Passion"}
          aria-hidden={variant === "swap" || undefined}
          width="276"
          height="92"
          className="brand-logo brand-logo--dark"
          decoding="async"
        />
      ) : null}
    </Link>
  );
}

export default Logo;
