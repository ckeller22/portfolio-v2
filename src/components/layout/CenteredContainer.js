import tw from "tailwind-styled-components";

const CenteredContainer = ({ className, children }) => {
  const Container = tw.div(`
    ${className}
    px-6
    container
    md:max-w-7xl
    lg:px-0
    mx-auto
    relative
    
  `);

  return <Container>{children}</Container>;
};

export default CenteredContainer;
