import tw from "tailwind-styled-components";

const CenteredContainer = (props) => {
  const Container = tw.div(`
    container
    max-w-6xl
    mx-auto
    
  `);

  return <Container>{props.children}</Container>;
};

export default CenteredContainer;
