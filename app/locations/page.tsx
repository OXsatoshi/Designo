import { LOCATION_DETAILS } from "../_components/locations/locations-details.data";
import MapContainerWrapper from "../_components/locations/map-container-wrapper";

export default function LocationsSection() {
  return (
    <section
      aria-label="Office Locations"
      className="px-0 sm:px-6 my-10 sm:my-20 max-w-7xl mx-auto"
    >
      <ul className="flex flex-col gap-10 sm:gap-20">
        {LOCATION_DETAILS.map((loc, index) => {
          // Alternate desktop layout order (Map left / Text right vs Text left / Map right)
          const isEven = index % 2 === 0;

          return (
            <li
              key={loc.id}
              id={loc.id}
              className="flex flex-col lg:flex-row gap-8 items-center scroll-mt-32"
            >
              {/* 1. Map Canvas Box */}
              <div
                className={`w-full lg:w-1/3 h-[320px] sm:rounded-2xl overflow-hidden shrink-0 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <MapContainerWrapper center={loc.coordinates} />
              </div>

              {/* 2. Text Details Box */}
              <div
                className={`relative w-full lg:w-2/3 bg-light-peach sm:rounded-2xl p-8 sm:p-14 overflow-hidden ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                {/* Background Circle Pattern */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-two-circles.svg')] bg-no-repeat bg-left-bottom bg-contain opacity-30 pointer-events-none"
                />

                <div className="relative z-10 flex flex-col gap-6 text-center sm:text-left">
                  <h2 className="text-[32px] leading-[36px] sm:text-[40px] sm:leading-[48px] font-medium text-peach">
                    {loc.country}
                  </h2>

                  <address className="not-italic flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-24 text-dark-grey text-body">
                    {/* Address Stack */}
                    <div>
                      <span className="block font-bold">{loc.officeName}</span>
                      <span className="block">{loc.street}</span>
                      <span className="block">{loc.city}</span>
                    </div>

                    {/* Contact Stack */}
                    <div>
                      <span className="block font-bold">Contact</span>
                      <span className="block">P : {loc.phone}</span>
                      <span className="block">M : {loc.email}</span>
                    </div>
                  </address>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
