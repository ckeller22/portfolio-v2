import React from "react";
import SideBar from "../layout/SideBar";
import { email } from "../../data/statics";

function EmailSideBar({ url }) {
  return (
    <SideBar className="right-10">
      <a
        className="text-sm tracking-wider font-extralight"
        style={{ writingMode: "vertical-rl" }}
        href={`mailto:${email}`}
      >
        {email}
      </a>
    </SideBar>
  );
}

export default EmailSideBar;
