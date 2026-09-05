import CategoryGrid from "./_components/category-grid";
import Footer from "./_components/footer";
import Heading from "./_components/heading";
import Hero from "./_components/hero";
import ValuesPropositions from "./_components/values-propos";

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
