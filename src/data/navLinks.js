import { v4 as uuidv4 } from "uuid";

export const navLinks = [
  { id: uuidv4(), name: "about", text: "About", href: "#about" },
  { id: uuidv4(), name: "projects", text: "Projects", href: "/" },
  {
    id: uuidv4(),
    name: "resume",
    text: "Resume",
    href: "./resources/ChristopherKellerResumeSD.docx",
  },
];
