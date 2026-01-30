// Screen quality tier data
export const SCREEN_TIERS = [
  {
    name: "Value",
    type: "Aftermarket",
    warranty: "30-day warranty",
    warrantyDetail: "against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Budget-friendly option when available",
    highlight: false,
  },
  {
    name: "Premium",
    type: "Original-quality",
    warranty: "Lifetime warranty",
    warrantyDetail: "against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Best balance of quality and value",
    highlight: true,
  },
  {
    name: "Genuine (Apple)",
    type: "Factory original",
    warranty: "12-month warranty",
    warrantyDetail: "against defects",
    exclusions: "Excludes physical/liquid damage",
    description: "Factory-original Apple parts",
    highlight: false,
  },
];

// Common stocked parts for same-day service
export const STOCKED_PARTS = [
  "iPhone screens and batteries",
  "Popular iPhone back glass and frames",
  "Popular iPad screens and batteries",
  "Samsung S-series batteries",
  "Higher-end Samsung S-series screens",
];

// Quick answers data
export const QUICK_ANSWERS = [
  {
    title: "Why prices vary",
    description: "Part availability and repair complexity drive cost. Newer or rarer devices often cost more because parts are harder to source.",
    icon: "DollarSign",
  },
  {
    title: "Do you offer cheaper options?",
    description: "Only when reliable parts exist. Some devices have multiple quality tiers; others have just one dependable option.",
    icon: "Layers",
  },
  {
    title: "How fast can you do it?",
    description: "Depends on stock, queue, and sourcing. Common parts are often same-day; others may take 24–48 hours.",
    icon: "Clock",
  },
  {
    title: "What about warranty?",
    description: "Varies by tier and repair type. Value screens: 30 days. Premium: lifetime. Batteries: 90 days. Exclusions apply.",
    icon: "Shield",
  },
];

// Pricing logic sections
export const PRICING_LOGIC = [
  {
    title: "Part availability shapes options",
    points: [
      "Some devices have multiple quality tiers; others have one reliable option",
      "Newer or rarer devices often have fewer aftermarket alternatives",
      "We only offer parts we trust — we don't stock unreliable budget options",
    ],
  },
  {
    title: "Bundling multiple repairs",
    points: [
      "Multiple repairs on the same device may qualify for a bundled discount",
      "Ask about this when requesting a quote",
    ],
  },
  {
    title: "Price match policy",
    points: [
      "We price match verified local competitors when pricing is publicly advertised or can be confirmed",
      "We match comparable quotes from local competitors for the same repair",
      "Bring in a written quote and we'll do our best to match it",
    ],
  },
  {
    title: "Financing doesn't reflect replacement cost",
    points: [
      "Monthly payments can make a phone feel worth less than its true value",
      "Understanding actual replacement cost helps evaluate repair value",
    ],
  },
];

// Comparison table data
export const REPAIR_COMPARISONS = [
  {
    repairType: "Screen Replacement",
    deviceTypes: ["Phone", "Tablet"],
    brands: ["Apple", "Samsung", "Other"],
    costDriver: "Part quality and device model",
    tiers: ["Value", "Premium", "Genuine (Apple only)"],
    turnaround: "Same-day possible",
    warranty: "30 days to lifetime by tier",
  },
  {
    repairType: "Battery Replacement",
    deviceTypes: ["Phone", "Tablet", "Laptop"],
    brands: ["Apple", "Samsung", "Other"],
    costDriver: "Device model and battery capacity",
    tiers: ["Standard replacement"],
    turnaround: "Same-day possible",
    warranty: "90 days",
  },
  {
    repairType: "Back Glass / Frame",
    deviceTypes: ["Phone"],
    brands: ["Apple", "Samsung"],
    costDriver: "Repair method (laser vs. full housing)",
    tiers: ["Standard", "Premium"],
    turnaround: "Same-day to 24–48h",
    warranty: "30 days to lifetime by tier",
  },
  {
    repairType: "Charging Port",
    deviceTypes: ["Phone", "Tablet"],
    brands: ["Apple", "Samsung", "Other"],
    costDriver: "Part availability and soldering required",
    tiers: ["Standard replacement"],
    turnaround: "Same-day to 24–48h",
    warranty: "Lifetime",
  },
  {
    repairType: "Water Damage Treatment",
    deviceTypes: ["Phone", "Tablet", "Laptop"],
    brands: ["Apple", "Samsung", "Other"],
    costDriver: "Diagnosis and component repair needed",
    tiers: ["Diagnosis + repair"],
    turnaround: "Diagnosis required",
    warranty: "Limited (varies by outcome)",
  },
  {
    repairType: "Logic Board / Motherboard",
    deviceTypes: ["Phone", "Laptop"],
    brands: ["Apple", "Samsung", "Other"],
    costDriver: "Micro-soldering complexity",
    tiers: ["Component-level repair"],
    turnaround: "Diagnosis required",
    warranty: "90 days on repair",
  },
  {
    repairType: "Display / LCD (Laptop)",
    deviceTypes: ["Laptop"],
    brands: ["Apple", "Other"],
    costDriver: "Panel type and availability",
    tiers: ["OEM", "Compatible"],
    turnaround: "24–48h typical",
    warranty: "90 days to lifetime",
  },
  {
    repairType: "Joy-Con Drift / Controller",
    deviceTypes: ["Console"],
    brands: ["Other"],
    costDriver: "Joystick module replacement",
    tiers: ["Standard replacement"],
    turnaround: "Same-day possible",
    warranty: "90 days",
  },
  {
    repairType: "HDMI Port (Console)",
    deviceTypes: ["Console"],
    brands: ["Other"],
    costDriver: "Micro-soldering required",
    tiers: ["Component-level repair"],
    turnaround: "24–48h typical",
    warranty: "90 days",
  },
];

