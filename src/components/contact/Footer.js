import { links } from "../../data/statics";
import Icon from "../sidebar/Icon";

const Footer = () => {
  const icons = links.map((link) => {
    return (
      <Icon key={link.id} url={link.url}>
        {link.svg}
      </Icon>
    );
  });

  return (
    <div className="absolute left-0 right-0 flex flex-col items-center max-w-full mx-auto space-y-2 text-sm bottom-5 text-earth-gray-400">
      <ul className="flex mb-4 space-x-8 2xl:hidden text-earth-gray-300">
        {icons}
      </ul>
      <p className="">Built by Chris Keller - 2021</p>
    </div>
  );
};

export default Footer;
