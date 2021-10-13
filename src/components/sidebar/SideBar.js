import tw from "tailwind-styled-components";

import Icon from "./Icon";

const SideBar = () => {
  const Container = tw.div(`
    fixed 
    left-10 
    bottom-0 
    flex 
    flex-col-reverse
    px-2 
  text-earth-gray-50
    mb-10
    h-96
    w-96
  `);

  const List = tw.ul(`
    flex
    flex-col
    space-y-10
    h-40
    text-earth-gray-200
  `);

  return (
    <Container>
      <List>
        <Icon />
        <Icon />
        <Icon />
      </List>
    </Container>
  );
};

export default SideBar;
