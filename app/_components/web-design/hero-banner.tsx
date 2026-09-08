interface HeroBannerProps {
  title: string;
  description: string;
}
export default async function HeroBanner(item: HeroBannerProps) {
  return (
    <section
      className="
    max-w-[1110px]
    md:mx-auto
    px-6
    py-16
    sm:mx-8
    md:px-0
    flex
    flex-col
    items-center
    justify-center
    gap-4
    overflow-hidden
    text-center
    bg-peach
    bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')]
    bg-no-repeat
    bg-center
    sm:rounded-b-2xl
  "
    >
      <h1 className="text-preset-3 text-white max-w-[25ch]">{item.title}</h1>
      <p className="text-body text-white max-w-[45ch]">{item.description}</p>
    </section>
  );
}
