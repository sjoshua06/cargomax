/**
 * Temporary page shell. Pages without a dark full-bleed hero must keep
 * `page-offset` on <main> so content isn't hidden under the fixed header.
 */
function PagePlaceholder({ title, text }) {
  return (
    <main className="page-offset" style={{ background: "var(--color-background)" }}>
      <section className="container" style={{ minHeight: "60vh", padding: "80px 0" }}>
        <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)" }}>{title}</h1>
        {text ? <p style={{ color: "var(--color-muted)", marginTop: 12 }}>{text}</p> : null}
      </section>
    </main>
  );
}

export default PagePlaceholder;
