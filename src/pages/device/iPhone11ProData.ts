import type { DeviceHubData } from "@/components/device-hub/types";

const iPhone11ProData: DeviceHubData = {
  // ── SEO ──
  metaTitle: "iPhone 11 Pro in 2026: Still Runs iOS 26.4.1, Vintage Status",
  metaDescription:
    "The iPhone 11 Pro runs iOS 26.4.1 and still gets full Apple updates — but Apple moved it to vintage status in January 2026. Here's what that means for support, repair, and upgrade decisions.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-11-pro",
  slug: "iphone-11-pro",

  // ── Hero ──
  deviceName: "iPhone 11 Pro",
  h1: "iPhone 11 Pro in 2026: Still Fully Supported — But Now Vintage",
  statusBadge: {
    label: "Still receiving iOS 26 updates",
    variant: "supported",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone 11 Pro front and back view",
  featuredSnippetHtml: `
    <p>The iPhone 11 Pro runs iOS 26.4.1 — Apple's current iOS release as of April 2026 — and still receives the full Liquid Glass interface, system updates, and security patches. What has changed: Apple moved the iPhone 11 Pro to its 'vintage' products list on January 1, 2026 (the 11 Pro Max joined in September 2025). Software support will likely continue for 1 more major iOS version plus several years of security patches. Repair-parts availability from Apple is the new countdown — we cover both below.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a> · <a href="https://support.apple.com/en-ca/102772" target="_blank" rel="noopener noreferrer">Apple vintage products list</a></p>
  `,
  tldrHtml: `
    <p><strong>TL;DR:</strong> Unlike the <a href="/devices/iphone-xr">iPhone XR</a>, <a href="/devices/iphone-xs">XS</a>, and <a href="/devices/iphone-xs-max">XS Max</a> — which were dropped with iOS 26 — the iPhone 11 Pro still gets full iOS updates and runs iOS 26. It likely misses iOS 27 when that arrives in fall 2026, then continues getting security patches through roughly 2028–2029. The bigger short-term decision is repair: Apple's vintage classification means official parts are on a ~2-year countdown before the device becomes obsolete. Third-party repair extends that runway — but if you're planning multiple repairs, weigh the math against trade-in and upgrade value.</p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2019 (September 20)" },
    { label: "Display", value: '5.8″ Super Retina XDR OLED, 2436 × 1125 px' },
    { label: "Processor", value: "A13 Bionic" },
    {
      label: "Current iOS Version",
      value: "iOS 26.4.1 (April 2026)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Still a capable daily driver in 2026 — OLED display, triple-camera system, and current iOS. A practical choice for users who value a compact iPhone with a premium camera, and who don't need Apple Intelligence or 5G.",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 3,
      explanation:
        "The iPhone 11 Pro has a 3,046 mAh battery — slightly smaller than the <a href='/devices/iphone-11'>standard iPhone 11's</a> 3,110 mAh cell. By 2026, most original batteries have degraded meaningfully, resulting in noticeably shorter screen-on time and more frequent charging. Battery replacement is the most cost-effective repair for this model and fully restores daily endurance.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 3.5,
      explanation:
        "The 11 Pro uses a Super Retina XDR OLED display, which costs significantly more to replace than the LCD panel in the <a href='/devices/iphone-11'>standard iPhone 11</a> (scored 5/5 for repair cost). Single-issue repairs like battery or charging port remain proportionate to the device's value. However, OLED screen replacement alone can represent a substantial portion of the phone's current resale value — and multi-repair scenarios frequently exceed it.",
    },
    {
      label: "Parts Availability",
      score: 3.5,
      explanation:
        "Replacement parts for the iPhone 11 Pro remain available, but Apple classified the device as vintage in January 2026. Third-party suppliers still stock OLED panels, batteries, and charging assemblies — and supply is expected to remain steady for several more years. If you're planning to repair, doing so within the next 12-24 months gives the widest parts selection at the lowest cost.",
    },
    {
      label: "iOS Support Lifespan",
      score: 4,
      explanation:
        "The iPhone 11 Pro currently runs iOS 26.4.1 and receives full major iOS updates. iOS 27 (fall 2026) support is not yet confirmed but is widely expected to drop iPhone 11 series devices. After that, security patches typically continue for about 3 more years — putting realistic software support through roughly 2028–2029.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Summary:</strong> The iPhone 11 Pro remains a capable daily driver in 2026 with full iOS 26 support and reasonable repair costs. The biggest caveat for long-term ownership is Apple's vintage classification, which starts a parts-availability countdown over the next 2-3 years.
  `,

  // ── Quick Facts ──
  quickFacts: {
    heading: "Quick Facts — iPhone 11 Pro in April 2026",
    items: [
      { label: "Latest iOS version", value: "iOS 26.4.1 (April 8, 2026)" },
      { label: "Runs iOS 26 fully", value: "Yes (including Liquid Glass UI)" },
      { label: "Supports Apple Intelligence", value: "No (requires A17 Pro or newer)" },
      { label: "Expected iOS 27 support", value: "Unlikely (Apple expected to raise minimum to A14 / iPhone 12)" },
      { label: "Expected end of security updates", value: "Approximately 2028–2029" },
      { label: "Apple vintage status", value: "Yes (as of January 1, 2026)" },
      { label: "Expected Apple obsolete date", value: "Approximately January 2028" },
      { label: "Release date", value: "September 20, 2019" },
      { label: "Device age", value: "6 years, 7 months (as of April 2026)" },
      { label: "Our recommendation", value: "Still a strong daily driver. Repairs worthwhile now while parts remain available; watch WWDC 2026 (June 8) for iOS 27 compatibility announcement before major hardware decisions." },
    ],
    footnote: "This page is updated when Apple releases new iOS versions and updates its vintage/obsolete status for the iPhone 11 Pro. Last verified: April 24, 2026.",
  },

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone 11 Pro iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone 11 Pro shipped with iOS 13 in September 2019 and has received every major iOS update since — including iOS 26, which launched in September 2025 with Apple's Liquid Glass UI redesign. As of April 24, 2026, the iPhone 11 Pro runs iOS 26.4.1, released April 8, 2026. Unlike the <a href="/devices/iphone-xs">iPhone XS</a> and <a href="/devices/iphone-xs-max">XS Max</a> — both of which were dropped with iOS 26 — the A13 Bionic chip in the 11 Pro meets the minimum hardware requirements for the current major iOS version. Based on current reporting from Bloomberg and Apple's historical cadence, iOS 27 (expected to launch fall 2026) is likely to raise the minimum hardware requirement to A14 Bionic — which would drop the iPhone 11 series. Apple will confirm iOS 27 compatibility at its WWDC 2026 keynote on June 8, 2026. If the 11 Pro is dropped from iOS 27, Apple typically continues shipping security patches on the previous major iOS branch for approximately 3 years, putting realistic security support through approximately 2028–2029.</p>
    `,
    whatVersion: {
      heading: "Can the iPhone 11 Pro get iOS 26?",
      contentHtml: `
        <p>Yes. The iPhone 11 Pro fully supports iOS 26 — including the Liquid Glass interface, Messages improvements, Phone app changes, and all core iOS 26 features. The one major exception is Apple Intelligence, Apple's AI feature suite (Genmoji, Image Playground, Visual Intelligence, upgraded Siri). Apple Intelligence requires an A17 Pro chip or newer, so the iPhone 11 Pro does not qualify. To install the latest version of iOS 26: Settings → General → Software Update.</p>
        <p>It's important to understand the difference between feature updates and security updates.</p>
        <ul>
          <li>placeholder</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone 11 Pro Eventually Stops Getting iOS Updates?",
    contentHtml: `
      <p>When the iPhone 11 Pro eventually drops off Apple's major iOS support list — most likely with iOS 27 in fall 2026 — the transition will follow the same pattern as older iPhones that have already gone through this. The <a href="/devices/iphone-xr">iPhone XR</a>, <a href="/devices/iphone-xs">XS</a>, and <a href="/devices/iphone-xs-max">XS Max</a> hit their major-update cutoff last September. Core device functions (calls, messages, browsing, most common apps) continue working for years after that point. Security patches typically continue for about 3 more years. App compatibility gradually declines as developers raise their minimum supported iOS. Here's what that progression typically looks like:</p>
    `,
    appCompatibility: {
      heading: "App Compatibility Issues Canadian Users May Notice",
      contentHtml: `
        <p>From our experience, these are the categories of apps where Canadian users on the iPhone 11 Pro tend to notice compatibility issues first as software support winds down:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, BMO, and major Canadian banks typically require iOS versions within two major releases of the current version.</li>
          <li><strong>Transit and payment apps</strong> — Presto, Apple Pay, and city transit apps generally maintain longer compatibility windows.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services tend to lag behind on minimum-OS bumps.</li>
          <li><strong>Two-factor authentication</strong> — Authenticator apps usually keep working long after major-version support ends.</li>
        </ul>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone 11 Pro Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience, the iPhone 11 Pro's repair viability sits between the <a href="/devices/iphone-11">standard iPhone 11</a> (which benefits from cheaper LCD repairs) and the older XS-generation models. The 11 Pro benefits from active iOS 26 support and good parts availability, but the OLED screen significantly increases repair costs. The decision depends on the type and number of repairs needed — and whether the total cost remains proportionate to the device's current resale value.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone 11 Pro Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement</strong> — The most cost-effective repair. Restores daily battery life and removes performance throttling. Given the device's ongoing iOS 26 support, battery replacement extends a phone that remains fully functional in the current software ecosystem.</li>
          <li><strong>Single-issue screen repair</strong> — OLED replacement costs more than the <a href="/devices/iphone-11">iPhone 11's LCD</a>, but a screen-only repair is still worthwhile given the device's remaining software support and premium build quality.</li>
          <li><strong>Charging port or individual camera repairs</strong> — These component repairs remain cost-effective and extend the device's useful life significantly.</li>
          <li><strong>Data recovery</strong> — For devices containing irreplaceable photos, contacts, or documents, repair is worthwhile regardless of market value.</li>
        </ul>
        <p>For a full list of services and current pricing context, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When Upgrading or Trading In Is Usually More Practical",
      contentHtml: `
        <ul>
          <li><strong>OLED screen + back glass damage</strong> — The combined cost of replacing the Super Retina XDR OLED panel and the back glass (attached to a stainless steel frame) frequently approaches or exceeds the device's current market value. Vintage-status parts pricing tightens that math further over time.</li>
          <li><strong>Face ID failure after drops</strong> — TrueDepth camera system repairs on the 11 Pro can be complex and costly.</li>
          <li><strong>Multiple simultaneous repairs</strong> — When screen, battery, and back glass all need attention, the combined cost — driven primarily by the OLED panel — often makes <a href="/trade-in">trading in</a> and upgrading more practical, especially as Apple's vintage classification narrows the official parts window.</li>
          <li><strong>Desire for 5G, MagSafe, or ProMotion</strong> — Like the <a href="/devices/iphone-11">standard iPhone 11</a>, the 11 Pro lacks 5G, MagSafe, and 120Hz ProMotion. If these features matter, upgrading to an iPhone 12 or later is the path forward.</li>
        </ul>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone 11 Pro Damage and What It Costs",
    frontGlass: {
      heading: "OLED Display Damage",
      contentHtml: `
        <p>The iPhone 11 Pro uses a 5.8-inch Super Retina XDR OLED display. When the screen cracks, the entire OLED panel and digitizer assembly must be replaced as a single unit — making it significantly more expensive than the <a href="/devices/iphone-11">LCD replacement on the standard iPhone 11</a>. This cost difference is the single largest factor in the 11 Pro's repair calculus.</p>
        <p>OLED damage can present as visible cracks, colour distortion, green lines, or dead pixels — sometimes without any external cracking, typically after drops. All of these symptoms require full panel replacement.</p>
        <p>Quality aftermarket OLED panels are available at lower price points than OEM. From our experience, most users find aftermarket replacements deliver strong results for daily use, though colour accuracy may differ marginally from the original panel.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>The iPhone 11 Pro features a stainless steel frame with a textured matte glass back. The back glass is adhered to the frame and requires either a full housing swap or careful glass-only removal — both of which add meaningful cost.</p>
        <p>For devices with back glass damage only, repair is usually worthwhile given the device's remaining iOS support. When combined with OLED screen damage, the total cost frequently exceeds the device's current resale value — making a <a href="/trade-in">trade-in</a> the more practical option.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone 11 Pro",
    contentHtml: `
      <p>Should you upgrade from your iPhone 11 Pro in 2026? The calculus is different than for older iPhones. The 11 Pro still runs current iOS and handles most everyday tasks well on iOS 26.4.1. But two factors are converging: (1) the device was added to Apple's vintage products list in January 2026, starting a ~2-year countdown before parts availability gets harder, and (2) iOS 27 is expected to drop iPhone 11 series devices when it launches in fall 2026. Upgrade if: your battery has dropped below 80% health, your OLED has noticeable burn-in (common on 6+ year OLED panels), you want Apple Intelligence features, you need 5G for your carrier, or you're already facing a significant repair. Keep it if: the device is in good condition, you've recently replaced the battery or screen, and you don't care about Apple Intelligence. Trade-in values in 2026 for the 11 Pro are stronger than older iPhones because it still runs current iOS — but that advantage narrows once iOS 27 drops. If you're leaning toward upgrading, check <a href="/trade-in">your current trade-in value</a> before the WWDC 2026 announcement to capture the stronger valuation window. Common upgrade paths include:</p>
      <ul>
        <li>iPhone 12 or iPhone 12 Pro — First-generation 5G iPhones with MagSafe. The 12 Pro offers a familiar premium experience with updated internals.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong value option for users buying used.</li>
        <li>iPhone 13 Pro or 14 Pro — For users who want a meaningful leap in camera quality, battery life, and display technology (ProMotion 120Hz).</li>
      </ul>
      <p>For a full quote on your specific iPhone 11 Pro configuration, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Repair, Sell, or Upgrade? A Practical Framework",
    contentHtml: `
      <p>The iPhone 11 Pro's repair decision is more nuanced than the <a href="/devices/iphone-11">standard iPhone 11</a> because OLED replacement costs are significantly higher than LCD. Use this framework to evaluate your options:</p>
    `,
    scenarios: [
      {
        condition: "Battery wear or single minor issue",
        recommendation:
          "Repair is typically the right call. Battery replacement is cost-effective, and the device still receives iOS updates as of April 2026. For a single failing component — battery, charging port, or camera — repair extends a phone that remains functional in the current software ecosystem.",
      },
      {
        condition: "OLED screen damage (single issue)",
        recommendation:
          "Usually worthwhile, but compare the repair cost against the device's current resale value. OLED replacement costs significantly more than LCD on the standard iPhone 11. If the rest of the device is in good condition and battery health is acceptable, screen-only repair still delivers reasonable value.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Trading in and upgrading is usually more practical. When OLED screen, back glass, and battery all need replacement, the combined cost — driven by the OLED panel — frequently approaches or exceeds the device's resale value. Trading in puts cash toward a device with longer remaining support.",
      },
      {
        condition: "Data-critical device (even if damaged)",
        recommendation:
          "Prioritize data recovery first, then decide. If the device contains irreplaceable photos, contacts, or documents, extract data before making a repair-or-replace decision. We offer motherboard-level recovery for devices that won't power on.",
      },
    ],
    disclaimer:
      "Costs, values, and repair outcomes vary based on device condition, parts availability, and market demand. Information reflects conditions as of April 2026.",
  },

  // ── Comparisons ──
  comparisons: [
    { label: "iPhone 11 Pro vs iPhone 11 Pro Max", slug: "iphone-11-pro-vs-iphone-11-pro-max", href: "/devices/iphone-11-pro-max" },
    { label: "iPhone 11 Pro vs iPhone 11", slug: "iphone-11-pro-vs-iphone-11", href: "/devices/iphone-11" },
    { label: "iPhone 11 Pro vs iPhone XS", slug: "iphone-11-pro-vs-iphone-xs", href: "/devices/iphone-xs" },
    { label: "iPhone 11 Pro vs iPhone 12 Pro", slug: "iphone-11-pro-vs-iphone-12-pro" },
  ],

  // ── Related Guides ──
  relatedGuides: {
    heading: "Related iPhone guides",
    links: [
      { label: "iPhone 11 support status", href: "/devices/iphone-11" },
      { label: "iPhone 11 Pro Max support status", href: "/devices/iphone-11-pro-max" },
      { label: "iPhone XS support status", href: "/devices/iphone-xs" },
      { label: "iPhone XS Max support status", href: "/devices/iphone-xs-max" },
      { label: "iPhone XR support status", href: "/devices/iphone-xr" },
      { label: "iPhone repair pricing", href: "/repair-pricing" },
      { label: "Sell or trade in your iPhone", href: "/trade-in" },
    ],
  },

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone 11 Pro",
  faqs: [
    {
      question: "Is the iPhone 11 Pro still supported in 2026?",
      answerHtml:
        "Yes, fully. The iPhone 11 Pro runs iOS 26.4.1 (released April 8, 2026) and continues to receive major iOS updates and security patches. Apple did classify the device as \"vintage\" in January 2026, but that's a repair-parts classification, not a software one — the device still gets current iOS.",
    },
    {
      question: "Will the iPhone 11 Pro get iOS 27?",
      answerHtml:
        "Probably not. Apple is expected to raise the minimum hardware requirement for iOS 27 to the A14 Bionic chip (iPhone 12 and newer), based on current reporting from Bloomberg's Mark Gurman and Apple's historical pattern. WWDC 2026 on June 8 will confirm. If iOS 27 drops the iPhone 11 Pro, the device will continue receiving iOS 26 security patches for approximately 3 more years — putting realistic software support through roughly 2028-2029.",
    },
    {
      question: "What does Apple's vintage status mean for my iPhone 11 Pro?",
      answerHtml:
        "Vintage is a service classification, not a software one. Your iPhone 11 Pro still runs current iOS and still gets updates. What changes: Apple Stores and Apple Authorized Service Providers will repair vintage devices only while parts remain available — Apple no longer manufactures parts on demand. The 11 Pro will move from vintage to \"obsolete\" around January 2028, at which point Apple stops all hardware service. Third-party repair shops like Mobile Tech Lab continue servicing devices past the obsolete date using aftermarket and salvaged parts — <a href='/repair-pricing'>our repair pricing page</a> has current costs.",
    },
    {
      question: "Is the iPhone 11 Pro worth fixing in 2026?",
      answerHtml:
        "Usually yes, especially for battery and screen repairs on a device in otherwise good condition. The 11 Pro still runs current iOS, has strong resale value, and has ample replacement parts available today. The vintage classification is worth keeping in mind: parts will be easier to source and more competitively priced in the next 12-24 months than they will be later. For motherboard-level faults or devices with multiple major component failures, the math usually favors trade-in and upgrade.",
    },
    {
      question: "Does the iPhone 11 Pro support Apple Intelligence?",
      answerHtml:
        "No. Apple Intelligence requires an A17 Pro chip or newer, and the iPhone 11 Pro has an A13 Bionic. You can install iOS 26, but the Apple Intelligence features (Genmoji, Image Playground, Visual Intelligence, upgraded Siri, live translation in calls) are not available on the 11 Pro. All other iOS 26 features — including the Liquid Glass interface and Messages improvements — work normally.",
    },
    {
      question: "Can I still use an iPhone 11 Pro in 2026?",
      answerHtml:
        "Yes. The iPhone 11 Pro is one of the best-aged iPhones on the market today — it still runs current iOS, has a triple-camera system that holds up well, a 5.8-inch OLED display, and IP68 water resistance. The main limitations are the lack of 5G, the lack of Apple Intelligence, and the vintage service status. For messaging, calls, email, web, navigation, banking, social media, streaming, and photography, it remains a capable daily driver.",
    },
    {
      question: "What is the resale value of an iPhone 11 Pro today?",
      answerHtml:
        "Trade-in values in 2026 for the iPhone 11 Pro range from roughly $100–$250 CAD depending on storage, condition, and battery health. It commands higher resale value than the XR/XS/XS Max generation because it still runs current iOS. That advantage narrows once iOS 27 drops in fall 2026 and the 11 Pro potentially loses major-version support. If you're considering trading in, doing so before the WWDC 2026 announcement captures the stronger valuation window. Get a current quote on <a href='/trade-in'>our trade-in page</a>.",
    },
  ],
};

export default iPhone11ProData;
