# CargoMax Website Redesign --- Product Requirements Document (PRD)

**Document status:** Working draft\
**Version:** 1.0\
**Last updated:** 26 November 2026\
**Project:** CargoMax corporate website redesign\
**Reference design:** [CargoHype Webflow
template](https://cargohype.webflow.io/)\
**Existing website:** [cargomax.co.in](https://cargomax.co.in/)

> This PRD defines the shared product requirements for the React
> rebuild. CargoHype is a visual/layout reference, not a source for
> CargoMax's business facts or copy. Replace all unverified business
> details with information approved by CargoMax before launch.

------------------------------------------------------------------------

## 1. Product overview

CargoMax needs a modern, responsive website that communicates its
freight-forwarding and logistics services, builds trust, and helps
prospective customers contact the company or request a quotation.

The redesign will use the CargoHype template as a reference for page
composition and visual hierarchy while retaining CargoMax's own
identity: logo, brand colours, company information, service offering,
locations, contact details and approved imagery.

The project is being developed by two contributors: - **Contributor A:**
Homepage / landing page. - **Contributor B:** Contact page. - **Shared
ownership:** Design tokens, navigation, footer, reusable UI components,
routing, responsive behaviour, accessibility and performance standards.

The shared components and rules in this document apply to every page.

## 2. Problem statement

The current website should be improved so that visitors can: 1.
Understand what CargoMax does quickly. 2. Find relevant logistics
services without confusion. 3. Trust the company through accurate
company information and genuine credentials. 4. Contact the team or
submit a useful quotation enquiry. 5. Navigate consistently on desktop,
tablet and mobile.

The redesign must avoid template-demo content, generic claims, invented
customer testimonials, invented tracking results and unsupported service
promises.

## 3. Goals and success measures

### 3.1 Product goals

-   Create a consistent, recognisable CargoMax visual identity across
    all pages.
-   Make the main navigation predictable and reusable.
-   Make the contact and quotation journey easy to complete.
-   Improve mobile usability and accessibility.
-   Keep pages fast by optimising images, fonts, JavaScript and
    below-the-fold content.
-   Establish a maintainable React codebase that two contributors can
    work on safely.

### 3.2 Suggested measurable indicators

Record a baseline after launch, then review monthly: - Contact/quote
form completion rate. - Number of qualified enquiries. - Clicks on
phone, email and WhatsApp links. - Visits to service pages. - Organic
search impressions and clicks. - Mobile Core Web Vitals. - Form
validation and submission error rate.

Do not invent target numbers before analytics and a baseline exist.
Agree on targets with the business owner.

## 4. Target audiences and primary journeys

### Audience A --- Importer / exporter

**Need:** Find a suitable freight solution and request pricing.\
**Journey:** Home → Service detail → Get a Quote / Contact →
Confirmation.

### Audience B --- Existing customer

**Need:** Find contact information or access a real shipment-tracking
service.\
**Journey:** Home / Navigation → Tracking or Contact.

Tracking must only be presented as functional when CargoMax supplies a
real tracking provider, API, portal or operational process. Until then,
link to the approved existing tracking channel or label the feature as
coming soon.

### Audience C --- Business evaluating CargoMax

**Need:** Check company credibility, service coverage and contact
channels.\
**Journey:** Home → About / Credentials / Services → Contact.

## 5. Scope

### 5.1 Initial release --- required

-   Responsive global header and navigation.
-   Homepage (owned by Contributor A).
-   Contact page (owned by Contributor B).
-   Shared footer.
-   Shared design tokens and typography.
-   Contact details and office/location information after verification.
-   Quote/enquiry form with client-side validation.
-   Working email, phone and approved WhatsApp links.
-   Responsive layouts for mobile, tablet and desktop.
-   Accessible navigation, forms, focus states and reduced-motion
    behaviour.
-   Image optimisation, lazy loading and route-level code splitting.
-   SEO metadata, sitemap and robots configuration before launch.
-   Analytics and Search Console setup, subject to business approval and
    privacy requirements.

### 5.2 Later release --- only when requirements/data are available

-   Individual service detail pages.
-   Shipment tracking integration.
-   Backend quote management / CRM integration.
-   Automated quote calculation.
-   Multi-language support.
-   Customer portal.
-   Live route maps or shipment maps.

### 5.3 Out of scope unless separately approved

-   Inventing freight prices or delivery estimates.
-   Simulated live shipment statuses.
-   Copying CargoHype demo company information, office locations,
    testimonials or statistics.
-   Claiming certifications, memberships, geographic coverage or
    services that CargoMax has not confirmed.
-   Replacing the company's operational tracking or quotation systems
    without an agreed integration.

## 6. Information architecture

Proposed routes:

  --------------------------------------------------------------------------------
  Route                            Page                    Release
  -------------------------------- ----------------------- -----------------------
  `/`                              Home                    Initial

  `/about/`                        About                   Later / confirm

  `/services/`                     Services overview       Later / confirm

  `/services/sea-freight/`         Sea freight             Later / confirm

  `/services/air-freight/`         Air freight             Later / confirm

  `/services/customs-brokerage/`   Customs brokerage       Later / confirm

  `/tracking/`                     Tracking                Initial navigation only
                                                           if real destination
                                                           exists

  `/contact/`                      Contact                 Initial

  `/get-a-quote/`                  Quote request           Initial or contact-page
                                                           section; decide before
                                                           implementation
  --------------------------------------------------------------------------------

Avoid creating routes that only contain placeholder content. If a page
is not ready, hide its navigation item or link to an approved existing
destination.

## 7. Shared layout requirements

### 7.1 Header / navigation

-   One shared `Navbar` component used by every route.
-   Use the official CargoMax logo asset; do not recreate the logo with
    styled text.
-   Navigation labels and order must be agreed by both contributors.
-   Include a clear primary CTA such as **Get a Quote**.
-   Show the current route with a visible active state.
-   Desktop navigation must not wrap or overlap.
-   Mobile navigation must open/close by keyboard and touch, close after
    route selection, and expose correct accessible state
    (`aria-expanded`, `aria-controls`).
-   Header height, logo sizing, spacing, CTA treatment and responsive
    breakpoints must come from shared design tokens.
-   Decide whether the header is static or sticky once, then use the
    same behaviour site-wide.
-   Avoid layout shift when fonts or logo assets load.

### 7.2 Footer

-   One shared `Footer` component.
-   Use verified contact details, approved service links and real social
    URLs only.
-   Include a clear contact/quote action.
-   Use consistent spacing and responsive stacking.

### 7.3 Page shell

Every page should use the same global font setup, background, content
width, spacing scale, header and footer. Page-specific sections may
vary, but should not introduce unrelated colours, radii, shadows or
animation styles.

## 8. Contact page requirements

### 8.1 Purpose

Help a prospective or existing customer reach the correct CargoMax team
with minimal friction, or submit a useful freight enquiry.

### 8.2 Recommended section order

1.  Shared navbar.
2.  Contact hero with concise headline and supporting copy.
3.  Contact methods / quick links, where approved.
4.  Quote or enquiry form.
5.  Office/location cards with verified details.
6.  Optional map links or embedded map, only for confirmed addresses.
7.  Final contact CTA, if useful and not repetitive.
8.  Shared footer.

Follow the CargoHype contact page's overall composition as a reference,
but adapt section order if usability testing shows a clearer flow.

### 8.3 Form fields

Required fields should be kept to the minimum needed to respond.
Suggested fields:

  -----------------------------------------------------------------------
  Field                   Control                 Requirement
  ----------------------- ----------------------- -----------------------
  First name              Text                    Required

  Last name               Text                    Optional unless
                                                  business requires it

  Email                   Email                   Required

  Phone                   Tel                     Required if follow-up
                                                  by phone is needed

  Company                 Text                    Optional

  Origin                  Text / location input   Optional for general
                                                  contact; required for
                                                  quote

  Destination             Text / location input   Optional for general
                                                  contact; required for
                                                  quote

  Freight mode            Select                  Optional for general
                                                  contact; required for
                                                  quote

  Ready date              Date                    Optional

  Cargo details / message Textarea                Required for quote;
                                                  optional for general
                                                  contact

  Privacy consent         Checkbox                Include if required by
                                                  the company's privacy
                                                  process
  -----------------------------------------------------------------------

Freight modes must reflect CargoMax's confirmed services. Do not offer
Road Freight or any other mode until the business confirms it.

### 8.4 Form behaviour

-   Validate required fields and email format.
-   Display clear inline error messages and an error summary where
    appropriate.
-   Preserve entered values when validation fails.
-   Disable duplicate submission while a request is processing.
-   Show a clear success state only after the server/email service
    confirms submission.
-   Show a useful failure state and next-step contact option if
    submission fails.
-   Never claim that an enquiry was sent if no backend or email
    integration exists.
-   Protect the endpoint against spam (server-side validation and an
    appropriate anti-spam mechanism).
-   Add privacy notice/consent only as approved by the company.
-   Ensure labels are visible; placeholders are not labels.

### 8.5 Office information

The existing screenshot indicates Chennai, Bangalore, Mumbai and
Tuticorin. Treat these as candidate locations, not complete office
records. Before launch, verify for each: - Whether it is an office,
branch, agent or service location. - Full postal address. - Public phone
number. - Public email, if different. - Opening hours and time zone. -
Map URL / coordinates. - Whether walk-in visits are accepted.

Do not show a map pin for an unverified address.

### 8.6 Contact details

The screenshot shows `+91 96000 12841` and `+91 91761 77653`. Confirm
ownership, purpose and formatting before publication. Confirm the
official contact email and WhatsApp number with the company.

## 9. Homepage requirements

Owned by Contributor A. Must share the global header, footer, typography
and design tokens.

Suggested structure: 1. Hero with clear logistics value proposition and
one primary CTA. 2. Shipment tracking entry only if a real tracking
destination is available. 3. Main services overview using confirmed
service names. 4. Company introduction / differentiators using approved
facts. 5. Credentials and memberships using current proof/approved
logos. 6. How the process works, if operationally accurate. 7. Genuine
testimonials or client logos, only with permission. 8. Quote CTA. 9.
Shared footer.

Hero copy must explain what CargoMax does; avoid unsupported
superlatives such as "No. 1" or "the world's best".

## 10. Content and brand governance

-   CargoMax logo and approved brand assets take priority over template
    assets.
-   Do not use CargoHype's company name, demo addresses, demo phone
    numbers, social accounts, testimonials, statistics or partner logos.
-   All factual statements must be approved by the company.
-   Use consistent spelling: choose either "Tuticorin" or "Thoothukudi"
    based on company preference and use it consistently.
-   Use the same service naming across navigation, homepage, forms and
    service pages.
-   Keep copy concise, specific and customer-focused.
-   Add alt text to meaningful images; decorative images should have
    empty alt text.

## 11. Functional and technical requirements

-   React application built with the agreed project setup (recommended:
    React + Vite).
-   Use one routing solution consistently (e.g. React Router).
-   Use reusable components and shared tokens.
-   Use semantic HTML and accessible form controls.
-   Use real links for navigation and contact actions.
-   Use environment variables for service endpoints and public
    configuration; never commit secrets.
-   Form submissions must be connected to a real approved service before
    being described as operational.
-   Handle loading, empty, success and error states.
-   Provide a custom not-found route.
-   Avoid duplicate page-specific copies of shared components.

## 12. Performance requirements

Targets are goals to validate on production-like builds, not guarantees:

-   Core Web Vitals at the 75th percentile: LCP ≤ 2.5 s, INP ≤ 200 ms,
    CLS ≤ 0.1.
-   Prefer AVIF or WebP for photographic images, with suitable fallback
    where needed.
-   Supply responsive image sizes; do not send desktop hero images to
    small mobile screens unnecessarily.
-   Lazy-load below-the-fold images and non-critical embeds.
-   Do not lazy-load the primary above-the-fold hero image if it is the
    LCP element; preload or prioritise it appropriately.
-   Lazy-load route chunks using dynamic imports.
-   Avoid loading animation libraries or maps on pages that do not need
    them.
-   Reserve image/video dimensions to prevent layout shifts.
-   Subset and limit font weights.
-   Avoid autoplay video backgrounds on mobile; provide a static image
    fallback.
-   Respect `prefers-reduced-motion`.

## 13. SEO and discoverability

-   Unique page title and meta description per route.
-   One clear H1 per page, with logical heading order.
-   Descriptive URLs and internal links.
-   Descriptive image alt text.
-   Open Graph metadata for sharing.
-   Canonical URLs where appropriate.
-   XML sitemap and robots.txt.
-   Structured data only for facts that are accurate and eligible
    (e.g. Organization / LocalBusiness where supported).
-   Do not create fake reviews or rating schema.
-   Add Search Console and analytics only with the company's approval
    and applicable privacy notices.

## 14. Accessibility requirements

Aim for WCAG 2.2 AA: - Keyboard-operable navigation, forms and
interactive controls. - Visible focus indicators. - Sufficient text and
UI contrast. - Labels and instructions for every form field. - Errors
described in text, not colour alone. - Meaningful heading structure and
landmarks. - Touch targets large enough for comfortable mobile use. - No
motion that cannot be reduced. - Avoid hover-only information.

## 15. Collaboration and Git workflow

### Ownership

  Area                           Owner
  ------------------------------ -------------------------------
  Homepage page sections         Contributor A
  Contact page sections          Contributor B
  Navbar / footer / tokens       Shared; assign one maintainer
  Integration and release        Both
  Business facts and approvals   CargoMax representative

### Workflow

1.  Agree on shared tokens and component APIs before page-specific
    styling.
2.  Create a feature branch per task (`feature/homepage`,
    `feature/contact-page`).
3.  Do not edit the same shared component simultaneously without
    coordination.
4.  Open pull requests into `main`.
5.  Review responsive behaviour and accessibility before merging.
6.  Test the integrated site after every merge.
7.  Keep `main` deployable.

## 16. Acceptance criteria

The initial release is acceptable when:

-   [ ] Home and Contact routes load directly and through navigation.
-   [ ] The same Navbar and Footer are used on both pages.
-   [ ] Active navigation state is correct.
-   [ ] Mobile menu works by keyboard and touch.
-   [ ] Layout works at narrow mobile, tablet, laptop and wide desktop
    widths.
-   [ ] No horizontal overflow or overlapping content.
-   [ ] CargoMax logo and approved colours are used consistently.
-   [ ] No CargoHype demo content remains.
-   [ ] All contact details and office records are verified.
-   [ ] Form validation and success/error states work.
-   [ ] Form submission reaches an approved destination.
-   [ ] Images are responsive, correctly sized and lazy-loaded where
    appropriate.
-   [ ] Hero/LCP image is not accidentally lazy-loaded.
-   [ ] Reduced-motion preference is respected.
-   [ ] Page titles, descriptions and headings are present.
-   [ ] No broken links or console errors.
-   [ ] Performance and accessibility checks have been run.

## 17. Open questions / decisions log

Resolve these with the company before launch:

1.  What is the official high-resolution logo (SVG preferred)?
2.  What are the exact brand colour values from the logo/brand guide?
3.  Which freight modes and services are currently offered?
4.  What are the correct office/branch addresses and public contact
    details?
5.  What is the official email and WhatsApp number?
6.  What are the correct opening hours?
7.  Where should quote form submissions go (email, CRM, backend)?
8.  Is there a real tracking portal/API, and what is its approved URL?
9.  Which certifications, memberships and partner logos may be
    displayed?
10. Are there approved customer testimonials, client logos and company
    photographs?
11. Which hosting/domain deployment process will be used?
12. Which analytics and privacy requirements apply?

------------------------------------------------------------------------

**Decision rule:** If a design choice conflicts with accurate business
information, accessibility, usability or performance, prioritise
accurate information and user experience over visual imitation of the
template.
