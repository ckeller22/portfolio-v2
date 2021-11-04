import React from "react";

function Card({ className, children }) {
  return (
    <div
      className={`${className} rounded-md bg-earth-gray-800 text-earth-gray-50 filter drop-shadow`}
    >
      {children}
    </div>
  );
}

export default Card;
