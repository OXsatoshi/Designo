import CategoryGrid from "../_components/home/category-grid";
import HeroBanner from "../_components/web-design/hero-banner";
import ProjectGrid from "../_components/web-design/projects-grid";
import { GRAPHIC_DESIGN_PROJECTS } from "../_components/web-design/projets.data";
export default function Page() {
  return (
    <>
      <HeroBanner
        title="Graphic Design"
        description="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <ProjectGrid projects={GRAPHIC_DESIGN_PROJECTS} />
      <CategoryGrid id="graphic" />
    </>
  );
}
