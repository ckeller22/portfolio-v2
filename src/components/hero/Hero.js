import EditorSVG from "./EditorSVG";
import CenteredContainer from "../layout/CenteredContainer";
import { links } from "../../data/statics";
import OutlinedButton from "../layout/OutlinedButton";

const Hero = () => {
  const CenteredGrid = ({ children }) => {
    return (
      <div className="grid items-center h-screen grid-cols-2">{children}</div>
    );
  };

  const TextContainer = ({ children }) => {
    return <div className="flex flex-col">{children}</div>;
  };

  const HeroText = () => {
    return (
      <div>
        <h4 className="font-bold tracking-widest uppercase text-earth-gray-700">
          My name is
        </h4>
        <h1 className="text-6xl font-bold tracking-wide text-earth-gray-50">
          Chris Keller
        </h1>
        <h2 className="mb-2 text-4xl font-bold tracking-wider text-earth-gray-300">
          I build things.
        </h2>
        <p className="tracking-wide text-earth-gray-300 leading ">
          I am a software engineer specializing in developing and designing
          high-quality websites and applications. I am also experienced in IT
          support and provide technical services.
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
      <ul className="flex flex-row my-auto mt-10 mb-0 space-x-10 text-earth-gray-100">
        {heroLinks}
      </ul>
    );
  };

  return (
    <CenteredContainer>
      <CenteredGrid>
        <TextContainer>
          <HeroText />
          <OutlinedButton url="" title="Projects" />
          <HeroLinkList />
        </TextContainer>
        <EditorSVG />
      </CenteredGrid>
    </CenteredContainer>
  );
};

export default Hero;
