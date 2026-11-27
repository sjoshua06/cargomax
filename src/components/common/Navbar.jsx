import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Ship, Warehouse, Globe } from "lucide-react";

import Logo from "./Logo";
import Button from "./Button";
import { mainNavLinks, quoteCta, utilityItems } from "../../data/navigation";
import "../../styles/navbar.css";

// Routes whose top section is a full-bleed dark hero (video / image).
// On these routes the navbar starts transparent and turns white on scroll.
const HERO_ROUTES = new Set(["/", "/contact", "/tracking"]);

const SCROLL_THRESHOLD = 24;

const UTILITY_ICONS = { ship: Ship, warehouse: Warehouse, globe: Globe };

// Static markup hoisted out of the component — never re-created on render.
const utilityBar = (
  <div className="utility-bar" role="note">
    {utilityItems.map(({ icon, text }, i) => {
      const Icon = UTILITY_ICONS[icon];
      return (
        <div key={text} className={`utility-item ${i > 0 ? "hide-mobile" : ""}`}>
          {i > 0 ? <span className="utility-divider" aria-hidden="true" /> : null}
          <Icon size={16} strokeWidth={1.75} className="utility-icon" aria-hidden="true" />
          <span>{text}</span>
        </div>
      );
    })}
  </div>
);

const navLinkClass = ({ isActive }) => `nav-link${isActive ? " is-active" : ""}`;

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const overHero = HERO_ROUTES.has(pathname);
  const closeMenu = () => setMenuOpen(false);

  // Track only the derived boolean — React skips re-render when it doesn't change.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // While the mobile menu is open: lock body scroll, close on Escape / desktop resize.
  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 901px)");
    const onResize = (e) => {
      if (e.matches) setMenuOpen(false);
    };

    document.body.classList.add("menu-open");
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);

    return () => {
      document.body.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    overHero && !scrolled ? "is-transparent" : "",
    menuOpen ? "is-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      {utilityBar}

      <div className="navbar">
        <div className="container nav-inner">
          <Logo plate onClick={closeMenu} />

          <nav className="nav-menu" aria-label="Main">
            {mainNavLinks.map(({ label, to }) => (
              <NavLink key={to} to={to} end={to === "/"} className={navLinkClass}>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <Button to={quoteCta.to} className="nav-cta">
              {quoteCta.label}
            </Button>

            <button
              type="button"
              className="menu-toggle"
              onClick={() => setMenuOpen((open) => !open)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div id="mobile-menu" className="mobile-nav" inert={!menuOpen}>
        <nav className="container mobile-nav__inner" aria-label="Mobile">
          {mainNavLinks.map(({ label, to }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) => `mobile-link${isActive ? " is-active" : ""}`}
              style={{ "--i": i }}
              onClick={closeMenu}
            >
              <span className="mobile-link__index">0{i + 1}</span>
              {label}
            </NavLink>
          ))}

          <Button to={quoteCta.to} className="mobile-cta" onClick={closeMenu}>
            {quoteCta.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