// FAQ data
export const PRICING_FAQS = [
  {
    question: "Why is Samsung screen repair expensive?",
    answer: "Samsung uses high-quality AMOLED displays that are costly to manufacture. The screens are also bonded to the frame, making replacement more complex. Aftermarket alternatives for Samsung often lack the quality and reliability of original panels, so we typically recommend OEM-quality parts.",
  },
  {
    question: "Why can't you always offer a cheaper screen?",
    answer: "Not all devices have reliable aftermarket alternatives. We only stock parts we trust — if a budget option has high failure rates or poor display quality, we won't offer it. For some devices, there's only one dependable option.",
  },
  {
    question: "Can you price match?",
    answer: "Yes. Bring in a written quote from a local competitor for the same repair, and we'll do our best to match it. The repair must be comparable in terms of part quality and warranty.",
  },
  {
    question: "Do you discount multiple repairs at once?",
    answer: "Often, yes. If you need more than one repair on the same device (like a screen and battery), ask about bundled pricing when you request a quote.",
  },
  {
    question: "Can you guarantee same-day service?",
    answer: "Not always. Same-day depends on part availability and our current queue. Common parts like iPhone screens and batteries are usually in stock. Less common repairs may take 24–48 hours if we need to source parts.",
  },
  {
    question: "What does warranty cover?",
    answer: "Warranty covers defects in the part we installed — things like dead pixels, touch issues, or battery failure under normal use. It does not cover new physical damage (drops, cracks) or liquid damage. Warranty terms vary: Value screens get 30 days, Premium screens get lifetime, batteries get 90 days.",
  },
  {
    question: "What if my phone has water damage?",
    answer: "Water damage requires diagnosis first. We can't guarantee what will or won't work until we open the device and assess the damage. Success rates vary, and some water-damaged phones can't be fully restored. We'll give you an honest assessment before proceeding.",
  },
  {
    question: "Can you recover photos without repairing fully?",
    answer: "Sometimes. Data recovery attempts involve getting a damaged phone working temporarily — just long enough to back up or transfer your data. A fee applies regardless of outcome because it covers technician time and effort. Success isn't guaranteed, especially with liquid damage.",
  },
  {
    question: "What if I'm still financing my phone?",
    answer: "You can still repair it. Just keep in mind that monthly payments don't reflect what the phone is actually worth on the market. A phone you're paying $40/month for might only be worth $300–400 to replace. Understanding the true replacement cost helps you decide if repair makes sense.",
  },
  {
    question: "Is diagnosis required for some issues?",
    answer: "Yes. Issues like random shutdowns, no power, water damage, or intermittent problems need diagnosis before we can quote. We need to identify which component is failing before we can give you an accurate price and timeline.",
  },
  {
    question: "Do you repair devices other shops won't?",
    answer: "Often, yes. We handle micro-soldering, board-level repair, and many niche devices that other shops turn away. If you've been told it's unrepairable, it's worth asking us for a second opinion.",
  },
  {
    question: "What if repair costs more than the phone is worth?",
    answer: "We'll tell you. We don't want to charge more than a device is worth. If repair doesn't make financial sense, we'll suggest alternatives like trade-in, buying a pre-owned device, or selling for parts. The decision is always yours.",
  },
];

// Device type filters
export const DEVICE_TYPE_FILTERS = ["Phone", "Tablet", "Laptop", "Console"];

// Brand filters
export const BRAND_FILTERS = ["Apple", "Samsung", "Other"];
