export interface LocationItem {
  name: string;
  image: string;
  href: string;
  bgRotationClass: string;
}

export const LOCATIONS: LocationItem[] = [
  {
    name: "CANADA",
    image: "/assets/shared/desktop/illustration-canada.svg",
    href: "/locations#canada",
    bgRotationClass: "rotate-90",
  },
  {
    name: "AUSTRALIA",
    image: "/assets/shared/desktop/illustration-australia.svg",
    href: "/locations#australia",
    bgRotationClass: "rotate-0",
  },
  {
    name: "UNITED KINGDOM",
    image: "/assets/shared/desktop/illustration-united-kingdom.svg",
    href: "/locations#united-kingdom",
    bgRotationClass: "-rotate-90",
  },
];
