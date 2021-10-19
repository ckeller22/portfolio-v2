import tw from "tailwind-styled-components";
import LINKS from "../../data/links";

import Icon from "./Icon";

//TODO: Factor out the sidebar container
const SideBar = () => {
  const icons = LINKS.map((link) => {
    return <Icon url={link.url}>{link.svg}</Icon>;
  });

  const Container = tw.div(`
    fixed 
    left-10 
    bottom-0 
    flex 
    flex-col-reverse
  text-earth-gray-50
    mb-10
    h-96
  `);

  const List = tw.ul(`
    flex
    flex-col
    space-y-5
  text-earth-gray-200
  `);

  return (
    <Container>
      <List>{icons}</List>
    </Container>
  );
};

export default SideBar;
