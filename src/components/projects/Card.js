import tw from "tailwind-styled-components";

const Card = () => {
  const Container = tw.div(`
    h-72
    w-5/6
    bg-earth-gray-800
    rounded-sm
    text-earth-gray-50
    
    my-2
    mx-auto
    filter
    drop-shadow-lg
    p-4
  `);

  return (
    <Container>
      <div className="grid w-full h-full grid-rows-3 debug">
        <div className="flex justify-between">
          <h1>Folder</h1>
          <h1>External link</h1>
        </div>
        <div className="row-span-2">
          <h2 className="text-xl font-bold tracking-wide debug">
            Portfolio Website
          </h2>
          <p className="leading-tight tracking-wide text-md debug">
            Web application that allows users to buy and sell event tickets. Web
            application that allows users to buy and sell event tickets.
          </p>
          <p className="font-light tracking-wider text-md debug text-earth-gray-300">
            Typescript React
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Card;
