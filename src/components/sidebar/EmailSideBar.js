import React from "react";
import SideBar from "../layout/SideBar";
import { email } from "../../data/statics";

function EmailSideBar({ url }) {
  return (
    <SideBar location="right">
      <a
        className="text-sm tracking-wider font-extralight"
        style={{ writingMode: "vertical-rl" }}
        href={email}
      >
        {email}
      </a>
    </SideBar>
  );
}

export default EmailSideBar;
