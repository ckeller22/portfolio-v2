import React from "react";

function GreenLinkItem({ className, url, text }) {
  const LinkWrapper = ({ children }) => {
    return <div className="inline-block">{children}</div>;
  };

  return (
    <LinkWrapper>
      <a
        className={`${className} text-green-200 link l-to-r-hover `}
        href={url}
      >
        {text}
      </a>
    </LinkWrapper>
  );
}

export default GreenLinkItem;
