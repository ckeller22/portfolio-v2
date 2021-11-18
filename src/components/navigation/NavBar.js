import { useState, useRef } from "react";
import Logo from "./Logo";
import CenteredContainer from "../layout/CenteredContainer";
import classNames from "classnames";
import OutlinedButton from "../layout/OutlinedButton";

//TODO investtigate animation not playing
//TODO size the nav bar and icons for mobile

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  // const handleAboutClick = () => {
  //   aboutRef.current.scrollIntoView({ behavior: "smooth" });
  // };

  const NavItem = ({ url, text }) => {
    return (
      <li className="hidden font-normal transition duration-300 text-earth-gray-200 hover:text-green-300 md:block">
        <a href={url} onClick={() => window.location.replace("/#about")}>
          {text}
        </a>
      </li>
    );
  };

  const ResumeButton = () => {
    return (
      <li className="hidden md:block">
        <a href="/assets/ChristopherKellerResumeSD.pdf" download>
          <OutlinedButton text="Resume" />
        </a>
      </li>
    );
  };

  const NavLinks = () => {
    return (
      <ul className="flex items-center justify-end space-x-6">
        <NavItem url="/" text="About" />
        <NavItem url="/" text="Projects" />
        <ResumeButton />
      </ul>
    );
  };

  const MobileMenuButton = ({ open }) => {
    const tailwindClasses = "flex md:hidden";

    const animateMobileMenu = classNames(`${tailwindClasses} nav-icon`, {
      open: open,
    });

    return (
      <div onClick={handleMobileMenuClick} className={animateMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
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
          <MobileMenuButton open={mobileNavOpen} />
        </div>
      </CenteredContainer>
      <MobileNavMenu open={mobileNavOpen} />
    </nav>
  );
};

export default NavBar;
