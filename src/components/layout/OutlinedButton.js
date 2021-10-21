const OutlinedButton = ({ className, title, url }) => {
  return (
    <a href={url}>
      <button
        className={`${className} items-center px-6 py-1 mt-2 font-semibold text-green-300 transition duration-300 border-2 border-green-300 rounded-sm hover:text-earth-gray-50 hover:border-earth-gray-50 hover:bg-earth-gray-700`}
      >
        {title}
      </button>
    </a>
  );
};

export default OutlinedButton;
