import tw from "tailwind-styled-components";
import CenteredContainer from "../layout/CenteredContainer";
import Card from "./Card";
import { projects } from "../../data/statics";

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
    <CenteredContainer>
      <h1 className="mb-1 text-3xl font-bold tracking-wider text-earth-gray-50">
        PROJECTS
      </h1>

      <GridContainer>{cards}</GridContainer>
    </CenteredContainer>
  );
};

export default Projects;
