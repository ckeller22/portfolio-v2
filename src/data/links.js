import LinkedInIcon from "../components/icons/LinkedInIcon";
import GitHubIcon from "../components/icons/GitHubIcon";
import TwitterIcon from "../components/icons/TwitterIcon";
import { v4 as uuidv4 } from "uuid";

export const links = [
  {
    id: uuidv4(),
    name: "github",
    url: "https://github.com/ckeller22",
    svg: <GitHubIcon />,
  },
  {
    id: uuidv4(),
    name: "linkedin",
    url: "https://www.linkedin.com/in/ckeller22/",
    svg: <LinkedInIcon />,
  },
  {
    id: uuidv4(),
    name: "twitter",
    url: "https://twitter.com/the_chrus",
    svg: <TwitterIcon />,
  },
];
