const Icon = ({ children, url }) => {
  return (
    <a
      className="block fill-current stroke-current stroke-1 content-box w-7 h-7 icon-hover"
      href={url}
    >
      {children}
    </a>
  );
};

export default Icon;
