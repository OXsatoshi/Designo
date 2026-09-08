import Link from "next/link";
const categories = [
  {
    id: "web",
    title: "web design",
    href: "/web-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-web-design.jpg')]",
  },
  {
    id: "app",
    title: "app design",
    href: "/app-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-app-design.jpg')]",
  },
  {
    id: "graphic",
    title: "graphic design",
    href: "/graphic-design",
    bgClassName: "bg-[url('/assets/home/mobile/image-graphic-design.jpg')]",
  },
];

type CategoryId = "web" | "app" | "graphic";
interface CategoryToExcludeFromRendering {
  id: CategoryId | "";
}
export default function CategoryGrid({
  id = "",
}: CategoryToExcludeFromRendering) {
  return (
    <section
      aria-labelledby="categories-heading"
      className="px-6 my-20 pbe-20 sm:px-8"
    >
      <h2 id="categories-heading" className="sr-only">
        Our Design Services
      </h2>

      <ul className="flex flex-col gap-6">
        {categories
          .filter((c) => c.id !== id)
          .map((category) => (
            <li key={category.href}>
              <Link
                href={category.href}
                className={`group relative flex flex-col items-center justify-center min-h-[250px] 
rounded-2xl p-6 text-center text-white transition-all duration-300 overflow-hidden bg-cover 
bg-center ${category.bgClassName}`}
              >
                <div
                  className="absolute inset-0 bg-black/50 group-hover:bg-peach/80 transition-colors duration-300"
                  aria-hidden="true"
                />

                <div className="relative  flex flex-col items-center gap-3">
                  <h3 className="text-[28px] leading-[36px] font-medium tracking-[1.4px] uppercase">
                    {category.title}
                  </h3>
                  <p className="flex items-center gap-4 text-h3 tracking-[5px] uppercase font-medium">
                    View Projects
                    <span
                      aria-hidden="true"
                      className="text-peach group-hover:translate-x-1 transition-transform"
                    >
                      &gt;
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
}
