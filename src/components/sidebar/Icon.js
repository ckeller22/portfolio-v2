const Icon = ({ children, url }) => {
  return (
    <a
      className="block fill-current stroke-current content-box w-7 h-7 text-earth-gray-50"
      href={url}
    >
      {children}
    </a>
  );
};

export default Icon;
