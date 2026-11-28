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

// Edit each card's `title` and `description` below to update the text on the page.
export const trustedCompanies = {
  badge: "Trusted by leading companies",
  logos: [
    {
      number: "01",
      title: "JCTRANS",
      description: "We’re a trusted logistics provider with a global reach, proudly registered on JC Trans. Connect with us for reliable and efficient freight forwarding solutions..",
      src: "/images/companies/jctrans.png",
      width: 444,
      height: 250,
    },
    {
      number: "02",
      title: "WCAworld",
      description: "WCAworld is the world’s largest and most powerful network of independent freight forwarders, with over 13,356 member offices in 197 countries worldwide.",
      src: "/images/companies/logo_wcaworld.png",
      width: 350,
      height: 130,
    },
    {
      number: "03",
      title: "MSME",
      description: "We’re proud to be an MSME-certified enterprise, dedicated to innovation and growth. Partner with us to experience the dynamism of Indian micro, small, and medium businesses.",
      src: "/images/companies/msme.png",
      width: 1280,
      height: 540,
    },
    {
      number: "04",
      title: "MTO",
      description: "We’re a licensed and MTO-registered transportation company, committed to safe and compliant operations. Count on us for your cargo needs.",
      src: "/images/companies/mto.jpg",
      width: 300,
      height: 300,
      trimBorder: true,
    },
    {
      number: "05",
      title: "Neptune Consol",
      description: "Proudly a registered member of the NEPTUNE Network – Connecting globally for seamless NVOCC & LCL cargo solutions.",
      src: "/images/companies/neptune.png",
      width: 531,
      height: 116,
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

export const howWeWorkContent = {
  badge: "SEC / 04 How we work",
  title: "From quote to delivery in three moves.",
  summary:
    "A fixed sequence with no surprises — you'll know the status, the cost, and the ETA at every stage.",
  cta: {
    label: "Get a Quote",
    to: "/contact",
  },
  steps: [
    {
      step: "Step 01",
      title: "Plan",
      description:
        "Send us your shipment specs, and we’ll deliver a complete routing plan—covering transport mode, transit window, and total landed cost—within 24 business hours.",
      image: "/images/working/plan.png",
      alt: "CargoMax specialists planning a shipment route and landed cost quote",
    },
    {
      step: "Step 02",
      title: "Move",
      description:
        "We secure cargo space, handle all paperwork, and complete pre-arrival customs clearance while you monitor every milestone in real time.",
      image: "/images/working/move.png",
      alt: "Operations desk managing freight documentation and live shipment milestones",
    },
    {
      step: "Step 03",
      title: "Deliver",
      description:
        "Doorstep final-mile drop-off with verified proof of delivery, wrapped up in one clear, all-inclusive invoice with zero surprise fees.",
      image: "/images/working/deliver.png",
      alt: "CargoMax delivery specialist capturing digital proof of delivery at the doorstep",
    },
  ],
};

export const trackingPlatformContent = {
  badge: "SEC / 05 The platform",
  title: "Every Container,\nOne Screen.",
  summary:
    "Track shipments across carriers in real time, pull customs documents in two clicks, and get exception alerts before they become delays. Your whole team, your whole supply chain, one login.",
  cta: {
    label: "Track Shipment",
    to: "/tracking",
  },
  image: {
    src: "/images/tracking-preview/shipment-status.jpg",
    alt: "CargoMax shipment tracking panel showing container number, vessel, live position, customs clearance, ETA and schedule status",
    width: 1024,
    height: 764,
  },
};
