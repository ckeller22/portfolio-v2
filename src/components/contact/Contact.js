import React from "react";
import CenteredContainer from "../layout/CenteredContainer";
import SectionHeader from "../layout/SectionHeader";
import OutlinedButton from "../layout/OutlinedButton";
import { email } from "../../data/statics";

function Contact() {
  return (
    <CenteredContainer>
      <SectionHeader title="Get in touch"></SectionHeader>
      <div className="h-screen mx-auto my-auto text-earth-gray-300 bg-earth-gray-700">
        <p className="max-w-md mx-auto my-auto tracking-wide">
          I am always looking for any new opportunities. Whether you need an app
          built and designed, an IT professional, or you just want to shoot me a
          hello, my inbox is always open. I'll make sure to get back to you as
          soon as possible!
        </p>
        <OutlinedButton url={`mailto:${email}`} title="Get in touch!" />
      </div>
    </CenteredContainer>
  );
}

export default Contact;
