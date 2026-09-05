import logo from "../../../public/assets/shared/desktop/logo-dark.png";
import DesktopNav from "./navigation/desktop-nav";
import MobileNav from "./navigation/mobile-nav";

import Image from "next/image";
export default function Heading() {
  return (
    <header className="py-3 px-3 relative flex justify-between items-center">
      <div>
        <Image
          src={logo}
          alt="Company logo"
          className="w-49 h-6.75 object-contain"
        />
      </div>
      <div>
        <MobileNav />
        <DesktopNav />
      </div>
    </header>
  );
}
