import Image from "next/image";
const values = [
  {
    title: "PASSIONATE",
    content: `Each project starts with an in-depth brand research to ensure we only create products 
that serve a purpose. We merge art, design, and technology into exciting new solutions.`,
    imgUrl: "/assets/home/desktop/illustration-passionate.svg",
  },
  {
    title: "RESOURCEFUL",
    content: `Everything that we do has a strategic purpose. We use an agile approach in all of our 
projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.`,

    imgUrl: "/assets/home/desktop/illustration-resourceful.svg",
  },
  {
    title: "FRIENDLY",
    content: ` We are a group of enthusiastic folks who know how to put people first. Our success 
depends on our customers, and we strive to give them the best experience a company can provide.`,

    imgUrl: "/assets/home/desktop/illustration-friendly.svg",
  },
];

export default function ValuesPropos() {
  return (
    <section aria-labelledby="proposed-values" className="px-6 my-20">
      <h2 id="proposed-values-heading" className="sr-only">
        Our add Value
      </h2>

      <ul className="flex flex-col gap-13">
        {values.map((value) => (
          <li key={value.title}>
            <div className="relative  flex flex-col items-center gap-3">
              <div className="min-w-20 min-h-20 bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] bg-no-repeat bg-cover">
                <Image
                  src={value.imgUrl}
                  width={202}
                  height={202}
                  alt=""
                  className="rounded-full"
                />
              </div>
              <h3 className="text-[28px] leading-[36px] font-medium tracking-[1.4px] uppercase">
                {value.title}
              </h3>
              <p className="flex items-center gap-4 text-body text-center font-medium">
                {value.content}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
