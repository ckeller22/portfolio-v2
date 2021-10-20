const NavItem = ({ title }) => {
  return (
    <li className="font-normal transition duration-300 text-earth-gray-200 hover:text-green-300 ">
      <a href="/">{title}</a>
    </li>
  );
};

export default NavItem;
