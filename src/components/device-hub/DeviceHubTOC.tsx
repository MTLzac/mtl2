import { TableOfContents } from "@/components/repair/TableOfContents";
import type { DeviceHubData } from "./types";

/**
 * Derives Table-of-Contents items from the device hub data.
 * All IDs must match the section `id` attributes rendered
 * in DeviceHubTemplate.
 */
export const DeviceHubTOC = ({ data }: { data: DeviceHubData }) => {
  const items = [
    { id: "at-a-glance", label: "At a Glance" },
    { id: "ios-support", label: "iOS Support" },
    { id: "update-deprecation", label: "After Updates Stop" },
    { id: "worth-fixing", label: "Worth Fixing?" },
    { id: "common-damage", label: "Common Damage" },
    { id: "trade-in-upgrade", label: "Trade-In / Upgrade" },
    { id: "decision-guide", label: "Decision Guide" },
    ...(data.comparisons.length > 0
      ? [{ id: "comparisons", label: "Comparisons" }]
      : []),
    { id: "faqs", label: "FAQs" },
  ];

  return <TableOfContents items={items} />;
};
