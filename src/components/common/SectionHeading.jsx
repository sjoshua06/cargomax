import "../../styles/section-heading.css";

/**
 * Reusable section heading used across all pages.
 *
 *   <SectionHeading
 *     eyebrow="OUR SERVICES"
 *     title="What We Offer"
 *     description="Comprehensive freight solutions."
 *     align="center"
 *     light
 *   />
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const classes = [
    "section-heading",
    `section-heading--${align}`,
    light ? "section-heading--light" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {description && (
        <p className="section-heading__description">{description}</p>
      )}
    </div>
  );
}

export default SectionHeading;
