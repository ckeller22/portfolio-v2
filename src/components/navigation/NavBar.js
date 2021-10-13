import NavItem from "./NavItem";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <nav className="">
      <div className="flex max-w-6xl mx-auto justify-between pt-2 items-center">
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
