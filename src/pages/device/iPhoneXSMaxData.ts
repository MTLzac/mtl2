import type { DeviceHubData } from "@/components/device-hub/types";
import heroImg from "@/assets/devices/iphone-xs-max-hero.png";

const iPhoneXSMaxData: DeviceHubData = {
  // ── SEO ──
  metaTitle: "iPhone XS Max in 2026: Runs iOS 18.7.8, Still Supported",
  metaDescription:
    "The iPhone XS Max runs iOS 18.7.8 — its final major version. Apple still ships security updates, but no iOS 26. See what still works, how long it'll last, and when to upgrade.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-xs-max",
  slug: "iphone-xs-max",

  // ── Hero ──
  deviceName: "iPhone XS Max",
  h1: "iPhone XS Max in 2026: Still Supported, With Limitations",
  statusBadge: {
    label: "No longer receiving major iOS updates",
    variant: "deprecated",
  },
  heroImage: heroImg,
  heroImageAlt: "Apple iPhone XS Max front and back view",
  featuredSnippetHtml: `
    <p>The iPhone XS Max runs <strong>iOS 18.7.8</strong> — released April 22, 2026 — which is the final major iOS version it will receive. Apple continues to ship security updates (the most recent was 2 days ago), but the XS Max won't get iOS 26, Apple Intelligence, or future feature updates. Apple's largest iPhone at launch in 2018, the XS Max's 6.5-inch OLED display and 3,174 mAh battery still hold up well for everyday use in 2026 — here's what to expect.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a></p>
  `,
  tldrHtml: `
    <p><strong>TL;DR:</strong> The iPhone XS Max is no longer receiving major iOS updates, but it still gets Apple security patches. Its large 6.5-inch OLED display and stainless steel frame are premium components — repair is usually worthwhile for devices in good cosmetic condition, though XS Max OLED replacement is the costliest repair in its class. Upgrade is typically more practical once multiple repairs are needed.</p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2018 (September 21)" },
    { label: "Display", value: '6.5″ Super Retina OLED, 2688 × 1242 px' },
    { label: "Processor", value: "A12 Bionic" },
    {
      label: "Current iOS Version",
      value: "iOS 18.7.8 (April 2026)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Large-screen media device, secondary phone, or backup for users who prefer a bigger OLED display and don't require the latest iOS features or 5G connectivity.",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 3,
      explanation:
        "The iPhone XS Max ships with a 3,174 mAh battery — larger than the standard XS. While it offered solid battery life at launch, original batteries from 2018 now show significant capacity loss. Battery replacement restores much of the original endurance and remains the most common repair we perform on this model.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 3.5,
      explanation:
        "The XS Max uses a large 6.5-inch OLED panel, which costs more to replace than smaller OLED screens or LCD panels. However, the device's larger form factor and original flagship pricing mean repair costs remain proportionate to the phone's residual value in most single-issue scenarios.",
    },
    {
      label: "Parts Availability",
      score: 4,
      explanation:
        "Replacement parts for the XS Max — including batteries, screens, and charging ports — remain widely available. The device sold in large volumes globally, which supports ongoing aftermarket supply. OEM-equivalent OLED panels are available, along with more affordable aftermarket alternatives.",
    },
    {
      label: "iOS Support Lifespan",
      score: 2,
      explanation:
        "The iPhone XS Max received its last major iOS update with iOS 18 (current version 18.7.8, April 2026). It does not support iOS 26 and will not receive future major releases. Apple is expected to continue shipping security patches through approximately 2028, based on its historical pattern with similarly aged devices.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Quick takeaway:</strong> The iPhone XS Max remains a capable large-screen device in 2026, but its lack of iOS 26 support and the cost of OLED screen replacement mean that upgrading is often the better long-term value when multiple repairs are needed. For single issues like battery wear, repair is still cost-effective.
  `,

  // ── Quick Facts ──
  quickFacts: {
    heading: "Quick Facts — iPhone XS Max in April 2026",
    items: [
      { label: "Latest iOS version", value: "iOS 18.7.8 (April 22, 2026)" },
      { label: "Still receiving security updates", value: "Yes" },
      { label: "Can install iOS 26", value: "No (Apple dropped support at WWDC 2025)" },
      { label: "Supports Apple Intelligence", value: "No (requires A17 Pro or newer)" },
      { label: "Expected end of security updates", value: "Approximately 2028" },
      { label: "Release date", value: "September 21, 2018" },
      { label: "Device age", value: "7 years, 7 months (as of April 2026)" },
      { label: "Major iOS versions received", value: "7 (iOS 12 through iOS 18)" },
      { label: "Display / battery", value: '6.5″ OLED · 3,174 mAh (largest iPhone battery at launch)' },
      {
        label: "Our recommendation",
        value:
          "Still a capable large-screen daily driver; repair worthwhile if in good condition, upgrade if OLED burn-in is visible, battery has degraded, or you need 5G / Apple Intelligence",
      },
    ],
    footnote:
      "This page is updated when Apple releases new iOS 18 security patches. Last verified: April 24, 2026.",
  },

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone XS Max iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone XS Max shipped with iOS 12 in 2018 and received major updates through iOS 18 — seven major iOS versions, which puts it at the upper end of Apple's typical support window. At WWDC 2025, Apple confirmed that iOS 26 dropped support for the iPhone XS Max, XS, and XR (all three use the A12 Bionic chip). The current version is <strong>iOS 18.7.8</strong>, released <strong>April 22, 2026</strong>, and Apple continues shipping security patches — the XS Max received four security updates in the first four months of 2026 alone. Based on Apple's pattern with older devices (iOS 12.5.8 still received a patch in January 2026), the iPhone XS Max should continue receiving critical security updates through approximately 2028.</p>
      <p>The XS Max shares the same A12 Bionic chip as the <a href="/devices/iphone-xs">iPhone XS</a> and <a href="/devices/iphone-xr">iPhone XR</a>, which means all three devices reached their iOS support ceiling at the same time.</p>
    `,
    whatVersion: {
      heading: "Can the iPhone XS Max get iOS 26?",
      contentHtml: `
        <p>No. The iPhone XS Max's maximum supported iOS version is <strong>iOS 18</strong>, with <strong>iOS 18.7.8</strong> being the most recent release as of April 2026. Apple dropped major iOS support for the XS Max when iOS 26 launched in September 2025, alongside the iPhone XS and iPhone XR. The A12 Bionic processor does not meet the hardware requirements for iOS 26 or Apple Intelligence features. To install the latest version: Settings → General → Software Update.</p>
        <p>It's important to understand the difference between <strong>feature updates</strong> and <strong>security updates</strong>:</p>
        <ul>
          <li><strong>Feature updates</strong> (e.g., iOS 18 → iOS 26) bring new capabilities, app frameworks, and UI changes. The iPhone XS Max no longer receives these.</li>
          <li><strong>Security updates</strong> are smaller patches that fix vulnerabilities. Apple continues to issue these for iOS 18 — the most recent (18.7.8) shipped on April 22, 2026.</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens Now That the iPhone XS Max Has Stopped Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone XS Max does not stop working when it loses iOS support. Calls, messaging, browsing, and most currently installed apps continue to function normally.</p>
      <p>What changes over time is <strong>app compatibility</strong>. Developers build against the latest iOS SDKs, and older versions gradually lose support. This process is gradual — not immediate — but accelerates as the device falls further behind the current iOS release.</p>
      <p>Security is the other consideration. Without regular patches, known vulnerabilities remain unaddressed. For most users, this doesn't create an immediate crisis, but it increases risk over time — particularly for devices used for banking, payments, or sensitive information.</p>
    `,
    appCompatibility: {
      heading: "App Compatibility Issues Canadian Users May Notice",
      contentHtml: `
        <p>From our experience, these are the categories of apps where Canadian users on the XS Max tend to notice compatibility issues first:</p>
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
    heading: "Is the iPhone XS Max Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience repairing iPhones daily, the XS Max occupies a middle ground: its larger battery and screen make it a more capable daily driver than the standard XS, but the large 6.5-inch OLED panel means screen repairs cost more. Whether repair makes sense depends on the type and number of issues present.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone XS Max Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement only</strong> — The most cost-effective repair for the XS Max. Restores daily battery life and removes performance throttling. The larger battery means users notice a more significant improvement after replacement compared to the standard XS.</li>
          <li><strong>Single-issue repairs</strong> — If only the screen or only the charging port needs attention and the rest of the device is in good condition, repair typically makes financial sense.</li>
          <li><strong>Data recovery situations</strong> — If the device contains irreplaceable data, repair may be necessary regardless of the device's market value. We offer motherboard-level data recovery for devices that won't power on.</li>
        </ul>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When It's Often Better to Sell or Upgrade Instead",
      contentHtml: `
        <ul>
          <li><strong>Large OLED screen + back glass damage</strong> — The 6.5-inch OLED panel is one of the more expensive iPhone screens to replace. Combined with back glass repair, costs typically exceed the device's current market value.</li>
          <li><strong>Face ID failure after drops</strong> — The TrueDepth camera system is delicate. Repair often involves components that are expensive or difficult to source for this generation.</li>
          <li><strong>Multiple major repairs required</strong> — Screen, battery, and charging port failures together make repair uneconomical in most cases.</li>
          <li><strong>Repair cost approaches device value</strong> — As a general guideline, if the total repair estimate exceeds 50–60% of what a comparable replacement costs, upgrading is usually the better investment.</li>
        </ul>
        <p>For a full list of iPhone repair services we offer, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone XS Max Damage and What It Costs",
    frontGlass: {
      heading: "OLED Display Damage",
      contentHtml: `
        <p>The iPhone XS Max uses a 6.5-inch Super Retina OLED display — the largest screen Apple had produced at the time. When the screen cracks, the entire OLED panel and digitizer assembly must be replaced as one unit. The larger panel size makes this one of the costlier iPhone screen repairs.</p>
        <p>OLED damage can also present as colour distortion, green lines, or dead pixels even without visible cracks, typically after drops. These symptoms indicate panel damage that requires full replacement.</p>
        <p>Aftermarket OLED panels are available at lower price points than OEM, though colour accuracy and brightness may differ slightly. From our experience, most users find aftermarket OLED replacements acceptable for daily use.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>Like the <a href="/devices/iphone-xs">iPhone XS</a>, the XS Max features a stainless steel frame with back glass that is laser-welded to the housing. Back glass repair requires either a full housing swap or careful glass-only removal.</p>
        <p>The repair is viable and something we perform regularly, but it adds significant cost. For devices with back glass damage only, repair is usually worthwhile. For devices with both OLED screen and back glass damage, the combined cost frequently exceeds the device's market value — making a <a href="/trade-in">trade-in</a> the more practical path forward.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone XS Max",
    contentHtml: `
      <p>Should you upgrade from your iPhone XS Max in 2026? If the device is in good shape and you mostly text, browse, call, and take casual photos — no. The XS Max still handles these well on iOS 18.7.8, and Apple's security patches should continue through ~2028. Its 6.5-inch OLED and larger 3,174 mAh battery still give it an edge over smaller or older phones for media consumption and all-day use. Upgrade if: your battery drops below 80% health, your OLED has noticeable burn-in (a common issue on 6+ year-old OLED panels), you need 5G, you want Apple Intelligence features, or the apps you depend on start requiring iOS 26. Trade-in values in 2026 are modest and heavily condition-dependent. The XS Max generally commands higher resale value than the smaller XS due to its larger display, but any OLED burn-in or battery degradation reduces value significantly. Because the XS Max no longer receives major iOS updates, trade-in value is declining. Trading in sooner typically yields a better return than waiting. Common upgrade paths include:</p>
      <ul>
        <li>iPhone 12 — First iPhone with 5G, MagSafe, and a significantly longer iOS support window. A natural upgrade for XS Max users who want continued software support.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong mid-range value for users buying used.</li>
        <li>iPhone 12 Pro Max or 13 Pro Max — For users who want to maintain the large-screen experience with modern camera and battery improvements.</li>
      </ul>
      <p>For a current trade-in quote on your XS Max, use our <a href="/trade-in">trade-in calculator</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone XS Max?",
    contentHtml: `
      <p>Based on your situation, repairing, trading in, or upgrading may make sense. Here's a practical framework based on common scenarios we see:</p>
    `,
    scenarios: [
      {
        condition: "Light damage or battery-only issues",
        recommendation:
          "Repair is typically worthwhile. Battery replacement is the single most cost-effective way to extend the life of an iPhone XS Max. The larger battery means the improvement after replacement is noticeable, and if the screen and body are intact, a new battery restores daily usability at a fraction of replacement cost.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Trade-in plus upgrade is usually the better value. When large OLED screen replacement, back glass, and battery are all needed, the combined repair cost frequently exceeds what the device is worth. Trading in — even in damaged condition — puts cash toward a device with years of remaining support.",
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
    {
      label: "iPhone XS Max vs iPhone XS",
      slug: "iphone-xs-max-vs-iphone-xs",
      href: "/devices/iphone-xs",
    },
    {
      label: "iPhone XS Max vs iPhone XR",
      slug: "iphone-xs-max-vs-iphone-xr",
      href: "/devices/iphone-xr",
    },
    {
      label: "iPhone XS Max vs iPhone 11 Pro Max",
      slug: "iphone-xs-max-vs-iphone-11-pro-max",
    },
    {
      label: "iPhone XS Max vs iPhone 12 Pro Max",
      slug: "iphone-xs-max-vs-iphone-12-pro-max",
    },
  ],

  // ── Related Guides ──
  relatedGuides: {
    heading: "Related iPhone guides",
    links: [
      { label: "iPhone XS support status", href: "/devices/iphone-xs" },
      { label: "iPhone XR support status", href: "/devices/iphone-xr" },
      { label: "iPhone 11 Pro support status", href: "/devices/iphone-11-pro" },
      { label: "iPhone repair pricing", href: "/repair-pricing" },
      { label: "Sell or trade in your iPhone", href: "/trade-in" },
    ],
  },

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone XS Max",
  faqs: [
    {
      question: "Is the iPhone XS Max still supported in 2026?",
      answerHtml:
        "Yes, with limitations. Apple ended major iOS updates for the iPhone XS Max when iOS 26 launched in September 2025. Security updates continue — iOS 18.7.8 shipped on April 22, 2026. Based on Apple's historical pattern with devices of similar age, you can expect critical security patches through approximately 2028.",
    },
    {
      question: "Is the iPhone XS Max worth fixing?",
      answerHtml:
        "For most repairs, yes — with one important caveat. Battery replacement on an XS Max in otherwise good condition restores it to a reliable large-screen daily driver at a fraction of the cost of a new phone. Where the math gets harder: OLED display replacement on the 6.5-inch panel is one of the costliest single-component repairs in its class, often approaching half of the device's current resale value. For screen damage on the XS Max, get a repair quote before deciding — in some cases, trade-in and upgrade is the more practical choice.",
    },
    {
      question: "Can I still use an iPhone XS Max in 2026?",
      answerHtml:
        "Yes. The XS Max running iOS 18.7.8 handles messaging, email, web browsing, navigation, banking apps, social media, streaming, and most mainstream apps without issue. The 6.5-inch OLED is still a premium-quality display, and the larger 3,174 mAh battery gives it an edge over smaller phones for all-day use. You'll miss newer iOS features (Apple Intelligence, the Liquid Glass redesign introduced in iOS 26, some iOS 26-only app features), but day-to-day use remains reliable.",
    },
    {
      question: "What is the resale value of an iPhone XS Max today?",
      answerHtml:
        "Trade-in values in 2026 range from roughly $90–$180 CAD depending on storage and condition — generally higher than the smaller iPhone XS due to the larger display. OLED burn-in is a common issue on 6+ year-old XS Max panels and significantly reduces value, as do cracked screens and swollen batteries. Unlocked devices in Excellent condition with no burn-in command the top of the range. For a current trade-in quote on your specific device, use our <a href='/trade-in'>trade-in calculator</a>.",
    },
    {
      question: "What's the difference between the iPhone XS and iPhone XS Max?",
      answerHtml:
        "Same internals, different size. The iPhone XS has a 5.8-inch OLED display and a 2,658 mAh battery. The iPhone XS Max has a 6.5-inch OLED display and a larger 3,174 mAh battery. Both use the A12 Bionic chip, both have the same dual 12MP cameras, both run iOS 18 as their final major version. Choice comes down to screen size preference and battery life. See our <a href='/devices/iphone-xs'>iPhone XS page</a> for details on the smaller model.",
    },
    {
      question: "Does the iPhone XS Max get iOS 26?",
      answerHtml:
        "No. Apple dropped support for the iPhone XS Max (along with the XS and XR) when iOS 26 launched in September 2025 — all three devices use the A12 Bionic chip, which does not meet iOS 26's hardware requirements. The maximum supported iOS version is iOS 18, currently at 18.7.8.",
    },
    {
      question: "How long will the iPhone XS Max be supported?",
      answerHtml:
        "Major feature updates have already ended. Security updates should continue through approximately 2028, based on Apple's pattern of supporting devices for about three years past their final major iOS version. App compatibility will gradually decline as developers raise their minimum supported iOS version, but most mainstream apps work well on iOS 18 and will continue to for several more years.",
    },
  ],
};

export default iPhoneXSMaxData;
