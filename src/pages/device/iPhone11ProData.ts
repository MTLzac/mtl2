import type { DeviceHubData } from "@/components/device-hub/types";

const iPhone11ProData: DeviceHubData = {
  // ── SEO ──
  metaTitle:
    "Is the iPhone 11 Pro Still Supported in 2026? Repair Viability & Upgrade Guide",
  metaDescription:
    "A factual guide to the iPhone 11 Pro in 2026 — covering iOS 26 support, OLED repair costs, battery life, app compatibility, and trade-in or upgrade options for Canadian users.",
  canonicalUrl: "https://mobiletechlab.ca/devices/iphone-11-pro",
  slug: "iphone-11-pro",

  // ── Hero ──
  deviceName: "iPhone 11 Pro",
  h1: "Is the iPhone 11 Pro Still Supported in 2026?",
  statusBadge: {
    label: "Still receiving iOS updates",
    variant: "supported",
  },
  heroImage: undefined,
  heroImageAlt: "Apple iPhone 11 Pro front and back view",
  featuredSnippetHtml: `
    <p>As of 2026, the iPhone 11 Pro supports iOS 26 and continues to receive major software updates from Apple. Released in 2019, the 11 Pro was Apple's premium compact flagship, featuring a 5.8-inch Super Retina XDR OLED display, the A13 Bionic chip, and Apple's first triple-camera system. While it still receives software support, its OLED screen repair costs position it differently than the standard iPhone 11 when evaluating repair viability.</p>
    <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple iOS compatibility</a></p>
  `,

  // ── At a Glance ──
  atAGlance: [
    { label: "Release Year", value: "2019" },
    { label: "Display", value: '5.8″ Super Retina XDR OLED, 1125 × 2436 px' },
    { label: "Processor", value: "A13 Bionic" },
    {
      label: "Latest Major iOS",
      value: "iOS 26 (currently supported)",
    },
    {
      label: "Typical Use Case Today",
      value:
        "Premium compact daily driver for users who value a smaller OLED screen, triple-camera system, and ongoing software support",
    },
  ],

  // ── Viability Scoring ──
  viabilityScores: [
    {
      label: "Battery Life",
      score: 3,
      explanation:
        "The iPhone 11 Pro ships with a 3,046 mAh battery. Apple marketed it as having four hours more battery life than the iPhone XS, but by 2026, most original batteries show meaningful degradation. Battery replacement restores daily endurance and is a highly cost-effective repair for this model.",
    },
    {
      label: "Repair Cost (Relative)",
      score: 3.5,
      explanation:
        "The 11 Pro uses a Super Retina XDR OLED display, which costs significantly more to replace than the LCD panel in the standard iPhone 11. However, the device's premium original pricing and ongoing iOS support mean repair costs remain proportionate for single-issue repairs. The equation shifts when multiple repairs are needed.",
    },
    {
      label: "Parts Availability",
      score: 4,
      explanation:
        "Replacement parts for the iPhone 11 Pro — including OLED screens, batteries, cameras, and charging assemblies — remain widely available. The Pro sold in smaller volumes than the standard iPhone 11, but sufficient aftermarket supply exists for all common repairs.",
    },
    {
      label: "iOS Support Lifespan",
      score: 3,
      explanation:
        "The iPhone 11 Pro currently supports iOS 26, keeping it in Apple's active update window. Like the standard iPhone 11, the A13 Bionic is likely approaching the end of its major update lifecycle within the next one to two years, based on Apple's historical support patterns.",
    },
  ],
  quickTakeawayHtml: `
    <strong>Quick takeaway:</strong> The iPhone 11 Pro remains a capable premium device in 2026 with active iOS 26 support and a strong triple-camera system. However, its OLED display makes screen repairs costlier than the standard iPhone 11. For battery-only or single-issue repairs, the 11 Pro is worth fixing. For multiple major repairs, the higher OLED cost shifts the calculus toward upgrading.
  `,

  // ── iOS Support Status ──
  iosSupportStatus: {
    heading: "iPhone 11 Pro iOS Support Status in 2026",
    contentHtml: `
      <p>The iPhone 11 Pro shipped with iOS 13 and continues to receive major updates, including iOS 26. It shares the same A13 Bionic chip as the standard iPhone 11, which means both devices follow the same software support timeline.</p>
      <p>The A13 Bionic provides sufficient performance for current iOS features, though some processor-intensive features in newer iOS versions may be unavailable or limited on this hardware.</p>
      <p>Based on Apple's historical patterns — typically six to seven years of major iOS updates — the iPhone 11 Pro is likely in its final one to two years of receiving major iOS releases. After that, Apple will transition it to security-only updates.</p>
    `,
    whatVersion: {
      heading: "What iOS Version Does the iPhone 11 Pro Support?",
      contentHtml: `
        <p>The iPhone 11 Pro currently supports <strong>iOS 26</strong>, the latest major release from Apple. This provides full access to current app frameworks, security updates, and new features.</p>
        <p>Key advantages of remaining on a supported iOS version:</p>
        <ul>
          <li><strong>Full app compatibility</strong> — All current App Store apps work without restriction.</li>
          <li><strong>Regular security patches</strong> — Apple actively patches vulnerabilities for supported devices.</li>
          <li><strong>Banking and payment app support</strong> — Canadian banking apps (TD, RBC, Scotiabank, BMO) and payment services fully support iOS 26.</li>
        </ul>
        <p>This is a meaningful advantage over the previous-generation <a href="/devices/iphone-xs">iPhone XS</a> and <a href="/devices/iphone-xr">iPhone XR</a>, which no longer receive major iOS updates.</p>
        <p>Sources: <a href="https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios" target="_blank" rel="noopener noreferrer">Apple – iPhone models compatible with iOS</a></p>
      `,
    },
  },

  // ── What Happens When Updates Stop ──
  updateDeprecation: {
    heading: "What Happens When the iPhone 11 Pro Eventually Stops Getting iOS Updates?",
    contentHtml: `
      <p>The iPhone 11 Pro still receives iOS updates as of 2026, but based on Apple's patterns, it's approaching the end of its major update lifecycle. When updates do stop, the device continues to function — calls, messaging, browsing, and installed apps work normally.</p>
      <p>The primary impact is <strong>gradual app compatibility loss</strong>. Developers build against the latest iOS SDKs, and older versions slowly lose support. This transition typically takes one to two years after the last major update before users notice meaningful gaps.</p>
      <p>The 11 Pro's OLED display, triple-camera system, and stainless steel build will continue to deliver a premium experience regardless of software update status — the hardware doesn't degrade when updates stop.</p>
    `,
    appCompatibility: {
      heading: "App Compatibility for Canadian Users",
      contentHtml: `
        <p>Because the iPhone 11 Pro currently supports iOS 26, Canadian users have <strong>full app compatibility</strong> today:</p>
        <ul>
          <li><strong>Banking apps</strong> — TD, RBC, Scotiabank, BMO, and all major Canadian banks fully support iOS 26.</li>
          <li><strong>Transit and payment apps</strong> — Presto, Apple Pay, and city transit apps work without limitation.</li>
          <li><strong>Government services</strong> — CRA My Account, provincial health apps, and digital ID services are fully compatible.</li>
          <li><strong>Two-factor authentication</strong> — All major authenticator apps are supported.</li>
        </ul>
        <p>This gives the 11 Pro a significant advantage over the <a href="/devices/iphone-xs">iPhone XS</a> generation, where some of these apps are beginning to show compatibility warnings.</p>
      `,
    },
  },

  // ── Is It Worth Fixing? ──
  worthFixing: {
    heading: "Is the iPhone 11 Pro Worth Fixing in 2026?",
    contentHtml: `
      <p>From our experience, the iPhone 11 Pro's repair viability sits between the standard iPhone 11 and the older XS models. It benefits from active iOS support and good parts availability, but its OLED screen increases repair costs compared to the LCD-equipped iPhone 11. The decision depends on the type and number of repairs needed.</p>
    `,
    whenRepairMakesSense: {
      heading: "When Repairing an iPhone 11 Pro Usually Makes Sense",
      contentHtml: `
        <ul>
          <li><strong>Battery replacement</strong> — The most cost-effective repair. Restores daily battery life and removes performance throttling. Given the device's ongoing iOS support, battery replacement extends a phone that remains fully functional in the current software ecosystem.</li>
          <li><strong>Single-issue screen repair</strong> — While OLED replacement costs more than LCD, a screen-only repair on the 11 Pro is still worthwhile given the device's remaining software support and premium hardware quality.</li>
          <li><strong>Charging port or camera repairs</strong> — Individual component repairs remain cost-effective and extend the device's useful life significantly.</li>
          <li><strong>Data recovery</strong> — For devices containing irreplaceable data, repair is worthwhile regardless of the device's market value.</li>
        </ul>
      `,
    },
    whenUpgradeIsBetter: {
      heading: "When It's Often Better to Sell or Upgrade Instead",
      contentHtml: `
        <ul>
          <li><strong>OLED screen + back glass damage</strong> — The combined cost of replacing the Super Retina XDR OLED panel and the back glass (which is attached to a stainless steel frame) can approach or exceed the device's market value.</li>
          <li><strong>Face ID failure after drops</strong> — TrueDepth camera system repairs on the 11 Pro can be complex and costly, similar to the XS generation.</li>
          <li><strong>Multiple simultaneous repairs</strong> — When screen, battery, and back glass all need attention, the combined cost — driven primarily by the OLED panel — often favours trading in and upgrading.</li>
          <li><strong>Desire for 5G or MagSafe</strong> — Like the standard iPhone 11, the 11 Pro does not support 5G or MagSafe. If these features matter, upgrading to an iPhone 12 or later is the path forward.</li>
        </ul>
        <p>For a full list of iPhone repair services we offer, see our <a href="/repair/iphone">iPhone repair page</a>.</p>
      `,
    },
  },

  // ── Common Damage ──
  commonDamage: {
    heading: "Common iPhone 11 Pro Damage and What It Means",
    frontGlass: {
      heading: "OLED Display Damage",
      contentHtml: `
        <p>The iPhone 11 Pro uses a 5.8-inch Super Retina XDR OLED display — Apple's most advanced screen technology at the time of release. When the screen cracks, the entire OLED panel and digitizer assembly must be replaced as a single unit, making it significantly more expensive than the LCD replacement on the standard iPhone 11.</p>
        <p>OLED damage can present as visible cracks, colour distortion, green lines, or dead pixels — sometimes without any external cracking, typically after drops. These symptoms all require full panel replacement.</p>
        <p>Quality aftermarket OLED panels are available at lower price points than OEM. From our experience, most users find aftermarket replacements deliver excellent results for daily use, though colour accuracy may differ marginally from the original panel.</p>
      `,
    },
    backGlass: {
      heading: "Back Glass Damage",
      contentHtml: `
        <p>The iPhone 11 Pro features a stainless steel frame with a textured matte glass back — a distinctive design element of the Pro line. The back glass is adhered to the frame and requires either a full housing swap or careful glass-only removal.</p>
        <p>Back glass repair adds meaningful cost. For devices with back glass damage only, repair is usually worthwhile given the device's remaining iOS support. When combined with OLED screen damage, the total cost frequently exceeds the device's current market value — making a <a href="/trade-in">trade-in</a> the more practical option.</p>
      `,
    },
  },

  // ── Trading In or Upgrading ──
  tradeInUpgrade: {
    heading: "Trading In or Upgrading From an iPhone 11 Pro",
    contentHtml: `
      <p>The iPhone 11 Pro holds moderate trade-in value in 2026. Its ongoing iOS support, stainless steel build, and triple-camera system help it retain value better than the standard iPhone 11 or the older XS models.</p>
      <p>However, because the 11 Pro is a premium device, users often have higher expectations for camera quality and performance — areas where newer models offer significant improvements. The decision to upgrade often comes down to whether the user values the latest camera features and 5G connectivity.</p>
      <p>Common upgrade paths from the iPhone 11 Pro include:</p>
      <ul>
        <li>iPhone 12 or iPhone 12 Pro — First-generation 5G iPhones with MagSafe. The 12 Pro offers a familiar premium experience with updated internals.</li>
        <li><a href="https://shop.mobiletechlab.ca/products/iphone-12" target="_blank" rel="noopener noreferrer">Certified pre-owned iPhone 12</a> — Strong value option for users buying used.</li>
        <li>iPhone 13 Pro or 14 Pro — For users who want a meaningful leap in camera quality, battery life, and display technology (ProMotion 120Hz).</li>
      </ul>
      <p>For current trade-in values based on your device's specific condition, see our <a href="/trade-in">trade-in page</a>.</p>
    `,
  },

  // ── Decision Guide ──
  decisionGuide: {
    heading: "Should You Keep, Fix, or Upgrade Your iPhone 11 Pro?",
    contentHtml: `
      <p>The iPhone 11 Pro's repair decision is more nuanced than the standard iPhone 11 because of the OLED cost factor. Here's a practical framework:</p>
    `,
    scenarios: [
      {
        condition: "Battery wear or single minor issue",
        recommendation:
          "Repair is typically the right call. Battery replacement is cost-effective, and the device still receives iOS 26. For a single failing component — battery, charging port, or camera — repair extends a phone that remains competitive with current software and a strong camera system.",
      },
      {
        condition: "OLED screen damage (single issue)",
        recommendation:
          "Repair is usually worthwhile, but compare costs carefully. OLED replacement on the 11 Pro costs more than LCD replacement on the standard iPhone 11. If the rest of the device is in good condition and battery health is acceptable, screen-only repair still delivers good value given the device's ongoing iOS support.",
      },
      {
        condition: "Multiple major repairs needed",
        recommendation:
          "Trade-in plus upgrade is usually the better value. When OLED screen, back glass, and battery all need replacement, the combined cost — driven by the OLED panel — frequently approaches or exceeds the device's market value. Trading in puts cash toward a device with longer remaining support.",
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
    { label: "iPhone 11 Pro vs iPhone 11", slug: "iphone-11-pro-vs-iphone-11" },
    { label: "iPhone 11 Pro vs iPhone XS", slug: "iphone-11-pro-vs-iphone-xs" },
    { label: "iPhone 11 Pro vs iPhone 12 Pro", slug: "iphone-11-pro-vs-iphone-12-pro" },
    { label: "iPhone 11 Pro vs iPhone 12", slug: "iphone-11-pro-vs-iphone-12" },
  ],

  // ── FAQs ──
  faqHeading: "Frequently Asked Questions About the iPhone 11 Pro",
  faqs: [
    {
      question: "How long will the iPhone 11 Pro be supported?",
      answerHtml:
        "The iPhone 11 Pro currently supports iOS 26 and remains in Apple's active update window. Based on Apple's historical patterns, the A13 Bionic is likely in its final one to two years of receiving major iOS releases. After that, the device will transition to security-only updates. Source: <a href='https://support.apple.com/en-ca/guide/iphone/iphe3fa5df43/ios' target='_blank' rel='noopener noreferrer'>Apple</a>.",
    },
    {
      question: "Is the iPhone 11 Pro worth fixing?",
      answerHtml:
        "For battery-only or single-component repairs, yes — especially given its ongoing iOS support and premium camera system. However, the 11 Pro uses an OLED display that costs significantly more to replace than the LCD in the standard iPhone 11. If multiple major repairs are needed, the combined cost may favour upgrading instead.",
    },
    {
      question: "Can I still use an iPhone 11 Pro in 2026?",
      answerHtml:
        "Yes. The iPhone 11 Pro runs iOS 26, has full app compatibility, and its triple-camera system still produces excellent photos. The Super Retina XDR OLED display delivers a premium viewing experience. The main limitations compared to newer Pro models are the lack of 5G, MagSafe, ProMotion 120Hz display, and computational photography improvements.",
    },
    {
      question: "What is the resale value of an iPhone 11 Pro?",
      answerHtml:
        "The 11 Pro generally commands higher trade-in values than the standard iPhone 11 due to its OLED display, stainless steel build, and triple camera. Value depends on condition, battery health, and storage capacity. For a current estimate, see our <a href='/trade-in'>trade-in page</a>.",
    },
    {
      question: "What's the difference between the iPhone 11 and iPhone 11 Pro?",
      answerHtml:
        "Both share the A13 Bionic chip and iOS 26 support. The key differences: the 11 Pro uses a 5.8-inch OLED display (vs. 6.1-inch LCD), has a triple-camera system (vs. dual), uses a stainless steel frame (vs. aluminium), and has a smaller 3,046 mAh battery (vs. 3,110 mAh). For repair purposes, the OLED display is the most significant difference — it costs more to replace than the iPhone 11's LCD.",
    },
  ],
};

export default iPhone11ProData;
