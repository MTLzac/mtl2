// Screen Quality Tiers and Device Data

export type TierType = "value" | "premium" | "genuine";

export interface TierInfo {
  name: string;
  tagline: string;
  badgeClass: string;
  benefits: string[];
}

export interface DeviceModel {
  name: string;
  tiers: TierType[];
  imagePlaceholder: string;
}

export interface DeviceBrand {
  name: string;
  models: DeviceModel[];
}

export const TIER_INFO: Record<TierType, TierInfo> = {
  value: {
    name: "Value",
    tagline: "Budget-Friendly",
    badgeClass: "bg-muted text-muted-foreground",
    benefits: [
      "Most affordable option",
      "Quality tested & inspected",
      "90-day warranty",
      "Great for older devices",
      "Same-day repairs available",
    ],
  },
  premium: {
    name: "Premium",
    tagline: "Best Balance",
    badgeClass: "bg-primary/10 text-primary border border-primary/20",
    benefits: [
      "Enhanced color accuracy",
      "Better touch responsiveness",
      "6-month warranty",
      "Ideal for daily drivers",
      "OEM-equivalent quality",
    ],
  },
  genuine: {
    name: "Genuine",
    tagline: "Factory Original",
    badgeClass: "bg-success/10 text-success border border-success/20",
    benefits: [
      "Factory-original Apple parts",
      "True Tone support retained",
      "Lifetime warranty",
      "Maximum resale value",
      "Official Apple quality",
    ],
  },
};

