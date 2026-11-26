/**
 * Shared site content for the Navbar and Footer.
 * Edit text / links here — the components only handle layout.
 *
 * ⚠️ Items marked TODO must be confirmed by CargoMax before launch (see PRD §8.6, §10).
 */

export const mainNavLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Tracking", to: "/tracking" },
  { label: "Contact Us", to: "/contact" },
];

export const quoteCta = { label: "Get a Quote", to: "/contact" };

// Top utility bar (dark strip above the navbar)
export const utilityItems = [
  { icon: "ship", text: "Sea & air freight forwarding" },
  { icon: "warehouse", text: "Warehousing & customs brokerage" },
  { icon: "globe", text: "Chennai · Bangalore · Mumbai · Tuticorin" },
];

export const companyInfo = {
  blurb:
    "Reliable freight forwarding with one point of contact and full visibility — from Chennai to the world.",
  email: "info@cargomax.co.in", // TODO: confirm official email
  phones: [
    { display: "+91 96000 12841", href: "tel:+919600012841" },
    { display: "+91 91761 77653", href: "tel:+919176177653" },
  ],
  legalName: "CargoMax",
};

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" }, // TODO: real profile URL
  { label: "Instagram", href: "https://www.instagram.com/" }, // TODO
  { label: "Facebook", href: "https://www.facebook.com/" }, // TODO
];

export const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "Home", to: "/" },
      { label: "Services", to: "/services" },
      { label: "Tracking", to: "/tracking" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Sea Freight", to: "/services#sea-freight" },
      { label: "Air Freight", to: "/services#air-freight" },
      { label: "Warehousing", to: "/services#warehousing" },
      { label: "Customs Brokerage", to: "/services#customs" },
    ],
  },
  {
    title: "Offices", // TODO: verify locations (PRD §8.5)
    links: [
      { label: "Chennai", to: "/contact#chennai" },
      { label: "Bangalore", to: "/contact#bangalore" },
      { label: "Mumbai", to: "/contact#mumbai" },
      { label: "Tuticorin", to: "/contact#tuticorin" },
    ],
  },
];
