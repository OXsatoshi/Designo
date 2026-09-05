import CategoryGrid from "./_components/home/category-grid";
import Hero from "./_components/home/hero";
import ValuesPropositions from "./_components/home/values-propos";
import Footer from "./_components/layout/footer";
import Heading from "./_components/layout/heading";

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
