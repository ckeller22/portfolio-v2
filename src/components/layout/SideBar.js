import React from "react";
import tw from "tailwind-styled-components";

function SideBar({ children, className }) {
  const SideBar = tw.div(`
    ${className}
    hidden
    md:flex
    fixed
    bottom-0
    flex-col-reverse
    text-earth-gray-50
    mb-10
    `);

  return <SideBar>{children}</SideBar>;
}

export default SideBar;
