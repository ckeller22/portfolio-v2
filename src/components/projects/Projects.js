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
    grid
    grid-cols-3
    grid-rows-2
    gap-5
  `);

  return (
    <CenteredContainer id="projects">
      <SectionHeader title="Projects" className="pb-2" />

      <GridContainer>{cards}</GridContainer>
    </CenteredContainer>
  );
};

export default Projects;
