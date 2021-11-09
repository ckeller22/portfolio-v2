import { useState } from "react";
import Logo from "./Logo";
import CenteredContainer from "../layout/CenteredContainer";
import classNames from "classnames";

//TODO: Set up links, add resume, green outline button

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileNavOpen(!mobileNavOpen);
    console.log(mobileNavOpen);
  };

  const NavItem = ({ title }) => {
    return (
      <li className="hidden font-normal transition duration-300 text-earth-gray-200 hover:text-green-300 md:block">
        <a href="/">{title}</a>
      </li>
    );
  };

  const NavLinks = () => {
    return (
      <ul className="flex justify-end space-x-6 ">
        <NavItem title="About" />
        <NavItem title="Projects" />
        <NavItem title="Skills" />
        <NavItem title="Resume" />
      </ul>
    );
  };

  const MobileMenuButton = () => {
    return (
      <div className="flex items-center md:hidden">
        <button onClick={handleMobileMenuClick}>Mobile Button</button>
      </div>
    );
  };

  const MobileNavMenu = ({ open }) => {
    const tailwindClasses =
      "h-1/2 w-5/6 bg-white right-0 left-0 top-10 mx-auto flex flex-col";

    const displayMobileNavLinks = classNames(
      `${tailwindClasses} mobile-nav-menu`,
      {
        open: open,
      }
    );

    return (
      <div className={displayMobileNavLinks}>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
    );
  };

  return (
    <nav className="">
      <CenteredContainer>
        <div className="container absolute top-0 flex items-center justify-between max-w-6xl pt-2 mx-auto ">
          <Logo />
          <NavLinks />
          <MobileMenuButton />
        </div>
      </CenteredContainer>
      <MobileNavMenu open={mobileNavOpen} />
    </nav>
  );
};

export default NavBar;
