/**
 * Centralized data for all mail-in service areas.
 * Adding a new town here automatically updates:
 * - /service-areas/ hub page
 * - Header navigation dropdown
 */

export interface ServiceArea {
  name: string;
  slug: string;
  distance: string;
  deliveryTime: string;
  description?: string;
}

export const SERVICE_AREAS: ServiceArea[] = [
  {
    name: "Steinbach, MB",
    slug: "steinbach",
    distance: "~60 km",
    deliveryTime: "1-day delivery",
    description: "Southeast Manitoba",
  },
  {
    name: "Brandon, MB",
    slug: "brandon",
    distance: "~215 km",
    deliveryTime: "1-2 day delivery",
    description: "Western Manitoba",
  },
  {
    name: "Portage la Prairie, MB",
    slug: "portage-la-prairie",
    distance: "~85 km",
    deliveryTime: "1-day delivery",
    description: "Central Manitoba",
  },
  {
    name: "Selkirk, MB",
    slug: "selkirk",
    distance: "~35 km",
    deliveryTime: "1-day delivery",
    description: "Interlake region",
  },
   {
     name: "The Pas, MB",
     slug: "the-pas",
     distance: "~630 km",
     deliveryTime: "1-2 day delivery",
     description: "Northern Manitoba (Thompson in-person or mail-in)",
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
    name: area.name,
    href: getServiceAreaHref(area.slug),
  }));
