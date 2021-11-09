import NavItem from "./NavItem";
import Logo from "./Logo";
import CenteredContainer from "../layout/CenteredContainer";

//TODO: Set up links, add resume, green outline button
const NavBar = () => {
  return (
    <nav className="">
      <CenteredContainer>
        <div className="container absolute top-0 flex items-center justify-between max-w-6xl pt-2 mx-auto ">
          <Logo />
          <ul className="flex justify-end space-x-6 ">
            <NavItem title="About" />
            <NavItem title="Projects" />
            <NavItem title="Skills" />
            <NavItem title="Resume" />
          </ul>
        </div>
      </CenteredContainer>
    </nav>
  );
};

export default NavBar;
