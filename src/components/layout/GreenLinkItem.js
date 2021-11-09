import React from "react";

function GreenLinkItem({ className, url, text }) {
  const LinkWrapper = ({ children }) => {
    return <div className="link-wrapper">{children}</div>;
  };

  return (
    <LinkWrapper>
      <a className={`${className} text-green-200 link l-to-r-hover`} href={url}>
        {text}
      </a>
    </LinkWrapper>
  );
}

export default GreenLinkItem;
