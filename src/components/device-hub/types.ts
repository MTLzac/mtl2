/** Shared types for the Device Hub page template (v2 — content-brief aligned) */

export interface DeviceHubData {
  // ── SEO ──
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  slug: string;

  // ── Hero ──
  deviceName: string;
  h1: string;
  statusBadge: StatusBadge;
  heroImage?: string;
  heroImageAlt?: string;
  /** HTML paragraph displayed immediately after H1 — featured-snippet style */
  featuredSnippetHtml: string;

  // ── At a Glance ──
  atAGlance: AtAGlanceField[];

  // ── Viability Scoring (optional — appears between At a Glance and iOS Support) ──
  viabilityScores?: ViabilityScore[];
  /** Quick takeaway summary HTML — rendered immediately after the scoring section */
  quickTakeawayHtml?: string;

  // ── iOS Support Status (H2) ──
  iosSupportStatus: HtmlSection & {
    /** H3 — What iOS Version Does the {Device} Support? */
    whatVersion: HtmlSubSection;
  };

  // ── What Happens When Updates Stop (H2) ──
  updateDeprecation: HtmlSection & {
    /** H3 — App Compatibility Issues Canadian Users May Notice */
    appCompatibility: HtmlSubSection;
  };

  // ── Is the {Device} Worth Fixing? (H2) ──
  worthFixing: HtmlSection & {
    /** H3 — When Repairing Usually Makes Sense */
    whenRepairMakesSense: HtmlSubSection;
    /** H3 — When It's Often Better to Sell or Upgrade */
    whenUpgradeIsBetter: HtmlSubSection;
  };

  // ── Common Damage (H2) ──
  commonDamage: {
    heading: string;
    frontGlass: DamageSubSection;
    backGlass: DamageSubSection;
  };

  // ── Trading In or Upgrading (H2) ──
  tradeInUpgrade: HtmlSection;

  // ── Decision Guide (H2) ──
  decisionGuide: {
    heading: string;
    contentHtml: string;
    scenarios: DecisionScenario[];
    disclaimer: string;
  };

  // ── Comparison Entry Points ──
  comparisons: ComparisonLink[];

  // ── FAQs ──
  faqHeading: string;
  faqs: DeviceHubFAQ[];
}

// ── Supporting types ──

export interface StatusBadge {
  label: string;
  variant: "supported" | "aging" | "deprecated";
}

export interface AtAGlanceField {
  label: string;
  value: string;
}

export interface ViabilityScore {
  /** e.g. "Battery Life", "Repair Cost (Relative)" */
  label: string;
  /** Integer 1–5 */
  score: number;
  /** 1–2 sentence explanation */
  explanation: string;
}

export interface HtmlSection {
  heading: string;
  /** Rich HTML content — supports internal links, outbound links, lists */
  contentHtml: string;
}

export interface HtmlSubSection {
  heading: string;
  contentHtml: string;
}

export interface DamageSubSection {
  heading: string;
  contentHtml: string;
  image?: string;
  imageAlt?: string;
}

export interface DecisionScenario {
  condition: string;
  recommendation: string;
}

export interface ComparisonLink {
  label: string;
  slug: string;
}

export interface DeviceHubFAQ {
  question: string;
  /** HTML answer — supports links for LLM citability */
  answerHtml: string;
}
