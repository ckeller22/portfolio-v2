import { useState, useRef, useEffect, React } from "react";
import classNames from "classnames";
import { Link } from "react-scroll";

const MobileNav = ({ isVisible }) => {
  // state
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  // menu button
  const tailwindClassesButton = "flex md:hidden mt-2 ";

  var animateMenuButton = classNames(`${tailwindClassesButton} nav-icon`, {
    open: isMobileNavOpen,
  });

  // dropdown
  const tailwindClassesMenu =
    "bg-earth-gray-900 left-0 right-0 top-20 mx-auto flex flex-col z-20 filter drop-shadow-md ";

  const displayMenu = classNames(`${tailwindClassesMenu} mobile-nav-menu`, {
    open: isMobileNavOpen && isVisible,
  });

  const NavItem = ({ url, text, id }) => {
    return (
      <li className="p-2 tracking-wider transition duration-300 cursor-pointer text-earth-gray-200 hover:text-green-300 ">
        <Link
          to={id}
          smooth={true}
          duration={500}
          offset={-75}
          onClick={handleMobileMenuClick}
        >
          {text}
        </Link>
      </li>
    );
  };

  const ResumeItem = () => {
    return (
      <li
        className="p-2 tracking-wider transition duration-300 cursor-pointer text-earth-gray-200 hover:text-green-300"
        onClick={handleMobileMenuClick}
      >
        <a href="/assets/ChristopherKellerResumeSD.pdf" download>
          Resume
        </a>
      </li>
    );
  };

  // Click out of menu
  // refs for menu components
  const menuRef = useRef();
  const menuButtonRef = useRef();

  useEffect(() => {
    // checks to see if scroll has happened to close menu
    if (!isVisible) {
      setIsMobileNavOpen(false);
    }

    let handler = (event) => {
      // check to see for click out of drop down menu or menu button then changes open state to false
      if (
        !menuRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileNavOpen(false);
      }
    };

    // add when mounted
    document.addEventListener("mousedown", handler);

    // cleanup effect on unmount of menu
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [setIsMobileNavOpen, isVisible]);

  return (
    <>
      <div
        ref={menuButtonRef}
        onClick={handleMobileMenuClick}
        className={animateMenuButton}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div ref={menuRef} className={displayMenu}>
        <ul className="flex flex-col items-center mb-10 space-y-10 text-xl ">
          <NavItem id="about" text="About" />
          <NavItem id="projects" text="Projects" />
          <NavItem id="contact" text="Contact" />
          <ResumeItem />
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
