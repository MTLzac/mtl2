import type { DeviceHubData } from "@/components/device-hub/types";
import heroBack from "@/assets/devices/iphone-xr-hero.png";
import frontDamage from "@/assets/devices/iphone-xr-front-damage.jpg";
import backDamage from "@/assets/devices/iphone-xr-back-damage.png";

const iPhoneXRData: DeviceHubData = {
  // ── SEO (LOCKED) ──
  metaTitle:
    "iPhone XR in 2026: Runs iOS 18.7.8, Supported With Limitations",
  metaDescription:
    "The iPhone XR runs iOS 18.7.8 — its final major version. Apple still ships security updates, but no iOS 26. See what still works, how long it'll last, and when to upgrade.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-xr",
  slug: "iphone-xr",

  // ── Hero ──
  deviceName: "iPhone XR",
  h1: "iPhone XR in 2026: Still Supported, With Limitations",
  statusBadge: {
    label: "No longer receiving major iOS updates",
    variant: "deprecated",
  },
  heroImage: heroBack,
  heroImageAlt: "Apple iPhone XR back view in black",
  featuredSnippetHtml: `
    <p>The iPhone XR runs iOS 18.7.8 — released April 22, 2026 — which is the final major iOS version it will receive. Apple continues to ship security updates (the most recent was 2 days ago), but the XR won't get iOS 26, Apple Intelligence, or future feature updates. For most everyday use in 2026, it still works — here's what to expect.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a> · <a href="https://www.macrumors.com/guide/ios-18-compatible-iphone-models/" target="_blank" rel="noopener noreferrer">Macworld iOS 18 device list</a></p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2018 (October 26)" },
    { label: "Display", value: '6.1″ Liquid Retina LCD, 828 × 1792 px' },
    { label: "Processor", value: "A12 Bionic" },
    {
      label: "Current iOS Version",
      value: "iOS 18.7.8 (April 2026)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Secondary phone, kids' device, budget daily driver for messaging and browsing",
    },
  ],

  // ── Quick Facts ──
  quickFacts: {
    heading: "Quick Facts — iPhone XR in April 2026",
    items: [
      { label: "Latest iOS version", value: "iOS 18.7.8 (April 22, 2026)" },
      { label: "Still receiving security updates", value: "Yes" },
      { label: "Can install iOS 26", value: "No (Apple dropped support at WWDC 2025)" },
      { label: "Supports Apple Intelligence", value: "No (requires A17 Pro or newer)" },
      { label: "Expected end of security updates", value: "Approximately 2028" },
      { label: "Release date", value: "October 26, 2018" },
      { label: "Device age", value: "7 years (as of April 2026)" },
      {
        label: "Our recommendation",
        value:
          "Still usable for core tasks; repair if in good condition, trade in if battery/screen is failing",
      },
    ],
    footnote:
      "This page is updated when Apple releases new iOS 18 security patches. Last verified: April 24, 2026.",
  },

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone XR iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone XR shipped with iOS 12 in 2018 and received major updates through iOS 18 — six major iOS versions, consistent with Apple's typical 6–7 year support window. At WWDC 2025, Apple confirmed that iOS 26 dropped support for the iPhone XR, XS, and XS Max.</p>
      <p>The current version is iOS 18.7.8, released April 22, 2026, and Apple continues shipping targeted security patches — the XR received four security updates in the first four months of 2026 alone. Based on Apple's pattern with older devices (iOS 12.5.8 still received a patch in January 2026), the iPhone XR should continue receiving critical security updates through approximately 2028.</p>
    `,
    whatVersion: {
      heading: "Can the iPhone XR get iOS 26?",
      contentHtml: `
        <p>No. The iPhone XR's maximum supported iOS version is <strong>iOS 18</strong>, with iOS 18.7.8 being the most recent release as of April 2026. Apple ended major iOS support for the XR when iOS 26 launched in September 2025, alongside the iPhone XS and XS Max. The A12 Bionic processor does not meet the hardware requirements for iOS 26 or Apple Intelligence features. If you're running an older iOS 18.x version, you can still update to 18.7.8 via Settings → General → Software Update.</p>
        <p>It's important to understand the difference between <strong>feature updates</strong> and <strong>security updates</strong>:</p>
        <ul>
          <li><strong>Feature updates</strong> (e.g., iOS 18 → iOS 19) bring new capabilities, app frameworks, and UI changes. The iPhone XR no longer receives these.</li>
          <li><strong>Security updates</strong> are smaller patches that fix vulnerabilities. Apple may still issue these for iOS 18, but on a limited and unpredictable schedule.</li>
        </ul>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone XR Stops Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone XR does not stop working when it loses iOS support. Calls, messaging, browsing, and most currently installed apps continue to function normally.</p>
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
    heading: "Is the iPhone XR Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience repairing iPhones daily, whether an iPhone XR is worth fixing depends on the type and extent of the damage. A single-issue repair on an otherwise functional device is often worthwhile. Multiple simultaneous failures typically tip the equation toward replacement.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone XR Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement only</strong> — The most cost-effective repair for the XR. Restores daily battery life and removes performance throttling. Typically completed in under an hour.</li>
          <li><strong>Screen replacement only</strong> — If the display is cracked but everything else works (Face ID, cameras, charging), screen repair extends the device's life at a fraction of replacement cost.</li>
          <li><strong>Device otherwise in good condition</strong> — If the XR's software limitations aren't a problem for your use case (e.g., secondary phone, kids' device, basic daily driver), a single repair is usually worthwhile.</li>
        </ul>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When It's Often Better to Sell or Upgrade Instead",
      contentHtml: `
        <ul>
          <li><strong>Screen + back glass damage</strong> — Combined repair cost for both panels on the XR often approaches or exceeds the device's market value.</li>
          <li><strong>Multiple major repairs required</strong> — Screen, battery, and charging port failures together make repair uneconomical in most cases.</li>
          <li><strong>Repair cost approaches device value</strong> — As a general guideline, if the total repair estimate exceeds 60–70% of what a comparable replacement costs, upgrading is usually the better investment.</li>
        </ul>
        <p>For a full list of iPhone repair services we offer, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone XR Damage and What It Means",
    frontGlass: {
      heading: "Front Glass Damage",
      image: frontDamage,
      imageAlt:
        "iPhone XR with cracked front display glass, a common repair scenario",
      contentHtml: `
        <p>Front glass damage is the most common repair we see on the iPhone XR. The XR uses a single LCD and digitizer assembly, which means the entire front panel is replaced as one unit. This keeps repair straightforward and turnaround fast.</p>
        <p>Aftermarket and OEM-equivalent screen options are available at different price points. Both restore full touch functionality — the main difference is colour accuracy and brightness levels, which most users won't notice in daily use.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      image: backDamage,
      imageAlt:
        "iPhone XR with cracked back glass, a common repair scenario when evaluating whether the device is worth fixing",
      contentHtml: `
        <p>Back glass repair on the iPhone XR is more involved than screen replacement. Unlike iPhone 12 and later models (which use a removable back panel), the XR's back glass is laser-welded to the aluminium frame. This means the repair requires either a full housing swap or careful glass-only removal.</p>
        <p>The repair is still viable and something we perform regularly, but it costs more than a screen replacement due to the additional labour. For devices with back glass damage only, repair is usually worthwhile. For devices with both front and back glass damage, the combined cost should be weighed against the device's current value.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone XR",
    contentHtml: `
      <p>Should you upgrade from your iPhone XR in 2026? If the device is in good shape and you mostly text, browse, and call — no. The XR still handles these well on iOS 18.7.8, and Apple's security patches should continue through ~2028. Upgrade if: your battery drops below 80% health, your screen is cracked, you want Apple Intelligence features, you rely on 5G, or your favorite apps start dropping iOS 18 support.</p>
      <p>The iPhone XR's trade-in value in 2026 is modest and heavily condition-dependent. Devices in good cosmetic condition with healthy batteries command higher values, while those with cracked screens, battery degradation, or carrier locks trade at significant discounts.</p>
      <p>If you're considering a trade-in, it's worth understanding the difference between <strong>cash trade-ins</strong> and <strong>store credit</strong>. Cash offers are typically lower but provide immediate liquidity. Store credit toward a replacement device is often higher but locks you into a specific retailer or carrier.</p>
      <p>Upgrading is optional and entirely user-led. For users whose daily needs are met by the XR, there's no urgency to upgrade. For those hitting app compatibility walls or needing better camera performance, common upgrade paths include:</p>
      <ul>
        <li><a href="/devices/iphone-11">iPhone 11</a> — One generation newer, with Night Mode camera and slightly longer software runway</li>
        <li><a href="/devices/iphone-12">iPhone 12</a> — First iPhone with 5G, MagSafe, and OLED display. Significantly longer iOS support window</li>
        <li>Refurbished iPhone 13 or 14 — Strong mid-range value in the used market</li>
      </ul>
      <p>For current trade-in values based on your device's specific condition, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone XR?",
    contentHtml: `
      <p>Based on your situation, repairing, trading in, or upgrading may make sense. Here's a practical framework based on common scenarios we see:</p>
    `,
    scenarios: [
      {
        condition: "Still usable?",
        recommendation:
          "Yes, with limitations. The iPhone XR handles messaging, browsing, email, and most social media without issue. Performance-intensive apps and newer games may struggle. Banking and government apps may begin requiring newer iOS versions.",
      },
      {
        condition: "Worth fixing?",
        recommendation:
          "Depends on damage. Single-issue repairs (battery or screen alone) are typically worthwhile. Multiple simultaneous repairs often exceed the device's value. Compare total repair cost against replacement options before deciding.",
      },
      {
        condition: "Best long-term value?",
        recommendation:
          "Often trade-in plus upgrade. If you're hitting software limitations or need a device that will remain supported for 3+ more years, trading in the XR toward a newer model usually offers the best long-term value per dollar spent.",
      },
    ],
    disclaimer:
      "Costs, values, and repair outcomes vary based on device condition, parts availability, and market demand.",
  },

  // ── Comparisons ──
  comparisons: [
    { label: "iPhone XR vs iPhone 11", slug: "iphone-xr-vs-iphone-11" },
    { label: "iPhone XR vs iPhone XS", slug: "iphone-xr-vs-iphone-xs" },
    { label: "iPhone XR vs iPhone 12", slug: "iphone-xr-vs-iphone-12" },
    {
      label: "iPhone XR vs iPhone SE (2020)",
      slug: "iphone-xr-vs-iphone-se-2020",
    },
  ],

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone XR",
  faqs: [
    {
      question: "How long will my iPhone XR be supported?",
      answerHtml:
        "Apple ended major iOS updates for the iPhone XR when iOS 26 launched in September 2025. Security updates continue — iOS 18.7.8 shipped on April 22, 2026. Based on Apple's historical pattern with devices of similar age, you can expect critical security patches through approximately 2028, roughly three years past the final major version.",
    },
    {
      question: "Can I still use my iPhone XR in 2026?",
      answerHtml:
        "Yes. The iPhone XR running iOS 18.7.8 handles messaging, email, web browsing, navigation, banking apps, social media, and most mainstream apps without issue. You'll miss newer iOS features (Apple Intelligence, the Liquid Glass redesign, some iOS 26-only app features), but day-to-day use remains solid.",
    },
    {
      question: "What iOS version can the iPhone XR update to?",
      answerHtml:
        "The iPhone XR's maximum supported iOS version is iOS 18, currently at 18.7.8. It cannot be updated to iOS 26 or any future major iOS version. Inside the iOS 18 branch, Apple continues to release security point updates every 1–2 months.",
    },
    {
      question: "What happens when an iPhone is no longer supported?",
      answerHtml:
        "Support ends in stages rather than all at once. Major feature updates stop first (this has already happened for the XR). Security updates continue for several more years but become less frequent. App developers gradually drop support for older iOS versions, starting with the most complex apps (newer games, banking, enterprise tools). Most everyday apps keep working long after official support ends — it's a gradual decline, not a hard cutoff.",
    },
    {
      question: "Is the iPhone XR worth fixing?",
      answerHtml:
        "Yes, for most repairs. A battery replacement on an XR in otherwise good condition restores it to a reliable daily driver at a fraction of the cost of a new phone. Screen repair is also worthwhile if the rest of the device is functional. Where it's not worth fixing: motherboard-level faults, water damage that didn't turn on, or if multiple major components have failed at once.",
    },
    {
      question: "When should you upgrade from an iPhone XR?",
      answerHtml:
        "Upgrade if any of these apply: your battery health has dropped below 80%, your screen is cracked, you need 5G for your carrier plan, you want Apple Intelligence features, or the apps you depend on have started requiring iOS 26. If none of these apply and the phone still feels responsive, there's no urgency. For a closer form-factor match, the iPhone 12 is the natural upgrade; for more longevity, the iPhone 14 or newer.",
    },
    {
      question: "What is the resale value of an iPhone XR today?",
      answerHtml:
        "Trade-in values in 2026 range from roughly $40–$120 CAD depending on condition, storage, and whether the battery and screen are healthy. Cracked screens or swollen batteries reduce the value significantly. Unlocked devices in Excellent condition command the top of the range; Good condition devices typically fall in the $60–$80 range. For current trade-in values on your specific device, use our <a href='/trade-in'>trade-in calculator</a>.",
    },
  ],
};

export default iPhoneXRData;
