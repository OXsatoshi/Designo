import Link from "next/link";
import Image from "next/image";
import type { ProjectItem } from "./projets.data";

export default function ProjectGrid({ projects }: { projects: ProjectItem[] }) {
  return (
    <section
      aria-labelledby="projects-heading"
      className="px-6 py-15 max-w-[1110px] mx-auto"
    >
      <h2 id="projects-heading" className="sr-only">
        Web Design Projects
      </h2>

      {/* Grid: 1 column on mobile, 3 columns at md: breakpoint */}
      <ul className="flex flex-col gap-10 md:grid md:grid-cols-3 md:gap-8">
        {projects.map((project) => (
          <li key={project.title} className="w-full h-full">
            <Link
              href={project.href}
              className="group flex flex-col h-full rounded-2xl overflow-hidden text-center transition-colors sm:grid sm:grid-cols-2 md:flex md:flex-col duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach"
            >
              {/* Image Container */}
              <div className="relative w-full aspect-[327/320] bg-light-peach">
                <Image
                  src={project.image}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-col items-center justify-center gap-4 bg-light-peach p-8 group-hover:bg-peach transition-colors duration-300 min-h-[158px] grow">
                <h3 className="text-preset-4 text-peach group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-body text-dark-grey group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
