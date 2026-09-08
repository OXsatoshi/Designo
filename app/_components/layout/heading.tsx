import Link from "next/link";
import logo from "../../../public/assets/shared/desktop/logo-dark.png";
import DesktopNav from "./navigation/desktop-nav";
import MobileNav from "./navigation/mobile-nav";

import Image from "next/image";
export default function Heading() {
  return (
    <header className="py-3 px-3 sm:px-8 relative flex justify-between items-center max-w-[1110px] mx-auto md:mx-auto md:px-0">
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Company logo"
          className="w-49 h-6.75 object-contain"
        />
      </Link>
      <div>
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
}
