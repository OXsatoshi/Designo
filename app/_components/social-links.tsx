import Image from "next/image";
import Link from "next/link";
export interface SocialLink {
  name: string;
  href: string;
  iconUrl: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    iconUrl: "/assets/shared/desktop/icon-facebook.svg",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    iconUrl: "/assets/shared/desktop/icon-youtube.svg",
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    iconUrl: "/assets/shared/desktop/icon-twitter.svg",
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com",
    iconUrl: "/assets/shared/desktop/icon-pinterest.svg",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    iconUrl: "/assets/shared/desktop/icon-instagram.svg",
  },
];
export function SocialMediaList() {
  return (
    <ul className="flex items-center gap-4">
      {SOCIAL_LINKS.map((social) => (
        <li key={social.name}>
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit Designo on ${social.name}`}
            className="group p-1 inline-block focus-visible:outline-2 focus-visible:outline-peach"
          >
            <Image
              src={social.iconUrl}
              alt=""
              aria-hidden="true"
              width={24}
              height={24}
              className="transition-opacity duration-200 group-hover:opacity-75"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
