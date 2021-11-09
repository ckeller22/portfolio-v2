import React from "react";

function SectionHeader({ className, title }) {
  return (
    <h1
      className={`${className} mb-1 text-3xl font-bold tracking-wider uppercase text-earth-gray-50`}
    >
      {title}
    </h1>
  );
}

export default SectionHeader;
