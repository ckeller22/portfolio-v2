import tw from "tailwind-styled-components";
import GitHubIcon from "../icons/GitHubIcon";
import FolderIcon from "../icons/FolderIcon";
import ExternalLinkIcon from "../icons/ExternalLinkIcon";

const Card = () => {
  const Container = tw.div(`
    h-80
    
    bg-earth-gray-800
    rounded-md
    text-earth-gray-50
    filter
    drop-shadow-lg
    p-4
  `);

  return (
    <Container>
      <div className="grid w-full h-full grid-rows-3 ">
        <div className="flex justify-between ">
          <div className="w-8 h-8 text-yellow-300 stroke-current stroke-2">
            <FolderIcon />
          </div>
          <div className="w-8 h-8 fill-current text-earth-gray-50">
            <GitHubIcon />
          </div>
          <div className="w-5 h-5 fill-current stroke-current stroke-2 text-earth-gray-50">
            <ExternalLinkIcon />
          </div>
        </div>
        <div className="flex flex-col row-span-2">
          <h2 className="text-xl font-bold tracking-wide ">
            Portfolio Website
          </h2>
          <p className="leading-tight tracking-wide text-md ">
            Web application that allows users to buy and sell event tickets. Web
            application that allows users to buy and sell event tickets.
          </p>
          <p className="my-auto mb-0 font-light tracking-wider text-md text-earth-gray-300">
            Typescript React
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
