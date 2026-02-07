/** Shared types for the Device Hub page template */

export interface DeviceHubData {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalUrl: string;
  slug: string;

  // Hero
  deviceName: string;
  statusBadge: StatusBadge;
  heroImages?: DeviceImages;

  // At a Glance
  atAGlance: AtAGlanceField[];

  // Content sections
  everydayPerformance: ContentSection;
  batteryAndAging: ContentSection;
  camera: ContentSection;
  iosSupport: IosSupportSection;
  repairViability: RepairViabilitySection;
  resaleContext: ContentSection;
  decisionFraming: DecisionScenario[];
  comparisons: ComparisonLink[];
  faqs: DeviceHubFAQ[];
}

export interface StatusBadge {
  label: string;
  variant: "supported" | "aging" | "deprecated";
}

export interface DeviceImages {
  front?: string;
  back?: string;
  alt: string;
}

export interface AtAGlanceField {
  label: string;
  value: string;
}

export interface ContentSection {
  paragraphs: string[];
  bullets?: string[];
}

export interface IosSupportSection extends ContentSection {
  currentVersion: string;
  deprecationStatus: string;
  affectedApps?: string[];
}

export interface RepairViabilitySection extends ContentSection {
  commonRepairs: CommonRepair[];
  images?: {
    frontDamage?: string;
    frontDamageAlt?: string;
    backDamage?: string;
    backDamageAlt?: string;
  };
}

export interface CommonRepair {
  name: string;
  description: string;
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
  answer: string;
}
