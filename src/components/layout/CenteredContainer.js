import tw from "tailwind-styled-components";

const CenteredContainer = ({ className, children }) => {
  const Container = tw.div(`
    ${className}
    container
    max-w-6xl
    mx-auto
    
  `);

  return <Container>{children}</Container>;
};

export default CenteredContainer;
