export interface LocationDetail {
  id: string;
  country: string;
  officeName: string;
  street: string;
  city: string;
  phone: string;
  email: string;
  coordinates: [number, number]; // [Latitude, Longitude]
}

export const LOCATION_DETAILS: LocationDetail[] = [
  {
    id: "canada",
    country: "Canada",
    officeName: "Designo Central Office",
    street: "3886 Wellington Street",
    city: "Toronto, Ontario M9C 3J5",
    phone: "+1 253-863-8967",
    email: "contact@designo.co",
    coordinates: [43.6532, -79.3832], // Toronto
  },
  {
    id: "australia",
    country: "Australia",
    officeName: "Designo AU Office",
    street: "19 Balonne Street",
    city: "New South Wales 2443",
    phone: "(02) 6720 9092",
    email: "contact@designo.au",
    coordinates: [-33.8688, 151.2093], // Sydney/NSW region
  },
  {
    id: "united-kingdom",
    country: "United Kingdom",
    officeName: "Designo UK Office",
    street: "13 Colorado Way",
    city: "Rhyd-y-fro SA8 9GA",
    phone: "078 7873 4130",
    email: "contact@designo.uk",
    coordinates: [51.5074, -0.1278], // UK Office region
  },
];
