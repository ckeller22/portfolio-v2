import tw from "tailwind-styled-components";
import CenteredContainer from "../layout/CenteredContainer";
import Card from "./Card";

const Projects = () => {
  const GridContainer = tw.div(`
    grid
    grid-cols-3
    space-x-4
    space-y-4
  `);

  return (
    <CenteredContainer>
      <h1 className="mb-1 text-3xl font-bold tracking-wider text-earth-gray-50">
        PROJECTS
      </h1>

      <GridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridContainer>
    </CenteredContainer>
  );
};

export default Projects;
