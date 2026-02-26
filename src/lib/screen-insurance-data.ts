// ============================================================
// Screen Insurance — Dynamic Pricing Data
// ============================================================
// To update pricing:
//   1. Change a model's premiumPartCost → insurance price recalculates
//   2. Change INSURANCE_MULTIPLIER → all models reprice
//   3. Change MIN_INSURANCE_PRICE → only affects cheap models
// ============================================================

/** Multiplier applied to Premium part cost to derive insurance price */
export const INSURANCE_MULTIPLIER = 0.50;

/** Minimum insurance price floor (so old/cheap models still yield viable plans) */
export const MIN_INSURANCE_PRICE = 29;

// ------------------------------------------------------------
// Part cost table — single source of truth
// ------------------------------------------------------------

export interface ScreenPartCost {
  model: string;
  family: string;
  slug: string;
  premiumPartCost: number;
}

export const SCREEN_PART_COSTS: ScreenPartCost[] = [
  // iPhone 16 series
  { model: "iPhone 16 Pro Max", family: "iPhone 16 series", slug: "iphone-16-pro-max", premiumPartCost: 160 },
  { model: "iPhone 16 Pro", family: "iPhone 16 series", slug: "iphone-16-pro", premiumPartCost: 145 },
  { model: "iPhone 16 Plus", family: "iPhone 16 series", slug: "iphone-16-plus", premiumPartCost: 130 },
  { model: "iPhone 16", family: "iPhone 16 series", slug: "iphone-16", premiumPartCost: 120 },

  // iPhone 15 series
  { model: "iPhone 15 Pro Max", family: "iPhone 15 series", slug: "iphone-15-pro-max", premiumPartCost: 140 },
  { model: "iPhone 15 Pro", family: "iPhone 15 series", slug: "iphone-15-pro", premiumPartCost: 130 },
  { model: "iPhone 15 Plus", family: "iPhone 15 series", slug: "iphone-15-plus", premiumPartCost: 110 },
  { model: "iPhone 15", family: "iPhone 15 series", slug: "iphone-15", premiumPartCost: 100 },

  // iPhone 14 series
  { model: "iPhone 14 Pro Max", family: "iPhone 14 series", slug: "iphone-14-pro-max", premiumPartCost: 130 },
  { model: "iPhone 14 Pro", family: "iPhone 14 series", slug: "iphone-14-pro", premiumPartCost: 120 },
  { model: "iPhone 14 Plus", family: "iPhone 14 series", slug: "iphone-14-plus", premiumPartCost: 100 },
  { model: "iPhone 14", family: "iPhone 14 series", slug: "iphone-14", premiumPartCost: 90 },

  // iPhone 13 series
  { model: "iPhone 13 Pro Max", family: "iPhone 13 series", slug: "iphone-13-pro-max", premiumPartCost: 110 },
  { model: "iPhone 13 Pro", family: "iPhone 13 series", slug: "iphone-13-pro", premiumPartCost: 100 },
  { model: "iPhone 13", family: "iPhone 13 series", slug: "iphone-13", premiumPartCost: 80 },
  { model: "iPhone 13 Mini", family: "iPhone 13 series", slug: "iphone-13-mini", premiumPartCost: 80 },

  // iPhone 12 series
  { model: "iPhone 12 Pro Max", family: "iPhone 12 series", slug: "iphone-12-pro-max", premiumPartCost: 90 },
  { model: "iPhone 12 Pro", family: "iPhone 12 series", slug: "iphone-12-pro", premiumPartCost: 80 },
  { model: "iPhone 12", family: "iPhone 12 series", slug: "iphone-12", premiumPartCost: 75 },
  { model: "iPhone 12 Mini", family: "iPhone 12 series", slug: "iphone-12-mini", premiumPartCost: 75 },

  // iPhone 11 series
  { model: "iPhone 11 Pro Max", family: "iPhone 11 series", slug: "iphone-11-pro-max", premiumPartCost: 80 },
  { model: "iPhone 11 Pro", family: "iPhone 11 series", slug: "iphone-11-pro", premiumPartCost: 75 },
  { model: "iPhone 11", family: "iPhone 11 series", slug: "iphone-11", premiumPartCost: 65 },

  // iPhone SE series
  { model: "iPhone SE (3rd Gen)", family: "iPhone SE series", slug: "iphone-se-3", premiumPartCost: 60 },
  { model: "iPhone SE (2nd Gen)", family: "iPhone SE series", slug: "iphone-se-2", premiumPartCost: 55 },

  // iPhone X series
  { model: "iPhone XS Max", family: "iPhone X series", slug: "iphone-xs-max", premiumPartCost: 75 },
  { model: "iPhone XS", family: "iPhone X series", slug: "iphone-xs", premiumPartCost: 70 },
  { model: "iPhone XR", family: "iPhone X series", slug: "iphone-xr", premiumPartCost: 60 },
  { model: "iPhone X", family: "iPhone X series", slug: "iphone-x", premiumPartCost: 65 },
];

