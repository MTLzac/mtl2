import type { DeviceHubData } from "@/components/device-hub/types";

const iPhone11Data: DeviceHubData = {
  // ── SEO ──
  metaTitle: "iPhone 11 in 2026: Still Runs iOS 26.4.1, Still Apple-Supported",
  metaDescription:
    "The iPhone 11 runs iOS 26.4.1 and still receives full Apple updates and repair service. Not yet on Apple's vintage list. Here's how long it'll last and whether to upgrade.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-11",
  slug: "iphone-11",

  // ── Hero ──
  deviceName: "iPhone 11",
  h1: "iPhone 11 in 2026: Still Fully Supported on iOS 26.4.1",
  statusBadge: {
    label: "Still receiving iOS 26 updates",
    variant: "supported",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone 11 front and back view",
  featuredSnippetHtml: `
    <p>The iPhone 11 runs iOS 26.4.1 — Apple's current iOS release as of April 2026 — and still receives the full Liquid Glass interface, system updates, and security patches. Unlike the <a href="/devices/iphone-xr">iPhone XR</a> (dropped from iOS 26) and the <a href="/devices/iphone-11-pro">iPhone 11 Pro</a> (moved to Apple's vintage list in January 2026), the iPhone 11 is not yet on the vintage list — Apple sold it through late 2022, which pushes vintage eligibility to roughly mid-2027. That gives the iPhone 11 the longest realistic support runway of any pre-2020 iPhone still in wide use.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a></p>
  `,
  tldrHtml: `
    <p><strong>TL;DR:</strong> As of early 2026, the iPhone 11 still receives iOS 26 updates, has the lowest repair costs of any full-size iPhone thanks to LCD screen, and remains a fully functional daily driver for users who don't need 5G or MagSafe. It will likely miss iOS 27 when that arrives in fall 2026, then continues on iOS 26 security patches through roughly 2028–2029. A strong practical choice for users wanting to keep an older iPhone in use without the vintage-status repair concerns affecting the 11 Pro and 11 Pro Max.</p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2019 (September 20)" },
    { label: "Display", value: '6.1″ Liquid Retina HD LCD, 1792 × 828 px' },
    { label: "Processor", value: "A13 Bionic" },
    {
      label: "Current iOS Version",
      value: "iOS 26.4.1 (April 2026)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Still a reliable, budget-friendly daily driver in 2026 — LCD display, dual-camera system, and current iOS. A strong choice for users who want an aluminum-body iPhone with straightforward repair economics and don't need 5G, OLED, or MagSafe.",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 3,
      explanation:
        "The iPhone 11's 3,110 mAh battery offered strong endurance at launch, but by 2026 most original batteries have degraded noticeably — expect reduced screen-on time and more frequent charging. A battery replacement fully restores daily endurance and is the most common repair we perform on this model.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 5,
      explanation:
        "The iPhone 11 uses an LCD display, which is significantly cheaper to replace than the OLED panels found in the XS, XS Max, and Pro models. This makes the iPhone 11 one of the most affordable iPhones to repair across all common failure types — screen, battery, and charging port.",
    },
    {
      label: "Parts Availability",
      score: 5,
      explanation:
        "The iPhone 11 has abundant parts availability. Because it was sold by Apple until late 2022 and has not yet been moved to Apple's vintage list, replacement screens, batteries, and charging assemblies are widely available from both Apple and third-party suppliers. The LCD display also means replacement costs are significantly lower than OLED-equipped models like the <a href='/devices/iphone-11-pro'>iPhone 11 Pro</a>.",
    },
    {
      label: "iOS Support Lifespan",
      score: 4,
      explanation:
        "The iPhone 11 runs iOS 26.4.1 and continues to receive major iOS updates. iOS 27 (fall 2026) support is not yet confirmed but is widely expected to drop the iPhone 11 series. After that, security patches typically continue for about 3 more years — putting realistic software support through roughly 2028–2029.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Summary:</strong> The iPhone 11 is arguably the best-value iPhone to repair in 2026. Its LCD screen keeps replacement costs well below the OLED-equipped models like the iPhone 11 Pro, parts are abundant, and it still receives iOS updates. For users who don't need 5G or MagSafe, repairing an iPhone 11 almost always makes more financial sense than upgrading — unless multiple major repairs are needed at once.
  `,

  // ── Quick Facts ──
  quickFacts: {
    heading: "Quick Facts — iPhone 11 in April 2026",
    items: [
      { label: "Latest iOS version", value: "iOS 26.4.1 (April 8, 2026)" },
      { label: "Runs iOS 26 fully", value: "Yes (including Liquid Glass UI)" },
      { label: "Supports Apple Intelligence", value: "No (requires A17 Pro or newer)" },
      { label: "Expected iOS 27 support", value: "Unlikely (Apple expected to raise minimum to A14 / iPhone 12)" },
      { label: "Expected end of security updates", value: "Approximately 2028–2029" },
      { label: "Apple vintage status", value: "No (not yet; expected to qualify ~mid-2027)" },
      { label: "Expected Apple obsolete date", value: "Approximately 2029" },
      { label: "Release date", value: "September 20, 2019" },
      { label: "Device age", value: "6 years, 7 months (as of April 2026)" },
      { label: "Our recommendation", value: "Strong keeper for budget-conscious users. Full Apple repair support still available. Watch WWDC 2026 (June 8) for iOS 27 compatibility announcement before major hardware decisions." },
    ],
    footnote: "This page is updated when Apple releases new iOS versions and updates its vintage/obsolete status for the iPhone 11. Last verified: April 24, 2026.",
  },

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone 11 iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone 11 shipped with iOS 13 in September 2019 and has received every major iOS update since — including iOS 26, which launched in September 2025 with Apple's Liquid Glass UI redesign. As of April 24, 2026, the iPhone 11 runs iOS 26.4.1, released April 8, 2026. The A13 Bionic chip meets the minimum hardware requirements for the current major iOS version. Based on current reporting from Bloomberg and Apple's historical cadence, iOS 27 (expected to launch fall 2026) is likely to raise the minimum hardware requirement to A14 Bionic — which would drop the iPhone 11 series. Apple will confirm iOS 27 compatibility at its WWDC 2026 keynote on June 8, 2026. If the iPhone 11 is dropped from iOS 27, Apple typically continues shipping security patches on the previous major iOS branch for approximately 3 years, putting realistic security support through approximately 2028–2029.</p>
    `,
    whatVersion: {
      heading: "Can the iPhone 11 get iOS 26?",
      contentHtml: `
        <p>Yes. The iPhone 11 fully supports iOS 26 — including the Liquid Glass interface, Messages improvements, Phone app changes, and all core iOS 26 features. The one major exception is Apple Intelligence, Apple's AI feature suite (Genmoji, Image Playground, Visual Intelligence, upgraded Siri). Apple Intelligence requires an A17 Pro chip or newer, so the iPhone 11 does not qualify. To install the latest version: Settings → General → Software Update.</p>
        <p>It's important to understand the difference between feature updates and security updates:</p>
        <ul>
          <li>Placeholder list item to preserve the section structure.</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone 11 Eventually Stops Getting iOS Updates?",
    contentHtml: `
      <p>When the iPhone 11 eventually drops off Apple's major iOS support list — most likely with iOS 27 in fall 2026 — the transition will follow the same pattern as older iPhones. The <a href="/devices/iphone-xr">iPhone XR</a>, <a href="/devices/iphone-xs">XS</a>, and <a href="/devices/iphone-xs-max">XS Max</a> hit their major-update cutoff in September 2025. Core device functions (calls, messages, browsing, most common apps) continue working for years after that point. Security patches typically continue for about 3 more years. App compatibility gradually declines as developers raise their minimum supported iOS. Here's what that progression typically looks like:</p>
    `,
    appCompatibility: {
      heading: "App Compatibility for Canadian Users",
      contentHtml: `
        <p>Because the iPhone 11 currently runs a supported version of iOS, Canadian users have <strong>full app compatibility</strong> today:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, BMO, and all major Canadian banks fully support current iOS versions.</li>
          <li><strong>Transit and payment apps</strong> — Presto, Apple Pay, and city transit apps work without limitation.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services are fully compatible.</li>
          <li><strong>Two-factor authentication</strong> — All major authenticator apps are supported.</li>
        </ul>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone 11 Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience repairing and reselling iPhones in Canada, the iPhone 11 is one of the most repair-friendly models currently in circulation. The LCD display is significantly cheaper to replace than OLED panels, parts are abundant, and the device still receives software updates. For most single-issue repairs, the answer is almost always yes.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone 11 Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement</strong> — The most common and cost-effective repair. Restores daily battery life and removes performance throttling. Well worth the investment given the device's remaining software support.</li>
          <li><strong>Screen replacement</strong> — LCD panel replacement on the iPhone 11 is one of the most affordable screen repairs across all iPhone models. Quality aftermarket and OEM-equivalent panels are widely available.</li>
          <li><strong>Charging port or camera repairs</strong> — Individual component repairs remain cost-effective and extend the device's useful life significantly.</li>
          <li><strong>Data recovery</strong> — For devices containing irreplaceable data, repair is worthwhile regardless of the device's market value.</li>
        </ul>
        <p>For a full list of services and what to expect, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When It's Often Better to Sell or Upgrade Instead",
      contentHtml: `
        <ul>
          <li><strong>Multiple simultaneous repairs</strong> — Even though individual repairs are affordable, when screen, battery, and back glass all need attention, the combined cost can approach the price of a newer refurbished device with years more support.</li>
          <li><strong>Back glass damage requiring frame replacement</strong> — The iPhone 11 uses an aluminium frame with back glass. While repairable, back glass repair adds meaningful cost compared to screen or battery alone.</li>
          <li><strong>Desire for 5G or MagSafe</strong> — The iPhone 11 does not support 5G networks or MagSafe accessories. If these are important, upgrading to an iPhone 12 or later is the practical path.</li>
        </ul>
        <p>If upgrading makes more sense for your situation, you can check current values on our <a href="/trade-in">trade-in page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone 11 Damage and What It Means",
    frontGlass: {
      heading: "LCD Display Damage",
      contentHtml: `
        <p>The iPhone 11 uses a 6.1-inch Liquid Retina HD LCD display. Unlike the OLED panels in the <a href="/devices/iphone-xs">XS</a> and Pro models, LCD repairs are significantly more affordable — this is one of the key factors that makes the iPhone 11 so economical to repair.</p>
        <p>Common LCD damage includes cracked glass over the panel, touch responsiveness issues after drops, and display discolouration. In most cases, the entire front assembly is replaced as one unit, and quality aftermarket panels deliver results that most users find indistinguishable from the original.</p>
        <p>Because of the lower repair cost, screen replacement on the iPhone 11 almost always makes financial sense — even on devices with other minor wear.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>The iPhone 11 features an aluminium frame with back glass. Like other iPhones from this era, the back glass is adhered to the frame and requires either a full housing swap or careful glass-only removal.</p>
        <p>Back glass repair is viable and something we perform regularly. However, it adds meaningful cost compared to a screen or battery replacement alone. For devices with back glass damage only, repair is typically worthwhile. When combined with major front display damage, the economics start to shift toward <a href="/trade-in">trading in</a> and upgrading.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone 11",
    contentHtml: `
      <p>Should you upgrade from your iPhone 11 in 2026? The iPhone 11 is one of the best-aged iPhones on the market. It still runs current iOS, has abundant parts availability, is not yet on Apple's vintage list, and costs less to repair than any other full-size iPhone in its generation. Upgrade if: your battery has dropped below 80% health and you're considering a battery replacement anyway, you need 5G for your carrier, you want Apple Intelligence features, or you need OLED / MagSafe. Keep it if: the device is in good condition, you don't care about Apple Intelligence, and the budget-friendly repair math works for your situation. Trade-in values in 2026 for the iPhone 11 are modest but stable — the device still runs current iOS, which supports resale value. That advantage will narrow once iOS 27 drops in fall 2026 and the iPhone 11 potentially loses major-version support. If you're leaning toward upgrading, check <a href="/trade-in">your current trade-in value</a> before the WWDC 2026 announcement. Common upgrade paths include:</p>
      <ul>
        <li>iPhone 12 — First iPhone with 5G and MagSafe. The most natural upgrade for iPhone 11 users who want modern connectivity.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong value option for users buying used.</li>
        <li>iPhone 13 or 14 — For users who want a longer support runway with improved cameras and battery life.</li>
      </ul>
      <p>For a full quote on your specific iPhone 11 configuration, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone 11?",
    contentHtml: `
      <p>The iPhone 11's combination of low repair costs and active software support makes it one of the easiest repair-vs-replace decisions in the current iPhone lineup. Here's a practical framework based on our experience:</p>
    `,
    scenarios: [
      {
        condition: "Battery wear or single-issue damage",
        recommendation:
          "Repair is almost always the right call. LCD screen repairs and battery replacements are both affordable on this model. The device still receives iOS updates, so you're extending a phone that remains fully functional in the current software ecosystem.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Repair may still make sense, but compare total cost against alternatives. Even with the iPhone 11's low individual repair costs, combined screen + battery + back glass repairs can approach the cost of a newer refurbished device. Consider trading in if the total exceeds 60% of a comparable replacement.",
      },
      {
        condition: "Need for 5G, MagSafe, or better cameras",
        recommendation:
          "Upgrading is the practical path forward. The iPhone 11 lacks 5G, MagSafe, and the computational photography improvements in later models. Trading in while it still holds decent value and moving to an iPhone 12 or later addresses all of these needs.",
      },
      {
        condition: "Data-critical device (even if damaged)",
        recommendation:
          "Prioritize data recovery first, then decide on repair vs. replacement. For devices containing irreplaceable photos, contacts, or documents, data extraction should come before any repair-or-replace decision. We offer motherboard-level recovery for devices that won't power on.",
      },
    ],
    disclaimer:
      "Costs, values, and repair outcomes vary based on device condition, parts availability, and market demand. Information reflects conditions as of April 2026.",
  },

  // ── Comparisons ──
  comparisons: [
    { label: "iPhone 11 vs iPhone 11 Pro", slug: "iphone-11-vs-iphone-11-pro", href: "/devices/iphone-11-pro" },
    { label: "iPhone 11 vs iPhone XR", slug: "iphone-11-vs-iphone-xr", href: "/devices/iphone-xr" },
    { label: "iPhone 11 vs iPhone 11 Pro Max", slug: "iphone-11-vs-iphone-11-pro-max", href: "/devices/iphone-11-pro-max" },
    { label: "iPhone 11 vs iPhone 12", slug: "iphone-11-vs-iphone-12" },
  ],

  // ── Related Guides ──
  relatedGuides: {
    heading: "Related iPhone guides",
    links: [
      { label: "iPhone 11 Pro support status", href: "/devices/iphone-11-pro" },
      { label: "iPhone 11 Pro Max support status", href: "/devices/iphone-11-pro-max" },
      { label: "iPhone XR support status", href: "/devices/iphone-xr" },
      { label: "iPhone XS support status", href: "/devices/iphone-xs" },
      { label: "iPhone XS Max support status", href: "/devices/iphone-xs-max" },
      { label: "iPhone repair pricing", href: "/repair-pricing" },
      { label: "Sell or trade in your iPhone", href: "/trade-in" },
    ],
  },

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone 11",
  faqs: [
    {
      question: "Is the iPhone 11 still supported in 2026?",
      answerHtml:
        "Yes, fully. The iPhone 11 runs iOS 26.4.1 (released April 8, 2026) and continues to receive major iOS updates and security patches. The device is not yet on Apple's vintage list — it's still eligible for full repair service at Apple Stores and Apple Authorized Service Providers.",
    },
    {
      question: "Will the iPhone 11 get iOS 27?",
      answerHtml:
        "Probably not. Apple is expected to raise the minimum hardware requirement for iOS 27 to the A14 Bionic chip (iPhone 12 and newer), based on current reporting from Bloomberg's Mark Gurman and Apple's historical pattern. WWDC 2026 on June 8 will confirm. If iOS 27 drops the iPhone 11, the device will continue receiving iOS 26 security patches for approximately 3 more years — putting realistic software support through 2028–2029.",
    },
    {
      question: "Is the iPhone 11 worth fixing in 2026?",
      answerHtml:
        "Usually yes — the iPhone 11 has the best repair economics of any full-size iPhone from its generation. Battery and screen replacements are significantly cheaper than on the 11 Pro or 11 Pro Max because the display is LCD rather than OLED. Parts are abundant and the device isn't on Apple's vintage list yet, so there's no urgency around parts availability. The math strongly favors repair over replacement for most common issues. See our <a href='/repair-pricing'>iPhone repair pricing</a> for current costs.",
    },
    {
      question: "Can I still use an iPhone 11 in 2026?",
      answerHtml:
        "Yes. The iPhone 11 still runs current iOS, has a capable dual-camera system with Night mode, a 6.1-inch Liquid Retina display, IP68 water resistance, and the same A13 Bionic chip used in the 11 Pro. The main limitations are the lack of 5G, the lack of Apple Intelligence, and the LCD (not OLED) display. For messaging, calls, email, web, navigation, banking, social media, and photography, it remains a reliable daily driver.",
    },
    {
      question: "What is the resale value of an iPhone 11 today?",
      answerHtml:
        "Trade-in values in 2026 for the iPhone 11 range from roughly $70–$180 CAD depending on storage, condition, and battery health. The iPhone 11 holds value reasonably well because it still runs current iOS. That advantage narrows once iOS 27 drops in fall 2026 and the iPhone 11 potentially loses major-version support. For a current quote on your specific device, use our <a href='/trade-in'>trade-in page</a>.",
    },
    {
      question: "Does the iPhone 11 support 5G?",
      answerHtml:
        "No. 5G support was first introduced with the iPhone 12 in October 2020. The iPhone 11 supports 4G LTE but not 5G. For most users on typical 4G LTE plans this has no practical impact — speeds remain fast enough for streaming, video calls, and browsing. If 5G is important for your carrier plan or coverage area, the iPhone 12 or newer would be the minimum recommended upgrade.",
    },
    {
      question: "What's the difference between the iPhone 11 and the iPhone 11 Pro?",
      answerHtml:
        "Same A13 Bionic chip, different tier. The iPhone 11 has a 6.1-inch LCD display, a dual-camera system (wide + ultrawide), an aluminum frame, and IP68 to 2 meters. The iPhone 11 Pro has a 5.8-inch OLED display, a triple-camera system (wide + ultrawide + telephoto), a stainless steel frame, and IP68 to 4 meters. Both run iOS 26 as their current OS. The iPhone 11 Pro was also added to Apple's vintage list in January 2026, while the iPhone 11 is not yet on that list. See our <a href='/devices/iphone-11-pro'>iPhone 11 Pro support status page</a> for details on that model.",
    },
  ],
};

export default iPhone11Data;
