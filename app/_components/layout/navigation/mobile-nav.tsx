"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import menu from "../../../../public/assets/shared/mobile/icon-hamburger.svg";
import close from "../../../../public/assets/shared/mobile/icon-close.svg";
import { navLinks } from "./nav-links";
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = "";
        document.body.style.paddingRight = "";
      };
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-controls="mobile-nav"
        className="sm:hidden relative z-50 p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-white"
      >
        <Image
          src={close}
          alt=""
          aria-hidden="true"
          className={`w-6 h-6 transition-opacity duration-300 

            ${isOpen ? "block" : "hidden"}
${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        />
        <Image
          src={menu}
          alt=""
          aria-hidden="true"
          className={`w-6 h-6 transition-opacity duration-300 ${
            isOpen ? "hidden" : "block"
          } ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        />
      </button>

      <nav
        inert={!isOpen}
        id="mobile-nav"
        aria-label="Mobile navigation"
        className={`absolute sm:static left-0 right-0 bottom-0 translate-y-full bg-black 
text-white uppercase z-40 sm:hidden transition-all duration-300 ease-out origin-top ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="divide-y divide-gray-800">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={handleNavClick}
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
    </>
  );
}
