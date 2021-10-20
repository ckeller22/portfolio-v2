import React from "react";

function SectionHeader({ title }) {
  return (
    <h1 className="mb-1 text-3xl font-bold tracking-wider uppercase text-earth-gray-50">
      {title}
    </h1>
  );
}

export default SectionHeader;
