import CenteredContainer from "../layout/CenteredContainer";
import SectionHeader from "../layout/SectionHeader";
import portrait from "../../images/duotone.jpg";

function About() {
  const Paragraph = ({ text }) => {
    return (
      <p className="max-w-lg pb-4 tracking-wide text-earth-gray-300">{text}</p>
    );
  };

  const FlexContainer = ({ children }) => {
    return <div className="flex flex-row justify-between">{children}</div>;
  };

  const TextContainer = ({ children }) => {
    return <div className="w-1/2 mr-20">{children}</div>;
  };

  const PortraitImage = () => {
    return (
      <div className="w-1/2 ">
        <img src={portrait} className="mx-auto rounded-full " alt=""></img>
      </div>
    );
  };

  const TechList = () => {
    const ListItem = ({ technology }) => {
      return <li className="text-lg font-bold text-green-200">{technology}</li>;
    };

    const technologies = [
      "Java",
      "C#",
      "JavaScript",
      "TypeScript",
      "Express",
      "React",
      "Tailwind",
    ];

    const allTechnologies = technologies.map((technology) => {
      return <ListItem technology={technology}></ListItem>;
    });

    return <ul className="grid grid-cols-2 pb-4 ">{allTechnologies}</ul>;
  };

  return (
    <CenteredContainer>
      <SectionHeader title="About me" />
      <FlexContainer>
        <TextContainer>
          <Paragraph
            text="I wear many hats. I am a software engineer, IT expert, and a nerd.
            Growing up I had always had a passion for taking things apart, breaking
            stuff, and figuring out how to put things back together again. I am
            a creative person and love creating and designing beautiful
            experiences and elegant software and solutions. Whether it be music,
            art, or technology, I just love to make things."
          />
          <Paragraph
            text="I am also a natural problem solver and I get a lot of gratification
            solving difficult problems. I am A+ certified and can provide IT
            troubleshooting support. I've built and maintained several
            computers."
          />
          <Paragraph
            text="In my free time, I love to make music, play board games, and enjoy a
            beer or two with friends."
          />
          <Paragraph text="I am most proficent in the following technologies. A full list of technologies I have worked can be viewed either on my resume or my GitHub." />
          <TechList />
          <Paragraph text="A full list of technologies I have worked with can be viewed either on my resume or my GitHub." />
        </TextContainer>
        <PortraitImage />
      </FlexContainer>
    </CenteredContainer>
  );
}

export default About;
