interface HeroBannerProps {
  title: string;
  description: string;
}
export default async function HeroBanner(item: HeroBannerProps) {
  return (
    <section
      className="py-15 px-3 sm:mx-8 text-center gap-3 flex flex-col justify-center items-center bg-peach bg-[url('/assets/home/desktop/bg-pattern-hero-home.svg')] 
      bg-no-repeat bg-position-center overflow-hidden sm:rounded-b-2xl md:mx-0"
    >
      <h1 className="text-preset-3 text-white max-w-[25ch]">{item.title}</h1>
      <p className="text-body text-white max-w-[45ch]">{item.description}</p>
    </section>
  );
}
