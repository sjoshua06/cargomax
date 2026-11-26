# CargoMax Website --- Design System & Frontend Implementation Guide

**Document status:** Working draft\
**Version:** 1.0\
**Last updated:** 26 November 2026\
**Visual reference:** [CargoHype
template](https://cargohype.webflow.io/)\
**Brand reference:** CargoMax logo and existing website

> This document is the shared source of truth for visual consistency,
> responsive behaviour, transitions, image loading and frontend
> implementation. The exact colour values, font family and spacing
> should be finalised after the official logo and the selected CargoHype
> reference screens are reviewed together.

------------------------------------------------------------------------

## 1. Design principles

1.  **Brand first:** CargoMax's logo, identity and approved content
    replace all template branding.
2.  **One system:** Shared components and tokens are used across every
    route.
3.  **Clear hierarchy:** Visitors should understand the page purpose and
    next action quickly.
4.  **Trust over decoration:** Use genuine company information, real
    imagery and restrained motion.
5.  **Mobile-first:** Layouts must work on small screens before desktop
    refinements.
6.  **Performance is design:** Image dimensions, font loading and
    animation choices are part of the design system.
7.  **Accessible by default:** Keyboard support, contrast, focus and
    reduced motion are not optional.

## 2. Brand direction

### 2.1 Colour palette

The visible CargoMax identity uses a dark navy/blue, red and white. The
following values are **provisional working tokens**, sampled as a design
direction from the supplied screenshots, not official brand
specifications. Replace them with exact values from the approved logo or
brand guide.

  -----------------------------------------------------------------------
  Token                   Provisional value       Usage
  ----------------------- ----------------------- -----------------------
  `--color-brand-navy`    `#10183F`               Header, dark sections,
                                                  primary text on light
                                                  backgrounds

  `--color-brand-blue`    `#244A91`               Logo-related accents,
                                                  links and secondary
                                                  emphasis

  `--color-brand-red`     `#F20D20`               Primary CTA, active
                                                  nav, small highlights

  `--color-white`         `#FFFFFF`               Main surfaces and text
                                                  on dark surfaces

  `--color-bg`            `#F6F7FA`               Page background /
                                                  subtle sections

  `--color-surface`       `#FFFFFF`               Cards and forms

  `--color-text`          `#172033`               Main body text

  `--color-muted`         `#687386`               Secondary text

  `--color-border`        `#E2E6ED`               Dividers, input borders

  `--color-success`       `#16794A`               Success states

  `--color-error`         `#C62828`               Error states
  -----------------------------------------------------------------------

Do not use red for long paragraphs or large background areas by default.
Reserve it for important actions and small brand accents. Check all
foreground/background combinations for WCAG AA contrast.

### 2.2 CSS token starter

``` css
:root {
  /* Brand — confirm against official logo */
  --color-brand-navy: #10183f;
  --color-brand-blue: #244a91;
  --color-brand-red: #f20d20;

  /* Surfaces and text */
  --color-bg: #f6f7fa;
  --color-surface: #ffffff;
  --color-text: #172033;
  --color-muted: #687386;
  --color-border: #e2e6ed;
  --color-white: #ffffff;

  /* Feedback */
  --color-success: #16794a;
  --color-error: #c62828;

  /* Typography */
  --font-body: "Inter", Arial, sans-serif;
  --font-heading: "Inter", Arial, sans-serif;

  /* Layout */
  --container-max: 1200px;
  --page-gutter: clamp(1rem, 4vw, 2.5rem);
  --header-height: 80px;

  /* Spacing scale (4px base) */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;

  /* Shape and elevation */
  --radius-sm: 0.375rem;
  --radius-md: 0.75rem;
  --radius-lg: 1rem;
  --radius-pill: 999px;
  --shadow-card: 0 12px 32px rgb(16 24 63 / 8%);

  /* Motion */
  --duration-fast: 160ms;
  --duration-normal: 240ms;
  --duration-slow: 360ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

Do not define new one-off brand colours inside page styles. If a new
colour is genuinely required, add a named token here and tell both
contributors.

## 3. Typography

-   Use one readable sans-serif family throughout unless the official
    brand guide specifies otherwise.
-   Recommended starting family: Inter or a similarly legible web font.
-   Use a limited set of weights: 400 body, 500/600 labels and
    navigation, 600/700 headings.
-   Use `clamp()` for responsive headings rather than separate arbitrary
    font sizes at every breakpoint.
-   Body line-height: approximately 1.5--1.7.
-   Heading line-height: approximately 1.1--1.25.
-   Avoid long all-caps paragraphs. All-caps may be used sparingly for
    small eyebrow labels.

Example:

``` css
body {
  font-family: var(--font-body);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.6;
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-brand-navy);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.page-title {
  font-size: clamp(2.25rem, 5vw, 4.5rem);
}

.section-title {
  font-size: clamp(1.75rem, 3vw, 2.75rem);
}
```

## 4. Layout and responsive rules

### 4.1 Container

Use a consistent centred container on all pages:

``` css
.container {
  width: min(100% - 2 * var(--page-gutter), var(--container-max));
  margin-inline: auto;
}
```

### 4.2 Breakpoints

Use a small shared breakpoint set. These are starting points; adjust
based on content rather than device names.

  Name               Width Behaviour
  --------- -------------- ------------------------------------------
  Mobile         `< 640px` Single-column layouts, mobile nav
  Tablet       `640–899px` Compact grids, potentially collapsed nav
  Desktop     `900–1199px` Full nav, two/three-column sections
  Wide          `≥ 1200px` Max-width container, more breathing room

### 4.3 Responsive requirements

-   No horizontal page scrolling.
-   Cards stack vertically on mobile.
-   Forms use one column on mobile and two columns only where fields
    logically pair.
-   Buttons are comfortably tappable; aim for at least 44×44 CSS pixels.
-   Mobile menu must not cover content without a clear close action.
-   Avoid fixed heights for text sections.
-   Hero images should use intentional `object-fit` and
    `object-position` per breakpoint.
-   Keep the main CTA visible without forcing users to scroll through
    oversized decoration.

## 5. Shared components and ownership

Build shared components once and import them on every route.

  -----------------------------------------------------------------------
  Component               Responsibility          Suggested owner
  ----------------------- ----------------------- -----------------------
  `Navbar`                Logo, nav links, mobile Shared / one maintainer
                          menu, quote CTA         

  `Footer`                Company links, contact, Shared / one maintainer
                          social links            

  `Button`                Primary, secondary,     Shared
                          text button variants    

  `Container`             Consistent max width    Shared
                          and gutters             

  `SectionHeading`        Eyebrow, title,         Shared
                          supporting text         

  `FormField`             Label, input, hint,     Contact owner / shared
                          error                   

  `LocationCard`          Office/location details Contact owner

  `ServiceCard`           Service summary and     Homepage owner / shared
                          link                    
  -----------------------------------------------------------------------

Suggested APIs:

``` jsx
<Navbar
  links={navigationLinks}
  cta={{ label: "Get a Quote", href: "/contact/" }}
/>

<Button variant="primary" href="/contact/">
  Get a Quote
</Button>
```

Keep content/data separate from layout where practical. Do not create
`NavbarHome` and `NavbarContact` variants unless there is a documented
product reason.

## 6. Navigation behaviour

### Desktop

-   Logo aligned left.
-   Navigation grouped consistently.
-   Primary quote CTA aligned right.
-   Active route has a visible indicator.
-   Hover/focus states use the same accent and timing on every page.

### Mobile

-   Logo and menu trigger remain visible.
-   Menu opens with a clear state and accessible name.
-   Escape closes the menu.
-   Selecting a route closes the menu.
-   Focus is managed sensibly when opening/closing.
-   Body scrolling should not be trapped unless the menu is a
    full-screen modal overlay.

### Sticky header decision

Choose one site-wide behaviour. If sticky: - Use a stable header
height. - Add a subtle shadow/border only after scrolling if implemented
accessibly. - Do not cause content jump when the sticky state changes. -
Confirm anchor links are not hidden under the header
(`scroll-margin-top`).

## 7. Page transition and motion system

Motion should make state changes understandable, not delay access to
content.

### 7.1 Motion rules

-   Use short transitions for buttons, links, cards and menu states.
-   Prefer opacity and transform over animating layout properties such
    as height, width, margin or top.
-   Avoid large parallax effects, excessive scroll-jacking and long
    entrance animations.
-   Do not hide essential content until an animation library has loaded.
-   Avoid animating every element in a long page.
-   Use the same easing and duration tokens across routes.

Recommended defaults: - Hover/focus: 160ms. - Small state change:
160--240ms. - Section reveal: 240--360ms. - Avoid page transition delays
that make navigation feel slower.

### 7.2 CSS examples

``` css
.button,
.nav-link,
.service-card {
  transition:
    color var(--duration-fast) var(--ease-standard),
    background-color var(--duration-fast) var(--ease-standard),
    border-color var(--duration-fast) var(--ease-standard),
    box-shadow var(--duration-fast) var(--ease-standard),
    transform var(--duration-fast) var(--ease-standard);
}

.service-card:hover {
  transform: translateY(-3px);
}

:focus-visible {
  outline: 3px solid var(--color-brand-red);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Do not apply the hover lift to touch-only devices if it causes sticky
hover behaviour.

### 7.3 Route transitions

For the initial release, prefer normal, fast route navigation with no
elaborate full-screen transition. If a route transition is added: - It
must not block interaction for a noticeable period. - It must respect
reduced-motion preferences. - It must not interfere with browser
back/forward navigation. - It must preserve scroll restoration
expectations. - It must not create duplicate focus or screen-reader
announcements.

## 8. Image and media performance

### 8.1 Image rules

-   Use CargoMax-approved photos wherever possible.
-   Prefer AVIF or WebP for photographic assets; keep a suitable
    fallback if needed.
-   Export images close to the largest rendered size; do not use huge
    originals for small cards.
-   Use responsive `srcset`/`sizes` or the framework/browser equivalent.
-   Always set intrinsic `width` and `height`, or a stable
    `aspect-ratio`, to prevent layout shift.
-   Use `object-fit: cover` for card/hero crops and `contain` for logos.
-   Add meaningful alt text to informative images.
-   Use `alt=""` for purely decorative imagery.
-   Compress images before committing them.

### 8.2 Lazy-loading policy

**Lazy-load:** - Images below the initial viewport. - Lower-page office
or service card images. - Non-critical embedded maps. - Heavy
third-party widgets, loaded only when needed.

**Do not lazy-load by default:** - The main hero/LCP image when it is
visible on initial load. - The logo if it is part of the initial
header. - Any image required immediately to understand the page.

For an above-the-fold hero image, use high fetch priority where
appropriate and ensure the mobile source is not unnecessarily large.

Example:

``` jsx
// Main hero / likely LCP image
<img
  src="/images/cargomax-hero.webp"
  alt="Cargo containers being handled at a shipping port"
  width="1600"
  height="900"
  fetchPriority="high"
  decoding="async"
/>

// Below-the-fold image
<img
  src="/images/air-freight.webp"
  alt="Cargo aircraft at an airport"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

Use `loading="lazy"` only for offscreen images. Do not add it to every
image indiscriminately.

### 8.3 Background images

CSS background images do not provide the same native lazy-loading
behaviour as `<img>`. For important content, prefer an `<img>` or
`<picture>` element. If a decorative background is used: - Keep a
background colour fallback. - Avoid making essential information part of
the image. - Consider loading it only when the section approaches the
viewport if it is large and non-critical.

### 8.4 Maps and embeds

-   Prefer a simple "Open in Maps" link over an always-loaded
    interactive map.
-   If an embedded map is needed, lazy-load it and reserve its
    dimensions.
-   Only map verified office addresses.
-   Do not send personal visitor location data to third parties without
    an approved privacy basis.

## 9. Code splitting and loading states

### 9.1 Route-level lazy loading

Use dynamic imports for page components so each route can load its own
JavaScript chunk.

``` jsx
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));

