import { React } from "react";
import Logo from "./Logo";
import CenteredContainer from "../layout/CenteredContainer";
import OutlinedButton from "../layout/OutlinedButton";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";

const NavBar = () => {
  const NavItem = ({ id, text }) => {
    return (
      <li className="hidden font-normal transition duration-300 text-earth-gray-200 hover:text-green-300 md:block">
        <Link to={id} smooth={true} duration={500} offset={-50}>
          {text}
        </Link>
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
        <NavItem id="about" text="About" />
        <NavItem id="projects" text="Projects" />
        <ResumeButton />
      </ul>
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
