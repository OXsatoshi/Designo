import Image from "next/image";

const values = [
  {
    title: "PASSIONATE",
    content:
      "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    imgUrl: "/assets/home/desktop/illustration-passionate.svg",
    // Standard rotation degrees per Figma spec for variety
    bgRotationClass: "rotate-0",
  },
  {
    title: "RESOURCEFUL",
    content:
      "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    imgUrl: "/assets/home/desktop/illustration-resourceful.svg",
    bgRotationClass: "-rotate-90",
  },
  {
    title: "FRIENDLY",
    content:
      "We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
    imgUrl: "/assets/home/desktop/illustration-friendly.svg",
    bgRotationClass: "rotate-90",
  },
];

export default function ValuesPropos() {
  return (
    <section
      aria-labelledby="proposed-values-heading"
      className="px-6 my-20 sm:px-8"
    >
      {/* 1. Corrected ID match for accessibility */}
      <h2 id="proposed-values-heading" className="sr-only">
        Our Core Values
      </h2>

      <ul className="flex flex-col gap-12 md:gap-8 max-w-7xl mx-auto">
        {values.map((value) => (
          <li key={value.title}>
            {/* 2. Responsive Layout Shift: flex-col on mobile, flex-row on tablet */}
            <div className="flex flex-col sm:flex-row items-center md:items-center text-center md:text-left gap-12 md:gap-12">
              {/* 3. Illustration & Background Circle Container */}
              <div className="relative shrink-0 flex items-center justify-center w-[202px] h-[202px]">
                {/* Background Pattern Layer */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center bg-contain -z-10 ${value.bgRotationClass}`}
                />
                <Image
                  src={value.imgUrl}
                  width={202}
                  height={202}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* 4. Text Content Column */}
              <div className="flex flex-col items-center md:items-start gap-4 max-w-[450px] md:max-w-none">
                <h3 className="text-[20px] leading-[26px] font-medium tracking-[5px] uppercase text-dark-grey">
                  {value.title}
                </h3>
                <p className="text-body text-dark-grey leading-relaxed">
                  {value.content}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
