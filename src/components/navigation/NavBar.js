import NavItem from "./NavItem";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="">
      <div className="container flex items-center justify-between max-w-6xl pt-2 mx-auto">
        <Logo />
        <ul className="flex justify-end space-x-6">
          <NavItem title="Skills" />
          <NavItem title="About" />
          <NavItem title="Projects" />
          <NavItem title="Hire" />
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
