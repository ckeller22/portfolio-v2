import CenteredContainer from "../layout/CenteredContainer";
import { links } from "../../data/statics";
import OutlinedButton from "../layout/OutlinedButton";

const Hero = () => {
  const CenteredGrid = ({ children }) => {
    return <div className="flex items-center h-full ">{children}</div>;
  };

  const TextContainer = ({ children }) => {
    return <div className="">{children}</div>;
  };

  const HeroText = () => {
    return (
      <div className="mb-2">
        <h4 className="text-xl font-bold tracking-widest uppercase text-earth-gray-700">
          My name is
        </h4>
        <h1 className="text-4xl font-bold tracking-wide text-earth-gray-50 md:text-7xl">
          Chris Keller
        </h1>
        <h2 className="mb-2 text-2xl font-bold tracking-wider md:text-5xl text-earth-gray-300">
          I build things.
        </h2>
        <p className="max-w-xl tracking-wide text-earth-gray-300 leading">
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
      <ul className="flex flex-row my-auto mt-4 mb-0 ml-8 space-x-8 text-earth-gray-200 ">
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
    <CenteredContainer className="h-screen min-h-auto">
      <CenteredGrid>
        <TextContainer>
          <HeroText />
          <div className="flex">
            <ProjectsButton />
            <HeroLinkList />
          </div>
        </TextContainer>
      </CenteredGrid>
    </CenteredContainer>
  );
};

export default Hero;
