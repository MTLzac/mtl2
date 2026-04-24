import type { DeviceHubData } from "@/components/device-hub/types";

const iPhoneXSData: DeviceHubData = {
  // ── SEO ──
  metaTitle:
    "iPhone XS in 2026: Runs iOS 18.7.8, Supported With Limitations",
  metaDescription:
    "The iPhone XS runs iOS 18.7.8 — its final major version. Apple still ships security updates, but no iOS 26. See what still works, how long it'll last, and when to upgrade.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-xs",
  slug: "iphone-xs",

  // ── Hero ──
  deviceName: "iPhone XS",
  h1: "iPhone XS in 2026: Still Supported, With Limitations",
  statusBadge: {
    label: "No longer receiving major iOS updates",
    variant: "deprecated",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone XS front and back view",
  featuredSnippetHtml: `
    <p>The iPhone XS runs iOS 18.7.8 — released April 22, 2026 — which is the final major iOS version it will receive. Apple continues to ship security updates (the most recent was 2 days ago), but the XS won't get iOS 26, Apple Intelligence, or future feature updates. For most everyday use in 2026, it still works — here's what to expect.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a></p>
  `,
  tldrHtml: `
    <p><strong>TL;DR:</strong> The iPhone XS is no longer receiving major iOS updates, but it still gets Apple security patches. Its OLED display and stainless steel frame are premium components — repair is usually worthwhile for a device in good cosmetic condition. Upgrade is typically more practical once the device's limited remaining software runway and any physical damage overlap.</p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2018 (September 21)" },
    { label: "Display", value: '5.8″ Super Retina OLED, 2436 × 1125 px' },
    { label: "Processor", value: "A12 Bionic" },
    {
      label: "Current iOS Version",
      value: "iOS 18.7.8 (April 2026)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Compact daily driver for users who prefer a smaller OLED phone and don't require the latest iOS features or 5G connectivity.",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 2,
      explanation:
        "The iPhone XS has a 2,658 mAh battery — small by modern standards and significantly smaller than the <a href='/devices/iphone-11'>iPhone 11's</a> 3,110 mAh cell. By 2026, most original batteries show substantial degradation. Battery replacement is the single most cost-effective repair for this model and one of the most common reasons users keep the device longer.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 3.5,
      explanation:
        "The XS uses an OLED display, which costs more to replace than the LCD panel in the <a href='/devices/iphone-xr'>iPhone XR</a>. Back glass replacement requires a frame swap due to the stainless steel construction, adding meaningful cost. Single-issue repairs remain proportionate to the device's value, but multi-component damage pushes total costs near or beyond resale value.",
    },
    {
      label: "Parts Availability",
      score: 4,
      explanation:
        "Replacement parts for the iPhone XS — including OLED screens, batteries, cameras, and charging assemblies — remain available from multiple suppliers. OEM-equivalent OLED panels are beginning to thin in supply, but quality aftermarket options are widely accessible and deliver strong results for daily use.",
    },
    {
      label: "iOS Support Lifespan",
      score: 2,
      explanation:
        "The iPhone XS received its last major iOS update with iOS 18, currently at iOS 18.7.8 (April 22, 2026). Apple confirmed at WWDC 2025 that iOS 26 dropped support for the XS. Security patches should continue through approximately 2028, based on Apple's pattern with older devices. The <a href='/devices/iphone-11'>iPhone 11</a> — one generation newer — still receives major updates.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Summary:</strong> The iPhone XS remains functional for everyday tasks in 2026, but its software support has ended and app compatibility will gradually narrow. Battery replacement is cost-effective and extends daily usability. OLED screen repairs cost more than on the <a href="/devices/iphone-xr">LCD-equipped XR</a>, and multi-component damage often makes <a href="/trade-in">trading in</a> and upgrading more practical — especially given the device's limited remaining software runway.
  `,

  // ── Quick Facts ──
  quickFacts: {
    heading: "Quick Facts — iPhone XS in April 2026",
    items: [
      { label: "Latest iOS version", value: "iOS 18.7.8 (April 22, 2026)" },
      { label: "Still receiving security updates", value: "Yes" },
      { label: "Can install iOS 26", value: "No (Apple dropped support at WWDC 2025)" },
      { label: "Supports Apple Intelligence", value: "No (requires A17 Pro or newer)" },
      { label: "Expected end of security updates", value: "Approximately 2028" },
      { label: "Release date", value: "September 21, 2018" },
      { label: "Device age", value: "7 years, 7 months (as of April 2026)" },
      { label: "Major iOS versions received", value: "7 (iOS 12 through iOS 18)" },
      {
        label: "Our recommendation",
        value:
          "Still a capable daily driver; repair worthwhile if in good condition, upgrade if battery/screen is failing or you need 5G / Apple Intelligence",
      },
    ],
    footnote:
      "This page is updated when Apple releases new iOS 18 security patches. Last verified: April 24, 2026.",
  },

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone XS iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone XS shipped with iOS 12 in 2018 and received major updates through iOS 18 — seven major iOS versions, which puts it at the upper end of Apple's typical support window. At WWDC 2025, Apple confirmed that iOS 26 dropped support for the iPhone XS, XS Max, and XR (all three use the A12 Bionic chip). The current version is iOS 18.7.8, released April 22, 2026, and Apple continues shipping security patches — the XS received four security updates in the first four months of 2026 alone. Based on Apple's pattern with older devices (iOS 12.5.8 still received a patch in January 2026), the iPhone XS should continue receiving critical security updates through approximately 2028.</p>
      <p>This places the XS one generation behind the <a href="/devices/iphone-11">iPhone 11</a>, which — as of early 2026 — still receives major iOS updates. That one-generation gap is the most significant practical difference between the two devices for users evaluating long-term viability. For the larger sibling using the same A12 chip, see our <a href="https://mobiletechlab.ca/devices/iphone-xs-max">iPhone XS Max page</a>.</p>
    `,
    whatVersion: {
      heading: "Can the iPhone XS get iOS 26?",
      contentHtml: `
        <p>No. The iPhone XS's maximum supported iOS version is iOS 18, with iOS 18.7.8 being the most recent release as of April 2026. Apple dropped major iOS support for the XS when iOS 26 launched in September 2025, alongside the iPhone XS Max and iPhone XR. The A12 Bionic processor does not meet the hardware requirements for iOS 26 or Apple Intelligence features. To install the latest version: Settings → General → Software Update.</p>
        <p>It's important to understand the difference between <strong>feature updates</strong> and <strong>security updates</strong>:</p>
        <ul>
          <li><strong>Feature updates</strong> (e.g., iOS 18 → iOS 19) bring new capabilities, app frameworks, and UI changes. The iPhone XS no longer receives these.</li>
          <li><strong>Security updates</strong> are smaller patches that fix vulnerabilities. Apple continues to ship these for iOS 18 — most recently iOS 18.7.8 on April 22, 2026.</li>
        </ul>
        <p>App compatibility is often the first real limitation users encounter after losing major update support. As developers build against newer iOS SDKs, apps gradually drop support for older versions — a process that typically accelerates one to two years after the last major update.</p>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens Now That the iPhone XS Has Stopped Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone XS does not stop working when it loses major iOS support. Calls, messaging, browsing, and most currently installed apps continue to function normally.</p>
      <p>What changes over time is <strong>app compatibility</strong>. App developers build against the latest iOS SDKs, and older versions gradually lose support. For the iPhone XS — which stopped receiving major updates with iOS 18 — this process is already underway. Users may begin noticing app update restrictions or compatibility warnings within the next one to two years.</p>
      <p>Security is the other consideration. Apple continues to ship patches (most recently iOS 18.7.8 on April 22, 2026), but eventually those will slow or stop. For most users, this doesn't create an immediate crisis, but it does increase risk over time — particularly for devices used for banking, payments, or storing sensitive information.</p>
    `,
    appCompatibility: {
      heading: "App Compatibility Issues Canadian Users May Notice",
      contentHtml: `
        <p>From our experience, these are the categories of apps where Canadian users on the iPhone XS tend to notice compatibility issues first:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, and BMO typically require iOS versions within two major releases of the current version. Users on iOS 18 may eventually find these apps stop updating or display compatibility warnings.</li>
          <li><strong>Transit and payment apps</strong> — Presto, city transit apps, and mobile payment platforms often follow similar requirements.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services may require newer iOS versions for security compliance.</li>
          <li><strong>Two-factor authentication apps</strong> — Microsoft Authenticator, Google Authenticator, and similar apps will eventually require newer OS versions.</li>
        </ul>
        <p>This transition is gradual, not immediate. Many apps continue to function on older iOS versions even after they stop receiving updates — but the window narrows over time. Users of the <a href="/devices/iphone-11">iPhone 11</a>, which still receives major updates, do not face these limitations yet.</p>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone XS Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience, whether an iPhone XS is worth fixing depends on the type and number of repairs needed. The XS uses an OLED display, which costs more to replace than the LCD panel in the <a href="/devices/iphone-xr">iPhone XR</a>. Its compact 5.8-inch size appeals to users who prefer a smaller phone. Combined with the device's limited remaining software support, this makes repair decisions more cost-sensitive than on newer models like the <a href="/devices/iphone-11">iPhone 11</a>.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone XS Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement</strong> — The most cost-effective repair for the XS and one of the best-value repairs available on this model. Restores daily battery life, removes performance throttling, and is typically completed in under an hour. This is the most common reason users extend the life of their XS.</li>
          <li><strong>Single-issue screen repair</strong> — OLED replacement costs more than LCD, but a screen-only repair can still be worthwhile if the rest of the device is in good condition. This is a value decision — compare the repair cost against the device's current resale value.</li>
          <li><strong>Charging port or camera repairs</strong> — Individual component repairs remain cost-effective and extend daily usability.</li>
          <li><strong>Data recovery</strong> — For devices containing irreplaceable photos, contacts, or documents, repair is worthwhile regardless of market value. We offer motherboard-level data recovery for devices that won't power on.</li>
        </ul>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When Upgrading or Trading In Is Usually More Practical",
      contentHtml: `
        <ul>
          <li><strong>OLED screen + back glass damage</strong> — The combined cost of OLED panel and back glass replacement on the XS frequently exceeds the device's current resale value. The stainless steel frame requires a full housing swap for back glass repair, adding significant cost.</li>
          <li><strong>Face ID failure after drops</strong> — The TrueDepth camera system on the XS is delicate and expensive to repair. Components for this generation are increasingly difficult to source.</li>
          <li><strong>Multiple major repairs needed</strong> — When screen, battery, and back glass all need attention, the combined cost — driven by the OLED panel and frame swap — makes <a href="/trade-in">trading in</a> and upgrading more practical.</li>
          <li><strong>Repair cost exceeds 50–60% of replacement cost</strong> — As a general guideline, if the total repair estimate exceeds half the cost of a comparable replacement device, upgrading is usually the better investment. This threshold is reached more quickly on the XS than on LCD-equipped models.</li>
        </ul>
        <p>For a full list of iPhone repair services, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone XS Damage and What It Costs",
    frontGlass: {
      heading: "OLED Display Damage",
      contentHtml: `
        <p>The iPhone XS uses a 5.8-inch Super Retina OLED display. When the screen cracks, the entire OLED panel and digitizer assembly must be replaced as a single unit — making screen repair on the XS more expensive than on LCD-equipped models like the <a href="/devices/iphone-xr">iPhone XR</a>.</p>
        <p>OLED damage can also present as colour distortion, green lines, or dead pixels — sometimes without visible cracks, typically after drops. These symptoms all indicate panel damage that requires full replacement.</p>
        <p>Quality aftermarket OLED panels are available at lower price points than OEM. From our experience, most users find aftermarket replacements deliver strong results for daily use, though colour accuracy and peak brightness may differ slightly from the original panel.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>The iPhone XS features back glass bonded to a stainless steel frame. Unlike the <a href="/devices/iphone-xr">iPhone XR's</a> aluminium construction, the stainless steel frame on the XS requires a full housing swap for back glass repair — a more involved and costly process than glass-only removal.</p>
        <p>For devices with back glass damage only, repair is usually worthwhile if the rest of the device is in good condition. When combined with OLED screen damage, the total cost frequently exceeds the device's current resale value — making a <a href="/trade-in">trade-in</a> the more practical option.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone XS",
    contentHtml: `
      <p>Should you upgrade from your iPhone XS in 2026? If the device is in good shape and you mostly text, browse, call, and take casual photos — no. The XS still handles these well on iOS 18.7.8, and Apple's security patches should continue through ~2028. Upgrade if: your battery drops below 80% health, your OLED has noticeable burn-in, you need 5G, you want Apple Intelligence features, or the apps you depend on start requiring iOS 26. Trade-in values in 2026 are modest and heavily condition-dependent. The stainless steel frame gives the XS slightly better cosmetic durability than the aluminum-framed <a href="/devices/iphone-xr">XR</a>, which can improve trade-in value — but battery health and screen condition remain the primary factors. Because the XS no longer receives major iOS updates, trade-in value is declining. Trading in sooner typically yields a better return than waiting. Common upgrade paths include:</p>
      <ul>
        <li>iPhone 12 — First iPhone with 5G, MagSafe, and a significantly longer iOS support window. A natural upgrade for XS users seeking modern connectivity.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong mid-range value for users buying used.</li>
        <li><a href="/devices/iphone-11">iPhone 11</a> — Budget-friendly option with LCD (lower repair costs) and active iOS support as of early 2026, though also approaching its support ceiling.</li>
        <li>Refurbished iPhone 13 or 14 — For users who want a longer support runway with improved camera and battery.</li>
      </ul>
      <p>For a current trade-in quote on your XS, use our <a href="/trade-in">trade-in calculator</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Repair, Sell, or Upgrade? A Practical Framework",
    contentHtml: `
      <p>The iPhone XS repair decision depends on the type of damage, the number of components affected, and how long you plan to keep the device. Use this framework to evaluate your options:</p>
    `,
    scenarios: [
      {
        condition: "Battery wear or single minor issue",
        recommendation:
          "Repair is typically worthwhile. Battery replacement is the single most cost-effective way to extend the life of an iPhone XS. If the screen and body are intact, a new battery restores daily usability at a fraction of replacement cost — even with the device's limited remaining software support.",
      },
      {
        condition: "OLED screen damage (single issue)",
        recommendation:
          "Compare repair cost against resale value before deciding. OLED replacement on the XS costs more than LCD on the iPhone XR. If battery health is acceptable and no other damage is present, screen-only repair can still deliver reasonable value for users who don't need the latest iOS features.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Trading in and upgrading is usually more practical. When OLED screen, back glass, and battery all need replacement, the combined cost — driven by the OLED panel and stainless steel frame swap — frequently exceeds the device's resale value. Trading in puts cash toward a device with longer remaining support.",
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
    {
      label: "iPhone XS vs iPhone XS Max",
      slug: "iphone-xs-vs-iphone-xs-max",
      href: "/devices/iphone-xs-max",
    },
    {
      label: "iPhone XS vs iPhone XR",
      slug: "iphone-xs-vs-iphone-xr",
      href: "/devices/iphone-xr",
    },
    { label: "iPhone XS vs iPhone 11", slug: "iphone-xs-vs-iphone-11" },
    { label: "iPhone XS vs iPhone 12", slug: "iphone-xs-vs-iphone-12" },
  ],

  // ── Related Guides ──
  relatedGuides: {
    heading: "Related iPhone guides",
    links: [
      { label: "iPhone XS Max support status", href: "/devices/iphone-xs-max" },
      { label: "iPhone XR support status", href: "/devices/iphone-xr" },
      { label: "iPhone 11 Pro support status", href: "/devices/iphone-11-pro" },
      { label: "iPhone repair pricing", href: "/repair-pricing" },
      { label: "Sell or trade in your iPhone", href: "/trade-in" },
    ],
  },

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone XS",
  faqs: [
    {
      question: "Is the iPhone XS still supported in 2026?",
      answerHtml:
        "Yes, with limitations. Apple ended major iOS updates for the iPhone XS when iOS 26 launched in September 2025. Security updates continue — iOS 18.7.8 shipped on April 22, 2026. Based on Apple's historical pattern with devices of similar age, you can expect critical security patches through approximately 2028.",
    },
    {
      question: "Is the iPhone XS worth fixing?",
      answerHtml:
        "Usually yes for battery or screen repairs on a device in otherwise good condition. The XS has premium components — OLED display, stainless steel frame, dual rear cameras — that make it worth maintaining. Where repair is not worthwhile: motherboard-level faults, water damage that prevented the device from turning on, or multiple major component failures at once. Get a quote before committing.",
    },
    {
      question: "Can I still use an iPhone XS in 2026?",
      answerHtml:
        "Yes. The XS running iOS 18.7.8 handles messaging, email, web browsing, navigation, banking apps, social media, and most mainstream apps without issue. You'll miss newer iOS features (Apple Intelligence, the Liquid Glass redesign introduced in iOS 26, some iOS 26-only app features), but day-to-day use remains reliable.",
    },
    {
      question: "What is the resale value of an iPhone XS today?",
      answerHtml:
        "Trade-in values in 2026 range from roughly $60–$130 CAD depending on storage and condition. Cracked screens, OLED burn-in, or swollen batteries reduce value significantly. Unlocked devices in Excellent condition command the top of the range. For a current trade-in quote on your specific device, use our <a href='/trade-in'>trade-in calculator</a>.",
    },
    {
      question: "What's the difference between the iPhone XS and iPhone XS Max?",
      answerHtml:
        "Same internals, different size. The iPhone XS has a 5.8-inch OLED display and a 2,658 mAh battery. The iPhone XS Max has a 6.5-inch OLED display and a larger 3,174 mAh battery. Both use the A12 Bionic chip, both have the same dual 12MP cameras, both run iOS 18 as their final major version. Choice comes down to screen size preference and battery life. See our <a href='/devices/iphone-xs-max'>iPhone XS Max page</a> for details on that model.",
    },
    {
      question: "Does the iPhone XS get iOS 26?",
      answerHtml:
        "No. Apple dropped support for the iPhone XS (along with the XS Max and XR) when iOS 26 launched in September 2025 — all three devices use the A12 Bionic chip, which does not meet iOS 26's hardware requirements. The maximum supported iOS version is iOS 18, currently at 18.7.8.",
    },
    {
      question: "How long will the iPhone XS be supported?",
      answerHtml:
        "Major feature updates have already ended. Security updates should continue through approximately 2028, based on Apple's pattern of supporting devices for about three years past their final major iOS version. App compatibility will gradually decline as developers raise their minimum supported iOS version, but most mainstream apps work well on iOS 18 and will continue to for several more years.",
    },
  ],
};

export default iPhoneXSData;
