import HeroLinkItem from "./HeroLinkItem";
import EditorSVG from "./EditorSVG";

const Hero = () => {
  return (
    <div className="grid max-w-6xl grid-cols-2 mx-auto my-64 ">
      <div className="flex flex-col ">
        <h2 className="font-bold tracking-widest text-earth-gray-700 ">
          MY NAME IS
        </h2>
        <h1 className="text-6xl font-bold tracking-wide text-earth-gray-50">
          Chris Keller
        </h1>
        <h1 className="mb-2 text-4xl font-bold tracking-wider text-earth-gray-300">
          I build things.
        </h1>
        <p className="tracking-wide text-earth-gray-300 leading ">
          I am a software engineer specializing in developing and designing
          high-quality websites and applications. I am also experienced in IT
          support and provide technical services.
        </p>
        <div className="mt-2">
          <button className="items-center px-6 py-1 mt-2 font-semibold border-2 rounded-sm text-earth-gray-300 border-earth-gray-300 ">
            Projects
          </button>
        </div>
        <ul className="flex flex-row my-auto mb-0 space-x-10 text-earth-gray-100">
          <HeroLinkItem title="GitHub" url="https://github.com/ckeller22" />
          <HeroLinkItem
            title="Linkedin"
            url="https://www.linkedin.com/in/ckeller22/"
          />
          <HeroLinkItem title="Twitter" url="https://twitter.com/the_chrus" />
        </ul>
      </div>
      <EditorSVG />
    </div>
  );
};

export default Hero;
