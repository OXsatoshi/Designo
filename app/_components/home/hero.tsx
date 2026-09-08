import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <section
      className="pbs-10 px-3 sm:mx-8 rounded-2xl text-center gap-3 flex flex-col justify-center items-center bg-peach bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] 
      bg-no-repeat bg-position-[left_center] overflow-hidden md:flex-row max-w-[1110px] mx-auto md:mx-auto"
    >
      <div className="md:flex flex-col gap-3 justify-center items-center">
        <h1 className="text-preset-3 text-white max-w-[25ch]">
          Award-winning custom designs and digital branding solutions
        </h1>
        <p className="text-body text-white max-w-[45ch]">
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </p>
        <Link
          href="/our-company"
          className="bg-white text-dark-grey text-h3 px-6 py-4 rounded-lg font-medium uppercase 
        tracking-widest transition-colors duration-200 hover:bg-light-peach hover:text-white 
        active:bg-light-peach active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-white"
        >
          LEARN MORE
        </Link>
      </div>
      <div className="relative w-full max-w-[327px] mx-auto -mt-18 overflow-hidden pointer-events-none">
        <Image
          src="/assets/home/desktop/image-hero-phone.png"
          alt=""
          aria-hidden="true"
          width={624}
          height={913}
          priority
          className="w-[140%] max-w-none h-auto -translate-x-[14.28%] object-cover object-top -mb-[75%]"
        />
      </div>
    </section>
  );
}
