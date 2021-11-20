const OutlinedButton = ({ className, text }) => {
  return (
    <button
      className={`${className} items-center font-semibold text-md md:text-lg px-6 py-1 text-green-300 transition duration-300 border-2 border-green-300 rounded-md hover:text-green-100 hover:border-green-100 hover:bg-earth-gray-800`}
    >
      {text}
    </button>
  );
};

export default OutlinedButton;
