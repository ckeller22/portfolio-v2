import tw from "tailwind-styled-components";
import CenteredContainer from "../layout/CenteredContainer";
import Card from "./Card";
import { projects } from "../../data/statics";
import SectionHeader from "../layout/SectionHeader";

const Projects = () => {
  const cards = projects.map((project) => {
    return <Card project={project} key={project.id} />;
  });

  const GridContainer = tw.div(`
    flex
    flex-col
    px-4
    md:px-0
    md:grid
    md:grid-cols-2
    md:grid-rows-auto
    lg:grid-cols-3
    gap-5
  `);

  return (
    <CenteredContainer id="projects" className="">
      <SectionHeader title="Projects" className="pb-2" />

      <GridContainer>{cards}</GridContainer>
    </CenteredContainer>
  );
};

export default Projects;
