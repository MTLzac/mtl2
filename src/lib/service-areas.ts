/**
 * Centralized data for all mail-in service areas.
 * Adding a new town here automatically updates:
 * - /service-areas/ hub page
 * - Header navigation dropdown
 */

export interface ServiceArea {
  name: string;
  slug: string;
  province: string;
  provinceShort: string;
  distance: string;
  deliveryTime: string;
  description?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  // Manitoba
  {
    name: "Steinbach",
    slug: "steinbach",
    province: "Manitoba",
    provinceShort: "MB",
    distance: "~60 km",
    deliveryTime: "1-day delivery",
    description: "Southeast Manitoba",
  },
  {
    name: "Brandon",
    slug: "brandon",
    province: "Manitoba",
    provinceShort: "MB",
    distance: "~215 km",
    deliveryTime: "1-2 day delivery",
    description: "Western Manitoba",
  },
  {
    name: "Portage la Prairie",
    slug: "portage-la-prairie",
    province: "Manitoba",
    provinceShort: "MB",
    distance: "~85 km",
    deliveryTime: "1-day delivery",
    description: "Central Manitoba",
  },
  {
    name: "Selkirk",
    slug: "selkirk",
    province: "Manitoba",
    provinceShort: "MB",
    distance: "~35 km",
    deliveryTime: "1-day delivery",
    description: "Interlake region",
  },
  {
    name: "The Pas",
    slug: "the-pas",
    province: "Manitoba",
    provinceShort: "MB",
    distance: "~630 km",
    deliveryTime: "1-2 day delivery",
    description: "Northern Manitoba (Thompson in-person or mail-in)",
  },
  // Saskatchewan
  {
    name: "Prince Albert",
    slug: "prince-albert",
    province: "Saskatchewan",
    provinceShort: "SK",
    distance: "~750 km",
    deliveryTime: "2-3 day delivery",
    description: "Central Saskatchewan",
  },
  // Ontario
  {
    name: "St. Catharines",
    slug: "st-catharines",
    province: "Ontario",
    provinceShort: "ON",
    distance: "~2,000 km",
    deliveryTime: "2-3 day delivery",
    description: "Niagara Region",
  },
];

/**
 * Helper to generate the href path from a service area slug
 */
export const getServiceAreaHref = (slug: string): string =>
  `/service-area/${slug}`;

/**
 * Get all service areas formatted for navigation menus
 */
export const getServiceAreasForNav = () =>
  SERVICE_AREAS.map((area) => ({
    name: `${area.name}, ${area.provinceShort}`,
    href: getServiceAreaHref(area.slug),
    province: area.province,
  }));

/**
 * Get service areas grouped by province
 */
export const getServiceAreasByProvince = () => {
  const grouped: Record<string, { name: string; href: string }[]> = {};
  SERVICE_AREAS.forEach((area) => {
    if (!grouped[area.province]) grouped[area.province] = [];
    grouped[area.province].push({
      name: `${area.name}, ${area.provinceShort}`,
      href: getServiceAreaHref(area.slug),
    });
  });
  return grouped;
};
