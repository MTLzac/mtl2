import type { DeviceHubData } from "@/components/device-hub/types";

const iPhone11Data: DeviceHubData = {
  // ── SEO ──
  metaTitle:
    "Is the iPhone 11 Still Supported in 2026? Repair Viability & Upgrade Guide",
  metaDescription:
    "A factual guide to the iPhone 11 in 2026 — covering iOS 26 support, LCD repair costs, battery life, app compatibility, and trade-in or upgrade options for Canadian users.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-11",
  slug: "iphone-11",

  // ── Hero ──
  deviceName: "iPhone 11",
  h1: "Is the iPhone 11 Still Supported in 2026?",
  statusBadge: {
    label: "Still receiving iOS updates",
    variant: "supported",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone 11 front and back view",
  featuredSnippetHtml: `
    <p>As of 2026, the iPhone 11 supports iOS 26 and continues to receive major software updates from Apple. Released in 2019 as Apple's mainstream flagship, the iPhone 11 pairs an LCD Liquid Retina display with the A13 Bionic chip. Its combination of low repair costs, strong parts availability, and ongoing software support makes it one of the most economical iPhones to keep running in 2026.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a></p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2019" },
    { label: "Display", value: '6.1″ Liquid Retina LCD, 828 × 1792 px' },
    { label: "Processor", value: "A13 Bionic" },
    {
      label: "Latest Major iOS",
      value: "iOS 26 (currently supported)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Reliable daily driver, budget-friendly option for users who don't need 5G or the latest camera features",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 3,
      explanation:
        "The iPhone 11 ships with a 3,110 mAh battery that offered strong battery life at launch. By 2026, most original batteries show noticeable degradation. Battery replacement fully restores daily endurance and is the most common repair we perform on this model.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 5,
      explanation:
        "The iPhone 11 uses an LCD display, which is significantly cheaper to replace than the OLED panels found in the XS, XS Max, and Pro models. This makes the iPhone 11 one of the most affordable iPhones to repair across all common failure types — screen, battery, and charging port.",
    },
    {
      label: "Parts Availability",
      score: 4,
      explanation:
        "The iPhone 11 was one of Apple's best-selling models globally. Replacement parts — including LCD screens, batteries, cameras, and charging assemblies — remain widely available from multiple suppliers. OEM-quality and aftermarket options are both readily accessible.",
    },
    {
      label: "iOS Support Lifespan",
      score: 3,
      explanation:
        "The iPhone 11 currently supports iOS 26, making it one of the oldest iPhones still receiving major updates. Based on Apple's historical support patterns, the A13 Bionic is likely approaching the end of its major update lifecycle within the next one to two years.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Quick takeaway:</strong> The iPhone 11 is arguably the best-value iPhone to repair in 2026. Its LCD screen keeps replacement costs low, parts are abundant, and it still receives iOS 26. For users who don't need 5G or the latest camera features, repairing an iPhone 11 almost always makes more financial sense than upgrading — unless multiple major repairs are needed simultaneously.
  `,

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone 11 iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone 11 shipped with iOS 13 and continues to receive major updates, including iOS 26. This places it among the oldest iPhones still in Apple's active software support window.</p>
      <p>The A13 Bionic chip provides sufficient performance for current iOS features, though some processor-intensive features introduced in newer iOS versions may be unavailable or limited on this hardware.</p>
      <p>Based on Apple's historical support patterns — typically six to seven years of major iOS updates per device — the iPhone 11 is likely in its final one to two years of receiving major iOS releases. This doesn't mean it will stop working, but users should expect the transition to security-only updates in the near future.</p>
    `,
    whatVersion: {
      heading: "What iOS Version Does the iPhone 11 Support?",
      contentHtml: `
        <p>The iPhone 11 currently supports <strong>iOS 26</strong>, the latest major release from Apple. This gives users access to current app frameworks, security updates, and new features.</p>
        <p>Key advantages of remaining on a supported iOS version:</p>
        <ul>
          <li><strong>Full app compatibility</strong> — All current App Store apps work without restriction.</li>
          <li><strong>Regular security patches</strong> — Apple actively patches vulnerabilities for supported devices.</li>
          <li><strong>Banking and payment app support</strong> — Canadian banking apps (TD, RBC, Scotiabank, BMO) and payment services fully support iOS 26.</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone 11 Eventually Stops Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone 11 still receives iOS updates as of 2026, but based on Apple's patterns, it's approaching the end of its major update lifecycle. When updates do stop, the device doesn't stop working — calls, messaging, browsing, and installed apps continue to function.</p>
      <p>The main impact is <strong>gradual app compatibility loss</strong>. Developers build against the latest iOS SDKs, and older versions slowly lose support. This transition typically takes one to two years after the last major update before users notice meaningful gaps.</p>
      <p>For comparison, the <a href="/devices/iphone-xr">iPhone XR</a> and <a href="/devices/iphone-xs">iPhone XS</a> — which stopped receiving major updates earlier — are now beginning to see app compatibility limitations. The iPhone 11 has more runway before reaching that point.</p>
    `,
    appCompatibility: {
      heading: "App Compatibility for Canadian Users",
      contentHtml: `
        <p>Because the iPhone 11 currently supports iOS 26, Canadian users have <strong>full app compatibility</strong> today:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, BMO, and all major Canadian banks fully support iOS 26.</li>
          <li><strong>Transit and payment apps</strong> — Presto, Apple Pay, and city transit apps work without limitation.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services are fully compatible.</li>
          <li><strong>Two-factor authentication</strong> — All major authenticator apps are supported.</li>
        </ul>
        <p>This is a significant advantage over the XR and XS generation, where some of these apps are beginning to show compatibility warnings or reduced functionality.</p>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone 11 Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience, the iPhone 11 is one of the most repair-friendly iPhones currently in circulation. The LCD display is significantly cheaper to replace than OLED panels, parts are abundant, and the device still receives software updates. For most single-issue repairs, the answer is almost always yes.</p>
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
        <p>For a full list of iPhone repair services we offer, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone 11 Damage and What It Means",
    frontGlass: {
      heading: "LCD Display Damage",
      contentHtml: `
        <p>The iPhone 11 uses a 6.1-inch Liquid Retina LCD display. Unlike the OLED panels in the XS, XS Max, and Pro models, LCD repairs are significantly more affordable. This is one of the key factors that makes the iPhone 11 so economical to repair.</p>
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
      <p>The iPhone 11's trade-in value in 2026 is moderate and depends heavily on condition. Because the device still receives iOS updates, it commands better trade-in values than the XR or XS generation.</p>
      <p>Given its low repair costs and continued software support, many users find that repairing an iPhone 11 and continuing to use it is more economical than trading in and upgrading. The decision typically comes down to whether the user needs features the iPhone 11 lacks (5G, MagSafe, better cameras).</p>
      <p>Common upgrade paths from the iPhone 11 include:</p>
      <ul>
        <li>iPhone 12 — First iPhone with 5G and MagSafe. The most natural upgrade for iPhone 11 users who want modern connectivity.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong value option for users buying used.</li>
        <li>iPhone 13 or 14 — For users who want a longer support runway with improved cameras and battery life.</li>
      </ul>
      <p>For current trade-in values based on your device's specific condition, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone 11?",
    contentHtml: `
      <p>The iPhone 11's combination of low repair costs and active software support makes it one of the easiest repair-vs-replace decisions in the current iPhone lineup. Here's a practical framework:</p>
    `,
    scenarios: [
      {
        condition: "Battery wear or single-issue damage",
        recommendation:
          "Repair is almost always the right call. With LCD screen repairs and battery replacements both affordable, single-issue fixes on the iPhone 11 deliver excellent value. The device still receives iOS 26, so you're extending a phone that remains fully functional in the current software ecosystem.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Repair may still make sense, but do the math. Even with the iPhone 11's low individual repair costs, combined screen + battery + back glass repairs can approach the cost of a newer refurbished device. Consider trading in and upgrading if the total exceeds 60% of a comparable replacement.",
      },
      {
        condition: "Need for 5G, MagSafe, or better cameras",
        recommendation:
          "If these features are important to you, upgrading is the path forward. The iPhone 11 lacks 5G, MagSafe, and the computational photography improvements in later models. Trading in your iPhone 11 while it still holds decent value and upgrading to an iPhone 12 or later addresses all of these.",
      },
      {
        condition: "Data-critical device (even if damaged)",
        recommendation:
          "Data recovery first, then decide. If the device contains irreplaceable photos, contacts, or documents, prioritize data extraction before making a repair-or-replace decision. We offer motherboard-level recovery for devices that won't power on.",
      },
    ],
    disclaimer:
      "Costs, values, and repair outcomes vary based on device condition, parts availability, and market demand.",
  },

  // ── Comparisons ──
  comparisons: [
    { label: "iPhone 11 vs iPhone XR", slug: "iphone-11-vs-iphone-xr" },
    { label: "iPhone 11 vs iPhone 11 Pro", slug: "iphone-11-vs-iphone-11-pro" },
    { label: "iPhone 11 vs iPhone 12", slug: "iphone-11-vs-iphone-12" },
    { label: "iPhone 11 vs iPhone SE (2020)", slug: "iphone-11-vs-iphone-se-2020" },
  ],

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone 11",
  faqs: [
    {
      question: "How long will the iPhone 11 be supported?",
      answerHtml:
        "The iPhone 11 currently supports iOS 26 and remains in Apple's active software support window. Based on Apple's historical patterns of six to seven years of major updates per device, the iPhone 11 is likely in its final one to two years of receiving major iOS releases. After that, it will transition to security-only updates. Source: <a href='https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios' target='_blank' rel='noopener noreferrer'>Apple</a>.",
    },
    {
      question: "Is the iPhone 11 worth fixing?",
      answerHtml:
        "In most cases, yes. The iPhone 11 uses an LCD display that is significantly cheaper to replace than OLED panels. Combined with abundant parts availability and continued iOS 26 support, single-issue repairs on the iPhone 11 are almost always cost-effective. Multiple simultaneous repairs may shift the equation toward upgrading.",
    },
    {
      question: "Can I still use an iPhone 11 in 2026?",
      answerHtml:
        "Absolutely. The iPhone 11 runs iOS 26, has full app compatibility, and handles everyday tasks — calls, messaging, browsing, social media, banking — without issue. The main limitations compared to newer devices are the lack of 5G, MagSafe, and the improvements in camera quality that later models introduced.",
    },
    {
      question: "What is the resale value of an iPhone 11?",
      answerHtml:
        "The iPhone 11 generally holds better trade-in value than the XR or XS generation because it still receives iOS updates. Resale value depends on condition, battery health, and storage capacity. For a current estimate based on your specific device, see our <a href='/trade-in'>trade-in page</a>.",
    },
    {
      question: "Does the iPhone 11 support 5G?",
      answerHtml:
        "No. The iPhone 11 uses a 4G LTE modem. The iPhone 12 was the first iPhone to support 5G networks. For most Canadian users, 4G LTE remains sufficient for daily use, but users in areas with strong 5G coverage may benefit from upgrading.",
    },
  ],
};

export default iPhone11Data;
