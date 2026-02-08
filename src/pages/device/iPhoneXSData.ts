import type { DeviceHubData } from "@/components/device-hub/types";

const iPhoneXSData: DeviceHubData = {
  // ── SEO ──
  metaTitle:
    "Is the iPhone XS Still Supported in 2026? Repair Viability, iOS Support & Upgrade Options",
  metaDescription:
    "A factual guide to the iPhone XS in 2026 — covering iOS support status, OLED repair costs, battery life, app compatibility, and trade-in or upgrade options for Canadian users.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-xs",
  slug: "iphone-xs",

  // ── Hero ──
  deviceName: "iPhone XS",
  h1: "Is the iPhone XS Still Supported in 2026?",
  statusBadge: {
    label: "No longer receiving major iOS updates",
    variant: "deprecated",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone XS front and back view",
  featuredSnippetHtml: `
    <p>As of 2026, the iPhone XS does not support iOS 26 and will not receive future major iOS feature updates. The XS was Apple's flagship in 2018, featuring the first OLED Super Retina display and the A12 Bionic chip. While it remains capable for everyday tasks, its smaller battery capacity and higher OLED screen repair costs affect its long-term repair viability.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a> · <a href="https://www.macrumors.com/guide/ios-18-compatible-iphone-models/" target="_blank" rel="noopener noreferrer">Macworld iOS 18 device list</a></p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2018" },
    { label: "Display", value: '5.8″ Super Retina OLED, 1125 × 2436 px' },
    { label: "Processor", value: "A12 Bionic" },
    {
      label: "Latest Major iOS",
      value: "iOS 18 (does not support iOS 26)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Compact daily driver, secondary phone, or backup device for users who prefer a smaller form factor",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 2,
      explanation:
        "The iPhone XS has a 2,658 mAh battery — small by modern standards. Original batteries from this generation commonly show significant degradation, making battery replacement one of the most frequent repairs we perform on this model.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 2,
      explanation:
        "OLED screen replacements cost significantly more than the LCD panels used in the iPhone XR. Combined with the laser-welded back glass, multi-issue repairs on the XS can quickly approach the device's market value.",
    },
    {
      label: "Parts Availability",
      score: 3,
      explanation:
        "Quality replacement parts for the iPhone XS are still available, though supply is beginning to thin for OEM-equivalent OLED panels. Aftermarket options remain widely available and deliver good results for most users.",
    },
    {
      label: "iOS Support Lifespan",
      score: 1,
      explanation:
        "The iPhone XS received its last major iOS update with iOS 18. It will not receive iOS 19 or later. Apple may issue limited security patches, but the device is at end-of-life for software support.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Quick takeaway:</strong> The iPhone XS still functions reliably in 2026 for basic use, but battery wear, OLED screen repair costs, and limited remaining iOS support often make upgrading a better long-term value if multiple repairs are required.
  `,

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone XS iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone XS shipped with iOS 12 and received major updates through iOS 18. As of 2026, it does not support iOS 26 and will not receive future major feature updates from Apple.</p>
      <p>Apple has historically provided limited security patches to devices one or two generations behind the current release. However, these patches are not guaranteed and typically address only critical vulnerabilities — they do not include new features or app framework updates.</p>
      <p>The XS shares the same A12 Bionic chip as the <a href="/devices/iphone-xr">iPhone XR</a>, which means both devices reached their iOS support ceiling at the same time.</p>
    `,
    whatVersion: {
      heading: "What iOS Version Does the iPhone XS Support?",
      contentHtml: `
        <p>The iPhone XS supports up to <strong>iOS 18</strong>. This was the last major iOS version available for the A12 Bionic chip. The device did not receive iOS 19, iOS 20, or any subsequent releases.</p>
        <p>It's important to understand the difference between <strong>feature updates</strong> and <strong>security updates</strong>:</p>
        <ul>
          <li><strong>Feature updates</strong> (e.g., iOS 18 → iOS 19) bring new capabilities, app frameworks, and UI changes. The iPhone XS no longer receives these.</li>
          <li><strong>Security updates</strong> are smaller patches that fix vulnerabilities. Apple may still issue these for iOS 18, but on a limited and unpredictable schedule.</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone XS Stops Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone XS does not stop working when it loses iOS support. Calls, messaging, browsing, and most currently installed apps continue to function normally.</p>
      <p>What changes over time is <strong>app compatibility</strong>. App developers build against the latest iOS SDKs, and older versions gradually lose support. This process is gradual — not immediate — but accelerates as the device falls further behind the current iOS release.</p>
      <p>Security is the other consideration. Without regular patches, known vulnerabilities remain unaddressed. For most users, this doesn't create an immediate crisis, but it does increase risk over time — particularly for devices used for banking, payments, or storing sensitive information.</p>
    `,
    appCompatibility: {
      heading: "App Compatibility Issues Canadian Users May Notice",
      contentHtml: `
        <p>From our experience, these are the categories of apps where Canadian users tend to notice compatibility issues first:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, and BMO typically require iOS versions within two major releases of the current version. Users on iOS 18 may find these apps stop updating or display compatibility warnings.</li>
          <li><strong>Transit and payment apps</strong> — Presto, city transit apps, and mobile payment platforms often follow similar requirements.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services may require newer iOS versions for security compliance.</li>
          <li><strong>Two-factor authentication apps</strong> — Apps like Microsoft Authenticator and Google Authenticator will eventually require newer OS versions.</li>
        </ul>
        <p>This doesn't mean these apps stop working overnight. The transition is gradual, and many apps continue to function on older iOS versions even after they stop receiving updates for them.</p>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone XS Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience repairing iPhones daily, whether an iPhone XS is worth fixing depends on the type and extent of the damage, with one important caveat: the XS uses an OLED display, which costs more to replace than the LCD panel in the <a href="/devices/iphone-xr">iPhone XR</a>. This higher screen repair cost shifts the repair-vs-replace equation more quickly toward replacement when multiple issues are present.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone XS Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement only</strong> — The most cost-effective repair for the XS. Restores daily battery life and removes performance throttling. Typically completed in under an hour.</li>
          <li><strong>Single-issue repairs</strong> — If only the screen or only the charging port needs attention and the rest of the device is in good condition, repair typically makes financial sense.</li>
          <li><strong>Data recovery situations</strong> — If the device contains irreplaceable data (photos, contacts, documents), repair may be necessary regardless of the device's market value. We offer motherboard-level data recovery for situations where the device won't power on.</li>
        </ul>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When It's Often Better to Sell or Upgrade Instead",
      contentHtml: `
        <ul>
          <li><strong>OLED screen + back glass damage</strong> — Combined OLED panel and back glass replacement on the XS typically exceeds the device's current market value.</li>
          <li><strong>Face ID failure after drops</strong> — The TrueDepth camera system on the XS is delicate. If Face ID stops working after a drop, the repair often involves components that are expensive or difficult to source for this generation.</li>
          <li><strong>Multiple major repairs required</strong> — Screen, battery, and charging port failures together make repair uneconomical in most cases.</li>
          <li><strong>Repair cost approaches device value</strong> — As a general guideline, if the total repair estimate exceeds 50–60% of what a comparable replacement costs, upgrading is usually the better investment. The threshold is lower for the XS than the XR due to higher OLED repair costs.</li>
        </ul>
        <p>For a full list of iPhone repair services we offer, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone XS Damage and What It Means",
    frontGlass: {
      heading: "OLED Display Damage",
      contentHtml: `
        <p>The iPhone XS uses a Super Retina OLED display — the same technology used in Apple's Pro lineup today. When the screen cracks, the entire OLED panel and digitizer assembly must be replaced as one unit. This makes screen repair on the XS more expensive than on LCD-equipped models like the iPhone XR or iPhone SE.</p>
        <p>OLED damage can also present as colour distortion, green lines, or dead pixels even without visible cracks, typically after drops. These symptoms indicate panel damage that requires full replacement.</p>
        <p>Aftermarket OLED panels are available at lower price points than OEM, though colour accuracy and brightness may differ slightly. From our experience, most users find aftermarket OLED replacements acceptable for daily use.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>Like the iPhone XR, the XS features back glass that is laser-welded to the stainless steel frame. The XS actually uses a stainless steel frame (versus the XR's aluminium), which makes the device more durable overall but doesn't change the back glass repair process.</p>
        <p>Back glass repair requires either a full housing swap or careful glass-only removal. The repair is viable and something we perform regularly, but it adds significant cost compared to a screen replacement alone.</p>
        <p>For devices with back glass damage only, repair is usually worthwhile. For devices with both OLED screen and back glass damage, the combined cost frequently exceeds the device's market value — making a <a href="/trade-in">trade-in</a> the more practical path forward.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone XS",
    contentHtml: `
      <p>The iPhone XS's trade-in value in 2026 is modest and heavily condition-dependent. The stainless steel frame gives the XS slightly better cosmetic durability than the aluminium XR, which can help preserve trade-in value — but battery health and screen condition remain the primary factors.</p>
      <p>If you're considering a trade-in, it's worth understanding the difference between <strong>cash trade-ins</strong> and <strong>store credit</strong>. Cash offers are typically lower but provide immediate liquidity. Store credit toward a replacement device is often higher but locks you into a specific retailer or carrier.</p>
      <p>Common upgrade paths from the iPhone XS include:</p>
      <ul>
        <li><a href="/devices/iphone-12">iPhone 12</a> — First iPhone with 5G, MagSafe, and a significantly longer iOS support window. A popular upgrade for XS users.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong mid-range value if buying used.</li>
        <li>Refurbished iPhone 13 or 14 — For users who want a longer support runway with modern camera capabilities.</li>
      </ul>
      <p>For current trade-in values based on your device's specific condition, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone XS?",
    contentHtml: `
      <p>Based on your situation, repairing, trading in, or upgrading may make sense. Here's a practical framework based on common scenarios we see:</p>
    `,
    scenarios: [
      {
        condition: "Light damage or battery-only issues",
        recommendation:
          "Repair is typically worthwhile. Battery replacement is the single most cost-effective way to extend the life of an iPhone XS. If the screen and body are intact, a new battery restores daily usability at a fraction of replacement cost.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Trade-in plus upgrade is usually the better value. When OLED screen replacement, back glass, and battery are all needed, the combined repair cost frequently exceeds what the device is worth. Trading in — even in damaged condition — puts cash toward a device with years of remaining support.",
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
  comparisons: [],

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone XS",
  faqs: [
    {
      question: "How long will the iPhone XS be supported?",
      answerHtml:
        "The iPhone XS received its last major iOS update with iOS 18. Apple may continue to issue limited security patches for iOS 18, but the device will not receive iOS 19 or later. App compatibility will gradually decline as developers target newer iOS versions. Source: <a href='https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios' target='_blank' rel='noopener noreferrer'>Apple</a>.",
    },
    {
      question: "Is the iPhone XS worth fixing?",
      answerHtml:
        "For single-issue repairs like a worn battery, repair is typically worthwhile. However, because the XS uses an OLED display, screen replacement costs more than on LCD models like the iPhone XR. For multiple simultaneous failures (screen + back glass + battery), the combined cost often exceeds the device's market value, making replacement a more practical option.",
    },
    {
      question: "Can I still use an iPhone XS in 2026?",
      answerHtml:
        "Yes. The iPhone XS remains functional for calls, messaging, browsing, email, and most social media in 2026. Where users may notice limitations is in newer app requirements and battery longevity. The compact 5.8-inch OLED display still delivers excellent image quality for media consumption. For many use cases, it remains a capable daily driver.",
    },
    {
      question: "What is the resale value of an iPhone XS?",
      answerHtml:
        "Resale value depends heavily on condition, battery health, storage capacity, and carrier lock status. The XS generally trades slightly below the iPhone XR despite being the higher-tier device, because OLED screen damage is more common and costlier to repair. For a current estimate based on your specific device, use a <a href='/trade-in'>condition-based valuation tool</a>.",
    },
  ],
};

export default iPhoneXSData;
