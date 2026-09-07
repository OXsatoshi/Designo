import Link from "next/link";

import Image from "next/image";
import logo from "../../../public/assets/shared/desktop/logo-light.png";
import { navLinks } from "./navigation/nav-links";
import { SocialMediaList } from "../social-links";
function TalkAbout() {
  return (
    <div
      className="absolute top-0 -translate-y-1/2 flex flex-col justify-center items-center gap-8 text-center  bg-peach 
      rounded-2xl py-10 px-6 text-white"
    >
      <h3 className="text-preset-2">Let’s talk about your project</h3>
      <p className="text-body">
        Ready to take it to the next level? Contact us today and find out how
        our expertise can help your business grow.
      </p>
      <Link
        href="/about"
        className="bg-white text-dark-grey text-h3 px-6 py-4 rounded-lg font-medium uppercase 
        tracking-widest transition-colors duration-200 hover:bg-light-peach hover:text-white 
        active:bg-light-peach active:text-white focus-visible:outline-2 focus-visible:outline-offset-2 
        focus-visible:outline-white"
      >
        Get in Touch
      </Link>
    </div>
  );
}
export default function Footer() {
  return (
    <footer className="relative flex flex-col justify-center  items-center gap-10 py-6 px-6 pbs-60 mbs-60 bg-black">
      <TalkAbout />
      <div>
        <Link href="/" aria-label="Designo Homepage">
          <Image
            src={logo}
            alt=""
            className="w-49 h-6.75 object-contain  mx-auto"
          />
        </Link>
      </div>
      <nav
        aria-label="Footer navigation"
        className={`text-white uppercase border-t border-t-dark-grey self-stretch`}
      >
        <ul>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block px-6 py-4 text-center text-sm font-medium tracking-wider 
                transition-colors duration-200 focus:outline-none focus-visible:ring-2 
                focus-visible:ring-inset focus-visible:ring-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <address
        className="not-italic w-full flex flex-col sm:flex-row items-center justify-between 
        text-center sm:text-left gap-10 opacity-50 text-body text-white"
      >
        <div>
          <span className="block font-bold">Designo Central Office</span>
          <span className="block">3886 Wellington Street</span>
          <span className="block">Toronto, Ontario M9C 3J5</span>
        </div>

        <div>
          <span className="block font-bold">Contact Us (Central Office)</span>
          <span className="block">
            P :{" "}
            <a
              href="tel:+12538638967"
              className="hover:underline focus-visible:outline-1 focus-visible:outline-white"
            >
              +1 253-863-8967
            </a>
          </span>
          <span className="block">
            M :{" "}
            <a
              href="mailto:contact@designo.co"
              className="hover:underline focus-visible:outline-1 focus-visible:outline-white"
            >
              contact@designo.co
            </a>
          </span>
        </div>

        <div className="flex justify-center sm:justify-end w-full sm:w-auto">
          <SocialMediaList />
        </div>
      </address>
    </footer>
  );
}
