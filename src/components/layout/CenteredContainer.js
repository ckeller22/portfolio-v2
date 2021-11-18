import tw from "tailwind-styled-components";

const CenteredContainer = ({ className, children }) => {
  const Container = tw.div(`
    ${className}
    container
    md:max-w-7xl
    
    mx-auto
    
  `);

  return <Container>{children}</Container>;
};

export default CenteredContainer;
