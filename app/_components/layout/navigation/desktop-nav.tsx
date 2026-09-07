import Link from "next/link";
import { navLinks } from "./nav-links";

export default function DesktopNav() {
  return (
    <nav aria-label="Primary navigation" className="hidden sm:block">
      <ul className="flex items-center gap-8">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm tracking-[2px] text-dark-grey hover:underline uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach font-medium"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
