import React from "react";
import CenteredContainer from "../layout/CenteredContainer";
import SectionHeader from "../layout/SectionHeader";
import OutlinedButton from "../layout/OutlinedButton";
import { email } from "../../data/statics";
import Footer from "./Footer";

function Contact() {
  const EmailButton = () => {
    return (
      <a href={`mailto:${email}`} className="mt-4">
        <OutlinedButton text="Contact" />
      </a>
    );
  };

  return (
    <CenteredContainer className="relative px-4 md:px-0">
      <div className="flex flex-col items-center justify-center h-screen text-earth-gray-300">
        <SectionHeader title="Get in touch"></SectionHeader>
        <p className="max-w-2xl mx-auto mt-2 tracking-wide text-center text-md md:text-lg">
          I am always looking for any new opportunities. Whether you need an app
          built and designed, an IT professional, or you just want to shoot me a
          hello, my inbox is always open. I'll make sure to get back to you as
          soon as possible!
        </p>
        <EmailButton />
      </div>
      <Footer />
    </CenteredContainer>
  );
}

export default Contact;