// ------------------------------------------------------------
// Pricing function
// ------------------------------------------------------------

export function getInsurancePrice(premiumPartCost: number): number {
  return Math.max(Math.round(premiumPartCost * INSURANCE_MULTIPLIER), MIN_INSURANCE_PRICE);
}

export function getInsurancePriceForModel(slug: string): number | null {
  const model = SCREEN_PART_COSTS.find((m) => m.slug === slug);
  if (!model) return null;
  return getInsurancePrice(model.premiumPartCost);
}

/** Get unique family names in display order */
export function getFamilies(): string[] {
  const seen = new Set<string>();
  return SCREEN_PART_COSTS.reduce<string[]>((acc, m) => {
    if (!seen.has(m.family)) {
      seen.add(m.family);
      acc.push(m.family);
    }
    return acc;
  }, []);
}

/** Get models for a given family */
export function getModelsByFamily(family: string): ScreenPartCost[] {
  return SCREEN_PART_COSTS.filter((m) => m.family === family);
}

// ------------------------------------------------------------
// Coverage details
// ------------------------------------------------------------

export const COVERAGE_INCLUDED = [
  "Cracked or shattered screen glass",
  "LCD / OLED display damage",
  "Touch responsiveness failure",
  "Screen discoloration or dead pixels",
  "Premium-quality replacement part",
  "Valid for 12 months from date of purchase",
  "Covers one device per plan",
];

export const COVERAGE_EXCLUDED = [
  "Water or liquid damage",
  "Cosmetic scratches without functional impact",
  "Intentional damage or misuse",
  "Damage to back glass or housing",
  "Software-related display issues",
];

// ------------------------------------------------------------
// How it works steps
// ------------------------------------------------------------

export const HOW_IT_WORKS_STEPS = [
  {
    step: 1,
    title: "Sign Up for $50",
    description: "Get started with a one-time $50 payment and receive a free screen protector to keep your device safe from day one.",
  },
  {
    step: 2,
    title: "Screen Damaged? You're Covered",
    description: "You're covered up to $500 in screen repair for one full year. Just bring your device to Mobile Tech Lab.",
  },
  {
    step: 3,
    title: "Enjoy Your New Screen",
    description: "Walk out with a brand-new screen and a free 1-year warranty on the replacement. Total peace of mind.",
  },
];

// ------------------------------------------------------------
// FAQ
// ------------------------------------------------------------

export const INSURANCE_FAQS = [
  {
    question: "What does screen protection cover?",
    answer:
      "Our screen protection covers one Premium screen replacement for your device within 12 months of purchase. This includes cracked glass, LCD/OLED damage, touch issues, and dead pixels. Coverage is for the screen only.",
  },
  {
    question: "How long does coverage last?",
    answer:
      "Coverage is valid for one year (12 months) from the date of purchase. After that, the plan expires — whether or not you've used it.",
  },
  {
    question: "Is this a monthly subscription?",
    answer:
      "No — it's a one-time payment. Pay once and you're covered for one screen replacement within 12 months. No recurring charges.",
  },
  {
    question: "What quality of screen do I get?",
    answer:
      "You receive a Premium-quality screen — our highest-quality aftermarket part with OEM-level color accuracy, brightness, and touch responsiveness.",
  },
  {
    question: "Can I use it at any Mobile Tech Lab location?",
    answer:
      "Yes. You can redeem your screen protection at any Mobile Tech Lab location in Manitoba, including our Winnipeg and Thompson stores, or via our mail-in service.",
  },
  {
    question: "How long does the replacement take?",
    answer:
      "Most screen replacements are completed in 30–60 minutes while you wait. Walk-ins are welcome, or you can book an appointment for guaranteed same-day service.",
  },
  {
    question: "What if my phone has other damage too?",
    answer:
      "Screen protection covers the screen only. If your device has additional damage (e.g., water damage, bent frame), we'll provide a separate quote for those repairs at our standard rates.",
  },
  {
    question: "Can I buy protection for any iPhone?",
    answer:
      "Yes! Screen protection is available for any iPhone — whether you purchased it from us, had it repaired by us before, or neither. We just need to verify the screen is in good condition at the time of purchase.",
  },
  {
    question: "Can I cover multiple devices?",
    answer:
      "Each plan covers one device only. To protect multiple phones, purchase a separate plan for each device.",
  },
];
