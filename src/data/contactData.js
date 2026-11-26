/**
 * Contact page data — offices, freight modes, quick-contact methods.
 *
 * Verified details provided by CargoMax:
 * - Office & Customer Care phone numbers
 * - Chennai, Tuticorin, Bangalore, Mumbai addresses & GST numbers
 */

import { companyInfo } from "./navigation";

/* ------------------------------------------------------------------ */
/*  Freight modes — only confirmed CargoMax services.                 */
/* ------------------------------------------------------------------ */
export const freightModes = [
  { value: "sea-freight", label: "Sea Freight" },
  { value: "air-freight", label: "Air Freight" },
  { value: "customs-brokerage", label: "Customs Brokerage" },
  { value: "warehousing", label: "Warehousing" },
];

/* ------------------------------------------------------------------ */
/*  Quick-contact cards                                               */
/* ------------------------------------------------------------------ */
export const contactMethods = [
  {
    icon: "phone",
    label: "Office",
    value: "+91 96000 12841",
    href: "tel:+919600012841",
    description: "General enquiries & bookings",
  },
  {
    icon: "phone",
    label: "Customer Care",
    value: "+91 91761 77653",
    href: "tel:+919176177653",
    description: "Shipment support & assistance",
  },
  {
    icon: "mail",
    label: "Email Us",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
    description: "We respond within one business day",
  },
];

/* ------------------------------------------------------------------ */
/*  Verified office locations                                         */
/* ------------------------------------------------------------------ */
export const officeLocations = [
  {
    id: "chennai",
    name: "Chennai",
    type: "Head Office",
    address: "No: 6/1, KB Tower, GST Road, Alandur, Guindy, Chennai – 600016",
    gstNo: "TN GST NO: 33AAJCC6463B1ZX",
    phone: { display: "+91 96000 12841", href: "tel:+919600012841" },
    email: companyInfo.email,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=6%2F1+KB+Tower+GST+Road+Alandur+Guindy+Chennai+600016",
  },
  {
    id: "tuticorin",
    name: "Tuticorin",
    type: "Branch Office",
    address: "No: 36/1, Briyant Nagar, 4th Street West, Tuticorin – 628008",
    gstNo: "TN GST NO: 33AAJCC6463B1ZX",
    phone: { display: "+91 91761 77653", href: "tel:+919176177653" },
    email: companyInfo.email,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=36%2F1+Briyant+Nagar+4th+Street+West+Tuticorin+628008",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    type: "Branch Office",
    address:
      "35, Flat No. B-1, Second Floor, Katha No. 468/3, 2nd C Main, B. Channasandra Village, Kasturinagar, Bangalore – 560043",
    gstNo: null,
    phone: null,
    email: companyInfo.email,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=35+2nd+C+Main+B+Channasandra+Kasturinagar+Bangalore+560043",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    type: "Branch Office",
    address:
      "Plot No. 66, Shop No. 127, First Floor, Sector - 11, Hilton Center, CBD Belapur, Navi Mumbai – 400614",
    gstNo: "MH GST NO: 27AAJCC6463B1ZQ",
    phone: null,
    email: companyInfo.email,
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Plot+66+Sector+11+Hilton+Center+CBD+Belapur+Navi+Mumbai+400614",
  },
];
