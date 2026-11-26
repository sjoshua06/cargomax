/**
 * Content and media config for the Home landing page.
 */

export const heroContent = {
  title: "Freight that moves on your schedule.",
  summary:
    "End-to-end freight solutions that scale with your ambitions. Air, ocean, and road — we move cargo across 50+ countries with precision and speed.",
  cta: {
    label: "Book Shipment",
    to: "/contact",
  },
  videoSrc: "/images/landing/landing.mp4",
  scrollLabel: "Scroll to stay on route",
};

export const trustedCompanies = {
  badge: "Trusted by leading companies",
  logos: [
    {
      name: "JCtrans",
      src: "/images/companies/jctrans.png",
      width: 140,
      height: 38,
    },
    {
      name: "MSME — Micro, Small & Medium Enterprises",
      src: "/images/companies/msme.png",
      width: 112,
      height: 44,
    },
    {
      name: "MTO — Multimodal Transport Operator",
      src: "/images/companies/mto.jpg",
      width: 72,
      height: 48,
      trimBorder: true,
    },
    {
      name: "Neptune Consol",
      src: "/images/companies/neptune.png",
      width: 156,
      height: 36,
    },
  ],
};

export const globalNetworkContent = {
  badge: "SEC / 02 Global network",
  summary:
    "Guaranteed space on the Chennai—Europe corridor, extended worldwide through vetted partner lanes — monitored and rerouted in real time from our network desk.",
  cta: {
    label: "Book Shipment",
    to: "/contact",
  },
  inlineImages: {
    corridor: {
      src: "/images/services/ocean-freight-shipping.png",
      alt: "Container vessel at sea",
    },
    lane: {
      src: "/images/services/warehouse.jpg",
      alt: "CargoMax warehousing operations",
    },
  },
  mapImage: {
    src: "/images/globe/gloabe.png",
    alt: "Dotted globe map showing CargoMax trade lanes from Chennai to Colombo, Singapore, Dubai and Europe",
    width: 2760,
    height: 1536,
  },
  // Exact percentage coordinates matching the orange hub markers on gloabe.png
  hubs: [
    {
      id: "europe",
      code: "EUR",
      city: "Europe",
      role: "Destination",
      detail: "Direct corridor · Weekly sailings",
      x: 11.3,
      y: 18.3,
      placement: "below-right",
    },
    {
      id: "dubai",
      code: "DXB",
      city: "Dubai",
      role: "Destination",
      detail: "Middle East transshipment hub",
      x: 32.5,
      y: 44.3,
      placement: "above",
    },
    {
      id: "chennai",
      code: "MAA",
      city: "Chennai",
      role: "Origin Hub",
      detail: "Primary gateway · 24/7 desk",
      x: 56.3,
      y: 58.3,
      placement: "above",
      isOrigin: true,
    },
    {
      id: "colombo",
      code: "CMB",
      city: "Colombo",
      role: "Destination",
      detail: "South Asia feeder hub",
      x: 57.5,
      y: 71.7,
      placement: "below",
    },
    {
      id: "singapore",
      code: "SIN",
      city: "Singapore",
      role: "Destination",
      detail: "ASEAN consolidation gateway",
      x: 77.4,
      y: 80.6,
      placement: "above",
    },
  ],
  stats: [
    "05 regional hubs",
    "40+ weekly sailings",
    "128 partner lanes",
    "Network desk — 24/7 UTC",
  ],
};

export const servicesPreviewContent = {
  badge: "SEC / 03 Services",
  title: "Every mode, one manifest. Your cargo, handled end to end.",
  summary:
    "Guaranteed space on the Europe-USA corridor, extended worldwide through vetted partner lanes — monitored and rerouted in real time from our network desk.",
  items: [
    {
      number: "01",
      title: "Ocean Freight",
      description:
        "FCL and LCL ocean consolidation with contracted carrier space and reliable port-to-port schedules.",
      image: "/images/services/ocean-freight-shipping.png",
      alt: "Container ship transporting ocean freight across open water",
      to: "/services#sea-freight",
    },
    {
      number: "02",
      title: "Air Freight",
      description:
        "Priority air uplift on scheduled and charter capacity for time-critical shipments worldwide.",
      image: "/images/services/air.jpg",
      alt: "Cargo aircraft flying over stacked shipping containers",
      to: "/services#air-freight",
    },
    {
      number: "03",
      title: "Warehousing",
      description:
        "Secure storage, palletization, inventory control, and distribution aligned with your dispatch schedule.",
      image: "/images/services/warehouse.jpg",
      alt: "Logistics specialist moving palletized cargo inside a warehouse",
      to: "/services#warehousing",
    },
    {
      number: "04",
      title: "Customs Brokerage",
      description:
        "End-to-end import and export documentation, tariff classification, and compliant port clearance.",
      image: "/images/services/customs.jpg",
      alt: "Customs officer inspecting cargo manifest at a container terminal",
      to: "/services#customs",
    },
  ],
};
