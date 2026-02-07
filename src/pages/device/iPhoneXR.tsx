import DeviceHubTemplate from "@/components/device-hub/DeviceHubTemplate";
import type { DeviceHubData } from "@/components/device-hub/types";

// iPhone XR hero images — replace with actual Apple stock imagery
// import frontView from "@/assets/devices/iphone-xr-front.webp";
// import backView from "@/assets/devices/iphone-xr-back.webp";

const iPhoneXRData: DeviceHubData = {
  // SEO
  metaTitle: "iPhone XR (2026): Repair, iOS Support, Value & Options",
  metaDescription:
    "A factual overview of the iPhone XR in 2026, including iOS support, repair viability, resale value, and upgrade considerations.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-xr",
  slug: "iphone-xr",

  // Hero
  deviceName: "iPhone XR",
  statusBadge: {
    label: "Near deprecation window",
    variant: "aging",
  },
  // heroImages: {
  //   front: frontView,
  //   back: backView,
  //   alt: "Apple iPhone XR front and back",
  // },

  // At a Glance
  atAGlance: [
    { label: "Release Year", value: "2018" },
    { label: "Display", value: '6.1" Liquid Retina LCD, 828 × 1792 px' },
    { label: "Processor", value: "A12 Bionic" },
    {
      label: "iOS Support",
      value:
        "Supported through iOS 18. Not expected to receive iOS 19 (verify when released).",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Secondary phone, kids' device, budget daily driver for messaging and browsing.",
    },
  ],

  // Everyday Performance
  everydayPerformance: {
    paragraphs: [
      "The iPhone XR's A12 Bionic chip remains capable for most routine tasks in 2026. Messaging, browsing, email, and social media apps run without noticeable delay on a clean install.",
      "Where you begin to see age is in multitasking and heavier applications. Switching between several open apps may show brief reloads, and newer games or photo-editing tools may not perform as smoothly as on devices with later chipsets.",
    ],
    bullets: [
      "Banking apps (TD, RBC, Scotiabank): function normally for day-to-day use",
      "Social media (Instagram, TikTok): usable, though feed-heavy apps may lag slightly on scroll",
      "Maps and navigation: functional, but slower to load large map tiles compared to newer devices",
      "Video calls (FaceTime, Teams): work reliably at standard quality",
    ],
  },

  // Battery & Aging
  batteryAndAging: {
    paragraphs: [
      "An iPhone XR purchased in 2018 has had roughly 7–8 years of charge cycling. Most original batteries at this stage are well below Apple's 80% maximum capacity threshold, meaning noticeably shorter daily use between charges.",
      "Battery replacement remains one of the most cost-effective repairs for this model. A new battery can restore close-to-original screen-on time and is typically completed within an hour.",
    ],
    bullets: [
      "Check battery health in Settings → Battery → Battery Health & Charging",
      "Below 80% maximum capacity, performance throttling may activate",
      "Replacement is generally worthwhile if the device is otherwise functional and meets your software needs",
      "Battery replacement cost is modest relative to the device's remaining useful life",
    ],
  },

  // Camera
  camera: {
    paragraphs: [
      "The iPhone XR has a single 12MP rear camera. In daylight and well-lit environments, it produces solid, colour-accurate photos suitable for social media, documentation, and casual photography.",
      "Low-light performance is noticeably behind newer models. The XR lacks Night Mode (introduced with iPhone 11), so indoor and evening shots tend to be noisier and less detailed.",
    ],
    bullets: [
      "Daylight photos: good detail and colour, competitive with many mid-range phones today",
      "Low light: usable but visibly inferior to iPhone 11 and later",
      "Video: records 4K at 60fps — still practical for personal and small-business video",
      "Portrait mode: available on the rear camera for people only (not objects), using software-based depth",
    ],
  },

  // iOS Support
  iosSupport: {
    currentVersion: "iOS 18 (final major version — verify iOS 19 eligibility)",
    deprecationStatus: "Near deprecation window",
    paragraphs: [
      "The iPhone XR received iOS 18, which brought current security patches and feature updates through 2025. However, the A12 Bionic chip is widely expected to be excluded from iOS 19 when it releases later in 2025.",
      "Once a device loses major iOS version support, it continues to receive critical security patches for a limited period (typically 1–2 years). After that, app developers begin dropping support for the older iOS version, starting with banking, transit, and security-sensitive apps.",
      "From our experience, this is where users begin to notice practical limitations — not in hardware performance, but in the apps they rely on daily.",
    ],
    affectedApps: [
      "Banking apps (major Canadian banks typically require iOS versions within 2 releases of current)",
      "Transit and payment apps (Presto, transit agency apps)",
      "Government services (CRA, provincial health apps)",
      "Two-factor authentication apps may eventually require newer OS versions",
    ],
  },

  // Repair Viability
  repairViability: {
    paragraphs: [
      "The iPhone XR remains a repairable device in 2026. Parts are widely available, and most common repairs are straightforward for experienced technicians.",
      "The main factor that makes repair uneconomical is when multiple components fail simultaneously — for example, a cracked screen combined with water damage and a degraded battery. In those cases, the combined repair cost may approach or exceed the device's market value.",
      "Back glass replacement on the iPhone XR deserves specific mention: unlike iPhone 12 and later models, the XR's back glass is laser-welded to the frame, making replacement more labour-intensive. This is reflected in the repair cost, though it remains a viable option for devices in otherwise good condition.",
    ],
    commonRepairs: [
      {
        name: "Screen Replacement",
        description:
          "The most common repair. LCD and digitizer are a single assembly. Aftermarket and OEM-quality options are available at different price points.",
      },
      {
        name: "Battery Replacement",
        description:
          "Restores daily battery life. Straightforward procedure, typically completed in under an hour.",
      },
      {
        name: "Back Glass Replacement",
        description:
          "Labour-intensive due to laser-welded construction. More costly than screen repair, but still viable if the device is otherwise in good shape.",
      },
      {
        name: "Charging Port Repair",
        description:
          "Lightning port issues from debris or wear. Port replacement resolves charging and data connection problems.",
      },
    ],
    // images: {
    //   frontDamage: "[PLACEHOLDER: front glass damage photo]",
    //   frontDamageAlt: "iPhone XR with cracked front display glass",
    //   backDamage: "[PLACEHOLDER: back glass damage photo]",
    //   backDamageAlt: "iPhone XR with shattered back glass panel",
    // },
  },

  // Resale & Trade-In Context
  resaleContext: {
    paragraphs: [
      "The iPhone XR's resale value in 2026 is modest and heavily condition-dependent. Devices in good cosmetic condition with healthy batteries command higher values, while those with cracked screens, battery issues, or carrier locks trade at significant discounts.",
      "Market values vary between private sale and trade-in channels. Trade-in programs typically offer less than private sale but provide convenience and immediate credit toward a replacement device.",
      "Exact values change frequently based on supply, demand, and the release cycle of newer models. For a current valuation, device-specific assessment tools provide the most accurate figures.",
    ],
    bullets: [
      "Condition is the single largest factor in resale value — cosmetic damage, battery health, and functionality all matter",
      "Carrier-unlocked devices typically have higher resale value",
      "Cash offers and store credit amounts differ — store credit is often higher",
      "Storage capacity (64GB vs 128GB vs 256GB) affects value modestly",
    ],
  },

  // Decision Framing
  decisionFraming: [
    {
      condition: "If the device is in good condition with a healthy battery",
      recommendation:
        "The iPhone XR can continue as a capable daily driver for basic tasks. Consider a battery replacement if health is below 80% to extend its useful life.",
    },
    {
      condition: "If the screen is cracked but everything else works",
      recommendation:
        "Screen repair is typically worthwhile at this stage, especially if you plan to use the device for another 12–18 months or pass it to a family member.",
    },
    {
      condition: "If there's major damage (screen + back glass + battery)",
      recommendation:
        "Multiple simultaneous repairs may not be economical. Compare the total repair cost against the device's current trade-in value and the cost of a refurbished replacement.",
    },
    {
      condition: "If software limitations are the primary concern",
      recommendation:
        "Once the XR loses iOS updates, banking and security-sensitive apps will begin dropping support. If you rely on these daily, this is typically the clearest signal to upgrade rather than repair.",
    },
  ],

  // Comparisons
  comparisons: [
    { label: "iPhone XR vs iPhone 11", slug: "iphone-xr-vs-iphone-11" },
    { label: "iPhone XR vs iPhone XS", slug: "iphone-xr-vs-iphone-xs" },
    { label: "iPhone XR vs iPhone 12", slug: "iphone-xr-vs-iphone-12" },
    { label: "iPhone XR vs iPhone SE (2020)", slug: "iphone-xr-vs-iphone-se-2020" },
  ],

  // FAQs
  faqs: [
    {
      question: "Is the iPhone XR still supported in 2026?",
      answer:
        "The iPhone XR received iOS 18 and continues to receive security updates. However, it is not expected to support iOS 19. Once major version support ends, the device remains functional but will gradually lose compatibility with newer app requirements.",
    },
    {
      question: "Is it worth fixing an iPhone XR in 2026?",
      answer:
        "For single-issue repairs like a cracked screen or worn battery, repair is typically worthwhile if the device meets your software needs. For multiple simultaneous failures, compare total repair cost against replacement options.",
    },
    {
      question: "Can the iPhone XR run modern apps?",
      answer:
        "Most common apps still run on the iPhone XR as of early 2026. Banking, social media, and productivity apps are functional. Performance-intensive apps and games may not run optimally due to the older chipset and limited RAM.",
    },
    {
      question: "How long will the iPhone XR battery last?",
      answer:
        "Original batteries from 2018 are typically well below 80% maximum capacity by 2026. A battery replacement restores close to original battery life and is one of the most cost-effective ways to extend the device's usable lifespan.",
    },
    {
      question: "What is the iPhone XR worth for trade-in?",
      answer:
        "Trade-in value depends heavily on condition, battery health, storage capacity, and carrier lock status. Values change frequently — use a device-specific assessment tool for current market rates.",
    },
    {
      question: "Does the iPhone XR have 5G?",
      answer:
        "No. The iPhone XR supports 4G LTE only. 5G connectivity was introduced with the iPhone 12 series in 2020. On Canadian carriers, LTE coverage remains widely available.",
    },
  ],
};

const IPhoneXRDevice = () => <DeviceHubTemplate data={iPhoneXRData} />;

export default IPhoneXRDevice;
