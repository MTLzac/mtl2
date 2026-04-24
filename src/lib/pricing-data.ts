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
    title: "What does it cost?",
    description:
      "iPhone screens $99–$349. iPad from $129. Samsung from $129. PS5 from $99. MacBook screens from $299. See anchor prices for every device below.",
    icon: "DollarSign",
  },
  {
    title: "Do you offer cheaper options?",
    description:
      "Only when reliable parts exist. Some devices have multiple quality tiers; others have just one dependable option.",
    icon: "Layers",
  },
  {
    title: "How fast can you do it?",
    description:
      "Depends on stock, queue, and sourcing. Common parts are often same-day; others may take 24–48 hours.",
    icon: "Clock",
  },
  {
    title: "What about warranty?",
    description:
      "Varies by tier and repair type. Value screens: 30 days. Premium: lifetime. Batteries: 90 days. Exclusions apply.",
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
      "Bring in a written quote and we'll do our best to match it — or beat it when we can",
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

// Comparison table data — repositioned with Typical Range column for hub role
export const REPAIR_COMPARISONS = [
  {
    repairType: "iPhone screen (LCD: XR, 11)",
    typicalRange: "$99–$139",
    costDriver: "Model, part availability",
    turnaround: "Same-day if in stock",
  },
  {
    repairType: "iPhone screen (Classic OLED: XS–14)",
    typicalRange: "$99–$179",
    costDriver: "Model, Value vs Premium tier",
    turnaround: "Same-day if in stock",
  },
  {
    repairType: "iPhone screen (Modern OLED: 14 Pro–16 Pro Max)",
    typicalRange: "$219–$349",
    costDriver: "Model, Value vs Premium tier",
    turnaround: "Same-day if in stock",
  },
  {
    repairType: "iPhone battery",
    typicalRange: "$89–$149",
    costDriver: "Model, battery health check",
    turnaround: "Same-day usually",
  },
  {
    repairType: "iPhone rear housing",
    typicalRange: "$129–$249",
    costDriver: "Model, color availability",
    turnaround: "1–3 business days",
  },
  {
    repairType: "iPad screen (standard)",
    typicalRange: "From $129",
    costDriver: "Model",
    turnaround: "Same-day to 3 days",
  },
  {
    repairType: "iPad screen (Air / Pro)",
    typicalRange: "From $249",
    costDriver: "Full display assembly required",
    turnaround: "2–5 business days",
  },
  {
    repairType: "iPad battery",
    typicalRange: "$129",
    costDriver: "Model",
    turnaround: "2–5 business days",
  },
  {
    repairType: "Samsung Galaxy A-series screen",
    typicalRange: "From $129",
    costDriver: "Model",
    turnaround: "Same-day usually",
  },
  {
    repairType: "Samsung Galaxy S-series screen",
    typicalRange: "$199–$249",
    costDriver: "Aftermarket vs Genuine Service Pack",
    turnaround: "1–3 business days",
  },
  {
    repairType: "Samsung Galaxy S Ultra screen",
    typicalRange: "$299–$349",
    costDriver: "Aftermarket vs Genuine Service Pack",
    turnaround: "1–3 business days",
  },
  {
    repairType: "Samsung Z Fold / Z Flip screen",
    typicalRange: "From $399",
    costDriver: "Model age, part availability",
    turnaround: "3–7 business days",
  },
  {
    repairType: "MacBook screen",
    typicalRange: "From $299 Genuine ($149 less Aftermarket)",
    costDriver: "Model, Genuine vs Aftermarket",
    turnaround: "2–5 business days",
  },
  {
    repairType: "MacBook battery",
    typicalRange: "$149–$179",
    costDriver: "Model",
    turnaround: "2–5 business days",
  },
  {
    repairType: "PS5 cleaning / thermal paste",
    typicalRange: "From $99",
    costDriver: "Condition",
    turnaround: "2–5 business days",
  },
  {
    repairType: "PS5 HDMI port",
    typicalRange: "From $99",
    costDriver: "Damage extent",
    turnaround: "2–5 business days",
  },
  {
    repairType: "PS5 / Xbox controller",
    typicalRange: "Up to $59",
    costDriver: "Repair type or trade-in option",
    turnaround: "1–3 business days",
  },
  {
    repairType: "Water damage",
    typicalRange: "Diagnostic required",
    costDriver: "Extent, success rate",
    turnaround: "3–5 business days",
  },
  {
    repairType: "Other devices",
    typicalRange: "Quote required",
    costDriver: "Varies",
    turnaround: "Varies",
  },
];

// FAQ data — 6 new hub questions prepended to existing 12
export const PRICING_FAQS = [
  {
    question: "How much does phone repair cost in Winnipeg?",
    answer:
      "It depends on device and repair type. Typical starting points (April 2026): iPhone screens from $99 (older LCD models) up to $349 (iPhone 16 Pro Max Premium tier). iPad screens from $129 (standard) or $249 (Air/Pro). Samsung Galaxy from $129 (A-series) up to $399+ (foldables). MacBook screens from $299. PS5 repairs from $99. See the Device Pricing Summary above for all categories.",
  },
  {
    question: "How much does Apple repair cost compared to Apple's official prices?",
    answer:
      "Independent shops are typically significantly less than Apple's official repair prices, especially for out-of-warranty devices. For example, Apple charges well over $200 for iPhone 11 screen repair out-of-warranty, while we charge $99–$139. For MacBook repair, Apple pricing often exceeds $500 for screen replacement on older models that we service for $299 Genuine or approximately $149 Aftermarket. Apple does not publish general repair rates — you need to start a repair request on apple.com to see your exact price. We price-match verified Apple quotes where possible.",
  },
  {
    question: "What's the difference between Aftermarket and Genuine parts?",
    answer:
      "Three tiers across our repair services: Value / Aftermarket (iPhone / MacBook / Samsung S-series) — non-original parts that still meet our quality standards. Same functional performance for daily use, typically 30–40% less than Genuine. 30-day warranty on the part. Premium (iPhone OLED screens only) — OLED factory-equivalent aftermarket with lifetime warranty on the part. Our most common screen tier — best balance of price and quality. Genuine (Apple / Samsung Service Pack) — original manufacturer parts. Premium pricing, 12-month manufacturer warranty, and the option needed for some carrier trade-in programs.",
  },
  {
    question: "Why don't you publish a fixed price list?",
    answer:
      "Part costs change often — sometimes significantly month-to-month. If we published a fixed list, we'd either be overcharging when parts get cheaper or undercutting ourselves when parts get scarce. Instead we quote every repair against current part costs. When parts drop, your quote drops. The anchor prices on this page reflect typical quotes as of April 2026 — your exact price depends on device, damage extent, and current part availability.",
  },
  {
    question: "Do you offer free quotes?",
    answer:
      "Yes. All repair quotes are free. You can get a quote online through the Get Repair Quote form (usually within 1–2 business hours during shop hours), by phone at (204) 500-9757, or by walk-in at either our St. Vital or Thompson location. We'll provide an exact price before any work begins — no hidden fees, no surprise charges.",
  },
  {
    question: "What if the repair costs more than my device is worth?",
    answer:
      "We'll tell you upfront. If your repair cost approaches 50%+ of your device's current market value, we'll explain that clearly and offer alternatives: trade-in credit toward a pre-owned replacement, data recovery if the data matters more than the device, or simply declining the repair if it doesn't make financial sense. See our Repair vs Replace section above. We never push repairs that don't serve you — this is why we publish our philosophy instead of just a price list.",
  },
  {
    question: "Why is Samsung screen repair expensive?",
    answer:
      "Samsung uses high-quality AMOLED displays that are costly to manufacture. The screens are also bonded to the frame, making replacement more complex. Aftermarket alternatives for Samsung often lack the quality and reliability of original panels, so we typically recommend OEM-quality parts.",
  },
  {
    question: "Why can't you always offer a cheaper screen?",
    answer:
      "Not all devices have reliable aftermarket alternatives. We only stock parts we trust — if a budget option has high failure rates or poor display quality, we won't offer it. For some devices, there's only one dependable option.",
  },
  {
    question: "Can you price match?",
    answer:
      "Yes. Bring in a written quote from a local competitor for the same repair, and we'll do our best to match it. The repair must be comparable in terms of part quality and warranty.",
  },
  {
    question: "Do you discount multiple repairs at once?",
    answer:
      "Often, yes. If you need more than one repair on the same device (like a screen and battery), ask about bundled pricing when you request a quote.",
  },
  {
    question: "Can you guarantee same-day service?",
    answer:
      "Not always. Same-day depends on part availability and our current queue. Common parts like iPhone screens and batteries are usually in stock. Less common repairs may take 24–48 hours if we need to source parts.",
  },
  {
    question: "What does warranty cover?",
    answer:
      "Warranty covers defects in the part we installed — things like dead pixels, touch issues, or battery failure under normal use. It does not cover new physical damage (drops, cracks) or liquid damage. Warranty terms vary: Value screens get 30 days, Premium screens get lifetime, batteries get 90 days.",
  },
  {
    question: "What if my phone has water damage?",
    answer:
      "Water damage requires diagnosis first. We can't guarantee what will or won't work until we open the device and assess the damage. Success rates vary, and some water-damaged phones can't be fully restored. We'll give you an honest assessment before proceeding.",
  },
  {
    question: "Can you recover photos without repairing fully?",
    answer:
      "Sometimes. Data recovery attempts involve getting a damaged phone working temporarily — just long enough to back up or transfer your data. A fee applies regardless of outcome because it covers technician time and effort. Success isn't guaranteed, especially with liquid damage.",
  },
  {
    question: "What if I'm still financing my phone?",
    answer:
      "You can still repair it. Just keep in mind that monthly payments don't reflect what the phone is actually worth on the market. A phone you're paying $40/month for might only be worth $300–400 to replace. Understanding the true replacement cost helps you decide if repair makes sense.",
  },
  {
    question: "Is diagnosis required for some issues?",
    answer:
      "Yes. Issues like random shutdowns, no power, water damage, or intermittent problems need diagnosis before we can quote. We need to identify which component is failing before we can give you an accurate price and timeline.",
  },
  {
    question: "Do you repair devices other shops won't?",
    answer:
      "Often, yes. We handle micro-soldering, board-level repair, and many niche devices that other shops turn away. If you've been told it's unrepairable, it's worth asking us for a second opinion.",
  },
  {
    question: "What if repair costs more than the phone is worth?",
    answer:
      "We'll tell you. We don't want to charge more than a device is worth. If repair doesn't make financial sense, we'll suggest alternatives like trade-in, buying a pre-owned device, or selling for parts. The decision is always yours.",
  },
];

// Device pricing summary cards (for cross-category hub role)
export const DEVICE_PRICING_CARDS = [
  {
    title: "iPhone Repair",
    body: "iPhone screen repair starts at $99 (iPhone XS, XR, iPhone 11 LCD) and ranges to $349 for iPhone 16 Pro Max. Battery replacement $89–$149. Rear housing $129–$249. Our Value screen tier runs up to 50% less than Premium on OLED models. See our full iPhone pricing for model-by-model breakdown across all 20+ iPhone models we repair.",
    links: [{ label: "View full iPhone pricing →", href: "/repair/iphone" }],
  },
  {
    title: "iPad Repair",
    body: "iPad screen repair starts at $129 for standard iPad models. iPad battery replacement $129. Note: iPad Air and iPad Pro use fully-integrated display assemblies where the glass digitizer cannot be replaced separately — these models require full display replacement starting at $249. Same-day service when parts are in stock.",
    links: [{ label: "View iPad repair details →", href: "/repair/ipad" }],
  },
  {
    title: "Samsung Galaxy Repair",
    body: "Galaxy A-series screens from $129. Galaxy S-series from $199 (aftermarket OLED) or $249 (Genuine Service Pack). Galaxy S-series Ultra from $299 aftermarket / $349 Genuine. Galaxy Z Fold and Z Flip foldables start at $399+ — for older foldables, data recovery is often a better value than screen repair. Two tiers on most S-series devices so you can choose Genuine quality or Aftermarket savings.",
    links: [{ label: "View Samsung repair details →", href: "/repair/samsung" }],
  },
  {
    title: "MacBook Repair",
    body: "MacBook screen replacement starts at $299 using Genuine parts. Aftermarket screens run approximately $150 less with identical panel quality (the only difference is no Apple logo on the back of the housing). MacBook battery replacement $149–$179 depending on model. Turnaround typically 2–5 business days depending on part availability.",
    links: [{ label: "View MacBook repair details →", href: "/repair/macbook" }],
  },
  {
    title: "Console Repair",
    body: "PS5 cleaning and thermal paste service from $99. PS5 HDMI port repair from $99. Controller repair up to $59 — or trade in your controller for store credit toward a pre-owned replacement at the same price point (often the better choice for older controllers). Xbox repair also available for HDMI, disc drive, and controller issues.",
    links: [
      { label: "View PS5 repair details →", href: "/repair/ps5" },
      { label: "View Xbox repair details →", href: "/repair/xbox" },
    ],
  },
];

// Device type filters (legacy — no longer used in updated comparison table)
export const DEVICE_TYPE_FILTERS = ["Phone", "Tablet", "Laptop", "Console"];

// Brand filters (legacy — no longer used in updated comparison table)
export const BRAND_FILTERS = ["Apple", "Samsung", "Other"];
