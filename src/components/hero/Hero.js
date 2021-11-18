import EditorSVG from "./EditorSVG";
import CenteredContainer from "../layout/CenteredContainer";
import { links } from "../../data/statics";
import OutlinedButton from "../layout/OutlinedButton";

const Hero = () => {
  const CenteredGrid = ({ children }) => {
    return (
      <div className="flex flex-col items-center h-screen grid-cols-2 px-6 pt-56 md:pt-0 md:px-0 md:grid">
        {children}
      </div>
    );
  };

  const TextContainer = ({ children }) => {
    return <div className="h-screen md:h-auto">{children}</div>;
  };

  const HeroText = () => {
    return (
      <div className="">
        <h4 className="font-bold tracking-widest uppercase text-earth-gray-700">
          My name is
        </h4>
        <h1 className="text-4xl font-bold tracking-wide text-earth-gray-50 md:text-6xl">
          Chris Keller
        </h1>
        <h2 className="mb-2 text-2xl font-bold tracking-wider md:text-4xl text-earth-gray-300">
          I build things.
        </h2>
        <p className="tracking-wide text-earth-gray-300 leading ">
          I am a software engineer specializing in developing and designing
          high-quality websites and applications. I am also experienced in IT
          support and can provide technical services.
        </p>
      </div>
    );
  };

  const HeroLinkList = () => {
    const LinkItem = ({ link }) => {
      return (
        <li>
          <a
            className="transition duration-300 hover:text-green-300"
            href={link.url}
          >
            {link.name}
          </a>
        </li>
      );
    };

    const heroLinks = links.map((link) => {
      return <LinkItem link={link} />;
    });

    return (
      <ul className="flex flex-row my-auto mt-2 mb-0 space-x-10 md:mt-10 text-earth-gray-100 ">
        {heroLinks}
      </ul>
    );
  };

  const ProjectsButton = () => {
    return (
      <a href="/">
        <OutlinedButton text="Projects" className="mt-2 " />
      </a>
    );
  };

  return (
    <CenteredContainer className="">
      <CenteredGrid>
        <TextContainer>
          <HeroText />
          <ProjectsButton />
          <HeroLinkList />
        </TextContainer>
        <EditorSVG />
      </CenteredGrid>
    </CenteredContainer>
  );
};

export default Hero;
