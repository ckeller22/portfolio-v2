import HeroLinkItem from "./HeroLinkItem";
import EditorSVG from "./EditorSVG";

const Hero = () => {
  return (
    <div className=" max-w-6xl mx-auto grid grid-cols-2  my-64 ">
      <div className=" flex flex-col ">
        <h2 className="text-earth-gray-700 tracking-widest font-bold ">
          MY NAME IS
        </h2>
        <h1 className="text-earth-gray-50 font-bold text-6xl tracking-wide">
          Chris Keller
        </h1>
        <h1 className="text-earth-gray-300 font-bold text-4xl mb-2 tracking-wider">
          I build things.
        </h1>
        <p className="text-earth-gray-300 leading tracking-wide ">
          I am a software engineer specializing in developing and designing
          high-quality websites and applications. I am also experienced in IT
          support and provide technical services.
        </p>
        <div className="mt-2">
          <button className="font-semibold text-earth-gray-300 border-2 border-earth-gray-300 rounded-sm py-1 px-6 mt-2 items-center ">
            Projects
          </button>
        </div>
        <ul className="flex flex-row space-x-10  my-auto mb-0 text-earth-gray-100">
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
