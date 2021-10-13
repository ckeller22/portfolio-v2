const HeroLinkItem = ({ title, url }) => {
  return (
    <li className="">
      <a href={url}>{title}</a>
    </li>
  );
};

export default HeroLinkItem;
