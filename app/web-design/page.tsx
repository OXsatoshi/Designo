import CategoryGrid from "../_components/home/category-grid";
import HeroBanner from "../_components/web-design/hero-banner";
import ProjectGrid from "../_components/web-design/projects-grid";
import { WEB_DESIGN_PROJECTS } from "../_components/web-design/projets.data";
export default async function Page() {
  return (
    <>
      <HeroBanner
        title="Web Design"
        description=" 
        We build websites that serve as powerful marketing tools and bring
        memorable brand experiences."
      />
      <ProjectGrid projects={WEB_DESIGN_PROJECTS} /> <CategoryGrid id="web" />
    </>
  );
}
