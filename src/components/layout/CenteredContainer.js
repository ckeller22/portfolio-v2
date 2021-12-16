import tw from "tailwind-styled-components";
import Element from "react-scroll/modules/components/Element";

const CenteredContainer = ({ className, children, id }) => {
  const Container = tw.div(`
    ${className}
    px-6
    container
    md:max-w-7xl
    lg:px-0
    mx-auto
    relative
    
  `);

  return (
    <Element name={id}>
      <Container>{children}</Container>
    </Element>
  );
};

export default CenteredContainer;
