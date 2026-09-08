import Image from "next/image";
import Link from "next/link";
import { LOCATIONS } from "./location.data";

export default function LocationList() {
  return (
    <section
      aria-labelledby="locations-heading"
      className="px-6 my-20 max-w-7xl mx-auto"
    >
      <h2 id="locations-heading" className="sr-only">
        Our Locations
      </h2>

      <ul className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
        {LOCATIONS.map((location) => (
          <li key={location.name} className="w-full lg:w-1/3">
            <div className="flex flex-col items-center text-center gap-8">
              <div className="relative shrink-0 flex items-center justify-center w-[202px] h-[202px]">
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center bg-contain -z-10 ${location.bgRotationClass}`}
                />
                <Image
                  src={location.image}
                  width={202}
                  height={202}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-8">
                <h3 className="text-[20px] leading-[26px] font-medium tracking-[5px] uppercase text-dark-grey">
                  {location.name}
                </h3>
                <Link
                  href={location.href}
                  className="bg-peach text-white text-h3 px-5 py-4 rounded-lg font-medium uppercase tracking-widest hover:bg-light-peach hover:text-white active:bg-light-peach transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peach"
                >
                  See Location
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
