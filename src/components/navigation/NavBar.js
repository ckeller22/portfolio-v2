import { useState, React } from "react";
import Logo from "./Logo";
import CenteredContainer from "../layout/CenteredContainer";
import classNames from "classnames";
import OutlinedButton from "../layout/OutlinedButton";
import MobileNav from "./MobileNav";

const NavBar = () => {
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

  const MobileMenuButton = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const handleMobileMenuClick = () => {
      setMobileNavOpen(!mobileNavOpen);
    };

    const tailwindClasses = "relative flex md:hidden mt-2 ";

    var animateMobileMenu = classNames(`${tailwindClasses} nav-icon`, {
      open: mobileNavOpen,
    });

    return (
      <>
        <div onClick={handleMobileMenuClick} className={animateMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <MobileNavMenu open={mobileNavOpen} />
      </>
    );
  };

  const MobileNavMenu = ({ open }) => {
    const tailwindClasses =
      "h-1/2 w-5/6 bg-white right-0 left-0 top-20 mx-auto flex flex-col z-20 ";

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
          <li>test 2</li>
          <li>test 4</li>
        </ul>
      </div>
    );
  };

  return (
    <nav>
      <CenteredContainer>
        {/* Padding for absolute elements don't inherit. If padding needs to be changed on center container, also change it here  */}
        <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 pt-4 mx-auto md:pt-2 md:px-0">
          <Logo />
          <NavLinks />
          <MobileNav />
        </div>
      </CenteredContainer>
    </nav>
  );
};

export default NavBar;
