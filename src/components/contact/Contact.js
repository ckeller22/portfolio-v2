import React from "react";
import CenteredContainer from "../layout/CenteredContainer";
import SectionHeader from "../layout/SectionHeader";
import OutlinedButton from "../layout/OutlinedButton";
import { email } from "../../data/statics";

function Contact() {
  return (
    <CenteredContainer>
      <div className="flex flex-col items-center justify-center h-screen text-earth-gray-300">
        <SectionHeader title="Get in touch"></SectionHeader>
        <p className="max-w-2xl mx-auto mt-2 text-lg tracking-wide text-center">
          I am always looking for any new opportunities. Whether you need an app
          built and designed, an IT professional, or you just want to shoot me a
          hello, my inbox is always open. I'll make sure to get back to you as
          soon as possible!
        </p>
        <OutlinedButton
          className="mt-4"
          url={`mailto:${email}`}
          title="Contact"
        />
      </div>
    </CenteredContainer>
  );
}

export default Contact;
