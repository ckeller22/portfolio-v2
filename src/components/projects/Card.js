import tw from "tailwind-styled-components";
import GitHubIcon from "../icons/GitHubIcon";
import FolderIcon from "../icons/FolderIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";
import { v4 as uuidv4 } from "uuid";

const Card = ({ project }) => {
  const CardContainer = tw.div(`
    group
    hover:-translate-y-2
    transform
    transition
    duration-300
    bg-earth-gray-800
    rounded-md
    text-earth-gray-50
    filter
    flex
    flex-col
    drop-shadow-xl
    p-4
  `);

  // const Grid = ({ children }) => {
  //   return (
  //     <div className="grid w-full h-full grid-rows-4 debug">{children}</div>
  //   );
  // };

  const Info = ({ children }) => {
    return <div className="flex flex-col h-full mt-4">{children}</div>;
  };

  const Title = () => {
    return (
      <h2 className="text-xl font-bold tracking-wide transition-colors duration-300 group-hover:text-green-300">
        {project.title}
      </h2>
    );
  };

  const Description = () => {
    return (
      <p className="mt-2 mb-4 leading-tight tracking-wide text-md">
        {project.description}
      </p>
    );
  };

  const TechList = () => {
    const technologies = project.technologies.map((technology) => {
      return (
        <li
          className="my-auto font-light tracking-wider transition duration-300 text-md text-earth-gray-300 group-hover:text-green-300"
          key={uuidv4()}
        >
          {technology}
        </li>
      );
    });

    return (
      <ul className="flex flex-row flex-wrap my-auto mb-0 space-x-4 text-sm ">
        {technologies}
      </ul>
    );
  };

  const IconContainer = ({ children }) => {
    return <div className="flex justify-between ">{children}</div>;
  };

  const Folder = () => {
    return (
      <div className="w-8 h-8 text-green-300 stroke-current stroke-2 ">
        <FolderIcon />
      </div>
    );
  };

  const GitHub = () => {
    return (
      <a
        className="fill-current w-7 h-7 text-earth-gray-50 icon-hover"
        href={project.githubURL}
      >
        <GitHubIcon />
      </a>
    );
  };

  const ExternalLink = () => {
    return (
      <a
        className="fill-current stroke-current stroke-2 w-7 h-7 text-earth-gray-50 icon-hover"
        href={project.liveURL}
      >
        <ExternalLinkIcon />
      </a>
    );
  };

  const RightAlignedContainer = ({ children }) => {
    return <div className="flex flex-row space-x-2">{children}</div>;
  };

  return (
    <CardContainer>
      <IconContainer>
        <Folder />
        <RightAlignedContainer>
          <GitHub />
          {project.liveURL !== null && <ExternalLink />}
        </RightAlignedContainer>
      </IconContainer>
      <Info>
        <Title />
        <Description />
        <TechList />
      </Info>
    </CardContainer>
  );
};

export default Card;
