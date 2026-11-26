import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

import "../../styles/button.css";

/**
 * CargoHype-style split button: a text block + a separate arrow tile.
 * On hover the label rolls up and the arrow slides out / back in.
 *
 * Usage:
 *   <Button to="/contact">Get a Quote</Button>              // internal route
 *   <Button href="mailto:x@y.com" variant="light">Email</Button>
 *
 * variant: "primary" (red) | "navy" | "light" (white)
 */
function Button({ to, href, variant = "primary", className = "", children, ...rest }) {
  const classes = `btn btn--${variant} ${className}`.trim();

  const content = (
    <>
      <span className="btn__label">
        <span className="btn__roll">
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </span>
      </span>
      <span className="btn__icon" aria-hidden="true">
        <span className="btn__arrows">
          <ArrowUpRight size={18} strokeWidth={2} />
          <ArrowUpRight size={18} strokeWidth={2} />
        </span>
      </span>
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...rest}>
      {content}
    </a>
  );
}

export default Button;
