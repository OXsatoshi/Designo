import HeroBanner from "../_components/web-design/hero-banner";
import Image from "next/image";
import { ABOUT_DATA } from "../_components/web-design/projets.data";
import AboutCard from "../_components/out-company/about-card";
import LocationList from "../_components/out-company/location-list";
export default async function Page() {
  return (
    <>
      <div>
        <Image
          alt=""
          src={"/assets/about/desktop/image-about-hero.jpg"}
          width={476}
          height={480}
          className="w-full object-fit hidden sm:block"
        />
        <Image
          alt=""
          src={"/assets/about/mobile/image-about-hero.jpg"}
          width={325}
          height={370}
          className="w-full object-fit sm:hidden"
        />
        <HeroBanner
          title="About Us"
          description="Founded in 2010, we are a creative agency that produces lasting results for 
      our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft 
      designs that make real impact. We’re always looking forward to creating brands, products, 
      and digital experiences that connect with our clients’ audiences."
        />
      </div>
      <AboutCard
        title={ABOUT_DATA[0].title}
        image={ABOUT_DATA[0].image}
        p1={ABOUT_DATA[0].p1}
        p2={ABOUT_DATA[0].p2}
      />

      <LocationList />
      <AboutCard
        title={ABOUT_DATA[1].title}
        image={ABOUT_DATA[1].image}
        p1={ABOUT_DATA[1].p1}
        p2={ABOUT_DATA[1].p2}
      />
    </>
  );
}
