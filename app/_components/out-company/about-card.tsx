import Image from "next/image";
interface Item {
  title: string;
  image: string[];
  p1: string;
  p2: string;
}
export default function AboutCard(project: Item) {
  return (
    <section
      aria-labelledby="about-card"
      className=" max-w-7xl mx-auto sm:px-8"
    >
      <div
        className="group flex flex-col overflow-hidden text-center transition-colors max-w-[1110px] mx-auto
        duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peach md:flex-row"
      >
        <div className="relative w-full aspect-[327/320] bg-light-peach">
          <Image
            src={project.image[1]}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top hidden sm:block  sm:rounded-t-2xl"
          />
          <Image
            src={project.image[0]}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-top sm:hidden"
          />
        </div>

        <div
          className="flex flex-col items-center justify-center gap-4 bg-light-peach p-8 
          group-hover:bg-peach transition-colors duration-300 min-h-[158px] sm:rounded-b-2xl"
        >
          <h3
            id="about-card"
            className="text-preset-4 text-peach group-hover:text-white transition-colors duration-300"
          >
            {project.title}
          </h3>
          <p className="text-body text-dark-grey group-hover:text-white transition-colors duration-300">
            {project.p1}
          </p>
          <p className="text-body text-dark-grey group-hover:text-white transition-colors duration-300">
            {project.p2}
          </p>
        </div>
      </div>
    </section>
  );
}
