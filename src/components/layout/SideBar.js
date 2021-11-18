import React from "react";
import tw from "tailwind-styled-components";

function SideBar({ children, className }) {
  const SideBar = tw.div(`
    ${className || ""}
    hidden
    fixed
    bottom-0
    mb-10
    flex-col-reverse
    text-earth-gray-50
    2xl:flex
    `);

  return <SideBar>{children}</SideBar>;
}

export default SideBar;
