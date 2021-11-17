const OutlinedButton = ({ className, text }) => {
  return (
    <button
      className={`${className} items-center font-semibold text-xl md:text-lg px-8 py-2 md:px-6 md:py-1 text-green-300 transition duration-300 border-2 border-green-300 rounded-sm hover:text-earth-gray-50 hover:border-earth-gray-50 hover:bg-earth-gray-700`}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
