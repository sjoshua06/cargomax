/**
 * Home page.
 * The hero below is a temporary navy placeholder that sits UNDER the
 * transparent navbar — the video hero will replace it next.
 */
function Home() {
  return (
    <main>
      <section
        id="home-hero"
        style={{
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
          padding: "var(--header-total-height) var(--page-gutter) 64px",
          background:
            "radial-gradient(120% 80% at 50% 0%, #1b305a 0%, var(--color-primary) 55%, var(--color-primary-dark) 100%)",
          color: "var(--color-white)",
          textAlign: "center",
        }}
      >
        <div>
          <h1 style={{ color: "inherit", fontSize: "clamp(2.25rem, 5vw, 4.5rem)" }}>
            Welcome to CargoMax
          </h1>
          <p style={{ color: "var(--color-white-80)", marginTop: 16 }}>
            Video hero section coming next.
          </p>
        </div>
      </section>

      {/* Tall spacer so the scroll state of the navbar can be previewed */}
      <section style={{ minHeight: "80vh", background: "var(--color-background)" }} />
    </main>
  );
}

export default Home;