function AppRoutes() {
  return (
    <Suspense fallback={<main className="page-loading" aria-live="polite">
      Loading page…
    </main>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact/" element={<Contact />} />
      </Routes>
    </Suspense>
  );
}
```

Keep the shared shell/header available where possible; avoid a full
blank screen while a route chunk loads. Use a lightweight fallback that
matches the page background and does not jump in height.

### 9.2 Component-level lazy loading

Use component-level dynamic imports only for genuinely heavy,
non-critical features (for example, a map or a rich interactive widget).
Do not lazy-load every small card or text component; excessive splitting
can create more network requests and complexity than it saves.

### 9.3 Loading, empty, success and error states

Every asynchronous interaction must define: - Loading: clear indication
that work is in progress. - Success: confirmation only after success is
confirmed by the service. - Empty: what the user sees when there is no
data. - Error: useful message and recovery path.

For the quote form, do not clear form values on a failed request.

## 10. Contact page design guidance

Suggested page composition:

1.  Shared navbar.
2.  Hero: concise contact headline, supporting text and optional brand
    image.
3.  Contact methods: verified phone/email/WhatsApp.
4.  Quote/enquiry form.
5.  Office/location cards.
6.  Optional map links.
7.  Final CTA only if it adds a useful action.
8.  Shared footer.

### Hero direction

Possible working copy (subject to approval):

**Headline:** "Let's Move Your Cargo Forward."\
**Supporting text:** "Tell us what you need to ship. Our team will help
you explore the right logistics solution."

Use a clear CTA that scrolls to the form or links to the quote route.
Avoid multiple competing primary CTAs.

### Form visual rules

-   Use visible labels above inputs.
-   Use consistent input height, radius, border and spacing.
-   Group related fields logically.
-   Use two columns on wide screens only where it improves scanning.
-   On mobile, stack fields in a single column.
-   Make required fields explicit.
-   Keep error messages close to their fields.
-   Provide clear submit/loading/success/error states.
-   Do not use placeholder text as the only label.

### Location cards

Each card should use the same information order: 1. Location name. 2.
Location type (office / branch / agent / service area), if verified. 3.
Full address. 4. Phone/email, if approved. 5. Map link.

Do not invent addresses or imply a staffed office if the location is
only a service area.

## 11. Homepage consistency guidance

The homepage is built by the other contributor, but it must use the same
tokens and shared components.

-   Hero uses the same heading scale and CTA variants.
-   Service cards use shared radius, border, image ratios and hover
    behaviour.
-   Credentials use only approved logos and claims.
-   CTA sections use the same button and typography system.
-   Footer and navigation are imported, not recreated.
-   Do not introduce a second visual theme on the homepage.

## 12. Accessibility checklist

-   [ ] Semantic `header`, `nav`, `main`, `section` and `footer`
    landmarks.
-   [ ] One clear H1 per page.
-   [ ] Keyboard-accessible menu and form.
-   [ ] Visible `:focus-visible` styling.
-   [ ] Labels associated with inputs.
-   [ ] Error text announced appropriately (e.g. `aria-describedby`,
    `aria-live` where needed).
-   [ ] Sufficient colour contrast.
-   [ ] Descriptive link text.
-   [ ] Informative images have useful alt text.
-   [ ] Decorative images have empty alt text.
-   [ ] Reduced-motion preference respected.
-   [ ] No interaction available only on hover.
-   [ ] No unexpected focus loss after navigation or form submission.

## 13. SEO and metadata design

Each route should provide: - Unique `<title>`. - Unique meta
description. - Canonical URL where appropriate. - Open Graph title,
description and image. - Logical H1/H2 hierarchy. - Descriptive image
filenames and alt text. - Internal links to relevant services and
contact actions.

Do not add structured data for unverified business addresses, ratings,
reviews or services.

## 14. Suggested asset naming and organisation

``` text
public/
  images/
    hero/
      cargomax-home-hero.webp
      cargomax-contact-hero.webp
    services/
      sea-freight.webp
      air-freight.webp
      customs-brokerage.webp
      warehousing.webp
    locations/
      chennai-office.webp
  logo/
    cargomax-logo.svg
```

Use descriptive, lowercase, hyphen-separated filenames. Do not commit
template demo assets unless they are licensed for the project and
appropriate for CargoMax.

## 15. Pull request design checklist

Before merging a page or component, check:

### Consistency

-   [ ] Uses shared colour, typography, spacing and radius tokens.
-   [ ] Uses shared Navbar and Footer.
-   [ ] Uses approved logo and content.
-   [ ] Buttons, links and cards match shared variants.
-   [ ] No page-specific duplicate global styles.

### Responsive behaviour

-   [ ] Tested at 360px, 768px, 1024px and 1440px widths.
-   [ ] No overflow, clipped text or overlapping elements.
-   [ ] Navigation works at all breakpoints.
-   [ ] Form is usable on mobile.

### Motion and loading

-   [ ] Transitions use shared duration/easing.
-   [ ] Reduced-motion preference works.
-   [ ] Below-the-fold images are lazy-loaded.
-   [ ] Hero/LCP image is prioritised, not lazy-loaded by accident.
-   [ ] Images reserve dimensions.
-   [ ] Heavy routes/features are split only where useful.
-   [ ] Loading and error states are defined.

### Quality

-   [ ] Keyboard tested.
-   [ ] Links and form actions tested.
-   [ ] No console errors.
-   [ ] No placeholder/demo company information.
-   [ ] Page title and meta description added.

## 16. Design decisions log

Record decisions here so both contributors can follow them.

  -----------------------------------------------------------------------
  Decision                Current status          Owner / next action
  ----------------------- ----------------------- -----------------------
  CargoMax logo asset     Awaiting approved       Company / both
                          SVG/PNG                 

  Exact brand hex values  Provisional tokens only Confirm from brand
                                                  asset

  Font family             Inter proposed          Agree together

  Header height and       To confirm against      Both
  sticky behaviour        template                

  CTA label               "Get a Quote" proposed  Company approval

  Breakpoints             640 / 900 / 1200px      Validate in browser
                          starting points         

  Motion library          CSS first; library only Both
                          if needed               

  Quote form destination  Not confirmed           Company

  Tracking integration    Not confirmed           Company

  Office addresses        Need verification       Company
  -----------------------------------------------------------------------

------------------------------------------------------------------------

**Golden rule:** If a component, colour, animation, spacing value or
interaction is shared across pages, define it here or in a shared
component---not as a one-off implementation inside an individual page.
