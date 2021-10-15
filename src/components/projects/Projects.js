import tw from "tailwind-styled-components";
import Card from "./Card";

const Projects = () => {
  const GridContainer = tw.div(`
  max-w-6xl
  grid
  grid-cols-3

  mx-auto
  debug
  
  `);

  return (
    <div>
      <h1>Projects</h1>
      <GridContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </GridContainer>
    </div>
  );
};

export default Projects;
