const HeroLinkItem = ({ title, url }) => {
  return (
    <li className="">
      <a className="transition duration-300 hover:text-green-300" href={url}>
        {title}
      </a>
    </li>
  );
};

export default HeroLinkItem;
