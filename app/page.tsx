import Link from "next/link";
import CategoryCard from "./_components/home/category-card";
import Hero from "./_components/home/hero";
import ValuesPropositions from "./_components/home/values-propos";
import Footer from "./_components/layout/footer";
import Heading from "./_components/layout/heading";
import CategoryGrid from "./_components/home/category-grid";
const categories = [
  {
    title: "web design",
    href: "/web-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-web-design.jpg')]",
  },
  {
    title: "app design",
    href: "/app-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-app-design.jpg')]",
  },
  {
    title: "graphic design",
    href: "/graphic-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-graphic-design.jpg')]",
  },
];
export default function Home() {
  return (
    <>
      <Heading />
      <Hero />

      <CategoryGrid />
      <ValuesPropositions />
      <Footer />
    </>
  );
}
