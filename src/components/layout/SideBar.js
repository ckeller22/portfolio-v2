import React from "react";
import tw from "tailwind-styled-components";

function SideBar({ children, location }) {
  const SideBar = tw.div(`
    ${location === "left" ? "left-10" : ""}
    ${location === "right" ? "right-10" : ""}

    fixed
    bottom-0
    flex
    flex-col-reverse
    text-earth-gray-50
    mb-10
    `);

  return <SideBar>{children}</SideBar>;
}

export default SideBar;
