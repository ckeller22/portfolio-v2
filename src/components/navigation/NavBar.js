import { React, useState, useEffect } from "react";
import Logo from "./Logo";
import OutlinedButton from "../layout/OutlinedButton";
import MobileNav from "./MobileNav";
import { Link } from "react-scroll";
import classNames from "classnames";
import { debounce } from "../../utilities/helpers";

const NavBar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = debounce(() => {
      // find current scroll position
      const currentScrollPos = window.pageYOffset;

      // set state based on browser location
      setIsVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 20) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    }, 100);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, isVisible]);

  const NavItem = ({ id, text }) => {
    return (
      <li className="hidden font-normal transition duration-300 cursor-pointer text-earth-gray-200 hover:text-green-300 md:block">
        <Link to={id} smooth={true} duration={500} offset={-50}>
          {text}
        </Link>
      </li>
    );
  };

  const ResumeButton = () => {
    return (
      <li className="hidden md:block">
        <a href="/assets/ChristopherKellerResumeSD.pdf">
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
        <NavItem id="contact" text="Contact" />
        <ResumeButton />
      </ul>
    );
  };

  var tailwindClassNamesNav =
    "fixed z-10 right-0 left-0 flex items-center justify-between px-4 mx-auto max-w-7xl  md:px-0 bg-earth-gray-900 h-20 md:h-auto md:py-2";

  var animateNav = classNames(`${tailwindClassNamesNav}`, {
    visible: isVisible,
  });

  return (
    <nav className={animateNav}>
      {/* Padding for absolute elements don't inherit. If padding needs to be changed on center container, also change it here ^^^ */}
      <Logo />
      <NavLinks />
      <MobileNav isVisible={isVisible} />
    </nav>
  );
};

export default NavBar;
