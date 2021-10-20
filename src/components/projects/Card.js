import tw from "tailwind-styled-components";
import GitHubIcon from "../icons/GitHubIcon";
import FolderIcon from "../icons/FolderIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const Card = ({ project }) => {
  const CardContainer = tw.div(`
    bg-earth-gray-800
    rounded-md
    text-earth-gray-50
    filter
    drop-shadow-xl
    p-4
  `);

  const Grid = ({ children }) => {
    return <div className="grid w-full h-full grid-rows-3 ">{children}</div>;
  };

  const Info = ({ children }) => {
    return <div className="flex flex-col row-span-2">{children}</div>;
  };

  const Title = () => {
    return (
      <h2 className="text-xl font-bold tracking-wide ">{project.title}</h2>
    );
  };

  const Description = () => {
    return (
      <p className="leading-tight tracking-wide text-md ">
        {project.description}
      </p>
    );
  };

  const TechList = () => {
    const technologies = project.technologies.map((technology) => {
      return (
        <li className="my-auto mb-0 font-light tracking-wider text-md text-earth-gray-300">
          {technology}
        </li>
      );
    });

    return (
      <ul className="flex flex-row my-auto mb-0 space-x-4 text-sm ">
        {technologies}
      </ul>
    );
  };

  const IconContainer = ({ children }) => {
    return <div className="flex justify-between ">{children}</div>;
  };

  const Folder = () => {
    return (
      <div className="w-8 h-8 text-yellow-300 stroke-current stroke-2 ">
        <FolderIcon />
      </div>
    );
  };

  const GitHub = () => {
    return (
      <div className="fill-current w-7 h-7 text-earth-gray-50">
        <GitHubIcon />
      </div>
    );
  };

  const ExternalLink = () => {
    return (
      <div className="fill-current stroke-current stroke-2 w-7 h-7 text-earth-gray-50">
        <ExternalLinkIcon />
      </div>
    );
  };

  const RightAlignedContainer = ({ children }) => {
    return <div className="flex flex-row space-x-2">{children}</div>;
  };

  return (
    <CardContainer>
      <Grid>
        <IconContainer>
          <Folder />
          <RightAlignedContainer>
            <GitHub />
            <ExternalLink />
          </RightAlignedContainer>
        </IconContainer>
        <Info>
          <Title />
          <Description />
          <TechList />
        </Info>
      </Grid>
    </CardContainer>
  );
};

export default Card;