export const DEVICE_BRANDS: DeviceBrand[] = [
  {
    name: "Apple iPhone",
    models: [
      // iPhone 11 and newer - 3 tiers (value, premium, genuine)
      { name: "iPhone 15 Pro Max", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 15 Pro Max" },
      { name: "iPhone 15 Pro", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 15 Pro" },
      { name: "iPhone 15 Plus", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 15 Plus" },
      { name: "iPhone 15", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 15" },
      { name: "iPhone 14 Pro Max", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 14 Pro Max" },
      { name: "iPhone 14 Pro", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 14 Pro" },
      { name: "iPhone 14 Plus", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 14 Plus" },
      { name: "iPhone 14", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 14" },
      { name: "iPhone 13 Pro Max", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 13 Pro Max" },
      { name: "iPhone 13 Pro", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 13 Pro" },
      { name: "iPhone 13", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 13" },
      { name: "iPhone 13 Mini", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 13 Mini" },
      { name: "iPhone 12 Pro Max", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 12 Pro Max" },
      { name: "iPhone 12 Pro", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 12 Pro" },
      { name: "iPhone 12", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 12" },
      { name: "iPhone 12 Mini", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 12 Mini" },
      { name: "iPhone 11 Pro Max", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 11 Pro Max" },
      { name: "iPhone 11 Pro", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 11 Pro" },
      { name: "iPhone 11", tiers: ["value", "premium", "genuine"], imagePlaceholder: "iPhone 11" },
      // iPhone XR and older - 2 tiers (value, premium)
      { name: "iPhone XS Max", tiers: ["value", "premium"], imagePlaceholder: "iPhone XS Max" },
      { name: "iPhone XS", tiers: ["value", "premium"], imagePlaceholder: "iPhone XS" },
      { name: "iPhone XR", tiers: ["value", "premium"], imagePlaceholder: "iPhone XR" },
      { name: "iPhone X", tiers: ["value", "premium"], imagePlaceholder: "iPhone X" },
      { name: "iPhone 8 Plus", tiers: ["value", "premium"], imagePlaceholder: "iPhone 8 Plus" },
      { name: "iPhone 8", tiers: ["value", "premium"], imagePlaceholder: "iPhone 8" },
      { name: "iPhone 7 Plus", tiers: ["value", "premium"], imagePlaceholder: "iPhone 7 Plus" },
      { name: "iPhone 7", tiers: ["value", "premium"], imagePlaceholder: "iPhone 7" },
      { name: "iPhone 6s Plus", tiers: ["value", "premium"], imagePlaceholder: "iPhone 6s Plus" },
      { name: "iPhone 6s", tiers: ["value", "premium"], imagePlaceholder: "iPhone 6s" },
      { name: "iPhone 6 Plus", tiers: ["value", "premium"], imagePlaceholder: "iPhone 6 Plus" },
      { name: "iPhone 6", tiers: ["value", "premium"], imagePlaceholder: "iPhone 6" },
      { name: "iPhone SE (3rd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPhone SE 3rd Gen" },
      { name: "iPhone SE (2nd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPhone SE 2nd Gen" },
      { name: "iPhone SE (1st Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPhone SE 1st Gen" },
      { name: "iPhone 5s", tiers: ["value", "premium"], imagePlaceholder: "iPhone 5s" },
      { name: "iPhone 5c", tiers: ["value", "premium"], imagePlaceholder: "iPhone 5c" },
      { name: "iPhone 5", tiers: ["value", "premium"], imagePlaceholder: "iPhone 5" },
      { name: "iPhone 4s", tiers: ["value", "premium"], imagePlaceholder: "iPhone 4s" },
      { name: "iPhone 4", tiers: ["value", "premium"], imagePlaceholder: "iPhone 4" },
    ],
  },
  {
    name: "Apple iPad",
    models: [
      { name: "iPad Pro 12.9\" (6th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 12.9" },
      { name: "iPad Pro 12.9\" (5th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 12.9" },
      { name: "iPad Pro 12.9\" (4th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 12.9" },
      { name: "iPad Pro 12.9\" (3rd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 12.9" },
      { name: "iPad Pro 11\" (4th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 11" },
      { name: "iPad Pro 11\" (3rd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 11" },
      { name: "iPad Pro 11\" (2nd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 11" },
      { name: "iPad Pro 11\" (1st Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Pro 11" },
      { name: "iPad Air (5th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Air 5" },
      { name: "iPad Air (4th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Air 4" },
      { name: "iPad Air (3rd Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Air 3" },
      { name: "iPad (10th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad 10" },
      { name: "iPad (9th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad 9" },
      { name: "iPad (8th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad 8" },
      { name: "iPad (7th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad 7" },
      { name: "iPad Mini (6th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Mini 6" },
      { name: "iPad Mini (5th Gen)", tiers: ["value", "premium"], imagePlaceholder: "iPad Mini 5" },
    ],
  },
  {
    name: "Samsung Galaxy S",
    models: [
      { name: "Galaxy S24 Ultra", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S24 Ultra" },
      { name: "Galaxy S24+", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S24+" },
      { name: "Galaxy S24", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S24" },
      { name: "Galaxy S23 Ultra", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S23 Ultra" },
      { name: "Galaxy S23+", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S23+" },
      { name: "Galaxy S23", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S23" },
      { name: "Galaxy S22 Ultra", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S22 Ultra" },
      { name: "Galaxy S22+", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S22+" },
      { name: "Galaxy S22", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S22" },
      { name: "Galaxy S21 Ultra", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S21 Ultra" },
      { name: "Galaxy S21+", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S21+" },
      { name: "Galaxy S21", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S21" },
      { name: "Galaxy S21 FE", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S21 FE" },
      { name: "Galaxy S20 Ultra", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S20 Ultra" },
      { name: "Galaxy S20+", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S20+" },
      { name: "Galaxy S20", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S20" },
      { name: "Galaxy S20 FE", tiers: ["value", "premium"], imagePlaceholder: "Galaxy S20 FE" },
    ],
  },
];

export const FAQ_ITEMS = [
  {
    question: "What's the difference between screen quality tiers?",
    answer: "Our Value screens are budget-friendly aftermarket options that work great for basic use. Premium screens offer enhanced color accuracy and touch responsiveness, similar to OEM quality. Genuine screens (for newer iPhones) are factory-original Apple parts that retain features like True Tone.",
  },
  {
    question: "Which screen quality should I choose?",
    answer: "If you're on a budget or have an older device, Value is a solid choice. For daily drivers and phones you rely on heavily, Premium offers the best balance of quality and price. If you want factory-original quality and plan to keep or resell your iPhone, choose Genuine.",
  },
  {
    question: "Do all screen qualities come with a warranty?",
    answer: "Yes! Value screens include a 90-day warranty, Premium screens come with a 6-month warranty, and Genuine Apple screens include a lifetime warranty for your peace of mind.",
  },
  {
    question: "Will my Face ID / Touch ID still work?",
    answer: "Yes, all our screen replacements preserve your Face ID and Touch ID functionality. Our technicians are trained to properly transfer these components during the repair process.",
  },
  {
    question: "How long does a screen replacement take?",
    answer: "Most screen replacements are completed within 30-60 minutes. Walk-in appointments are welcome, and we also offer same-day mail-in repairs for your convenience.",
  },
];
