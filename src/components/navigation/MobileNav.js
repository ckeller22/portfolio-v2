import { useState, React } from "react";
import classNames from "classnames";

const MobileNav = () => {
  // state
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  // menu button
  const tailwindClassesButton = "relative flex md:hidden mt-2 ";

  var animateMenuButton = classNames(`${tailwindClassesButton} nav-icon`, {
    open: mobileNavOpen,
  });

  // dropdown
  const tailwindClassesMenu =
    "fixed h-screen w-screen bg-white right-0 left-0 top-20 mx-auto flex flex-col z-20";

  const displayMenu = classNames(`${tailwindClassesMenu} mobile-nav-menu`, {
    open: mobileNavOpen,
  });

  return (
    <>
      <div onClick={handleMobileMenuClick} className={animateMenuButton}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={displayMenu}>
        <ul>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
