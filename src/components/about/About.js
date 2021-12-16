import CenteredContainer from "../layout/CenteredContainer";
import SectionHeader from "../layout/SectionHeader";
import portrait from "../../images/duotone.jpg";
import GreenLinkItem from "../layout/GreenLinkItem";

const About = () => {
  const Paragraph = ({ children }) => {
    return (
      <div className="pb-4 leading-relaxed md:pr-5 text-earth-gray-300">
        {children}
      </div>
    );
  };

  const FlexContainer = ({ children }) => {
    return (
      <div className="flex flex-col items-center lg:items-start lg:flex-row lg:justify-between">
        {children}
      </div>
    );
  };

  const TextContainer = ({ children }) => {
    return (
      <div className="text-left text-md md:text-lg lg:w-3/5">{children}</div>
    );
  };

  const PortraitImage = () => {
    return (
      <div className="h-full py-8 xl:py-0 lg:pl-10 md:w-2/5">
        <img
          src={portrait}
          className="w-1/2 mx-auto rounded-full md:w-full filter drop-shadow-lg"
          alt=""
          loading="lazy"
        ></img>
      </div>
    );
  };

  const TechList = () => {
    const ListItem = ({ technology }) => {
      return <li className="text-lg font-bold text-green-300">{technology}</li>;
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

    return (
      <ul className="grid grid-cols-2 pb-4 md:grid-cols-3 ">
        {allTechnologies}
      </ul>
    );
  };

  return (
    <CenteredContainer className="xl:h-screen" id="about">
      <div className="mx-0 md:mx-20 ">
        <SectionHeader id="about" title="About me" className="pb-2" />
        <FlexContainer>
          <TextContainer>
            <Paragraph>
              <p>
                I am a software engineer, IT expert, and a nerd. I hold a
                Bachelor of Science in{" "}
                <GreenLinkItem
                  text={"Software Development"}
                  url={
                    "https://www.wgu.edu/online-it-degrees/software-development-bachelors-program.html"
                  }
                />{" "}
                from{" "}
                <GreenLinkItem
                  text={"Western Governors University."}
                  url={"https://www.wgu.edu/"}
                />{" "}
              </p>
            </Paragraph>
            <Paragraph>
              Growing up I had always had a passion for taking things apart,
              breaking stuff, and figuring out how to put things back together
              again. I am a creative person and love creating and designing
              beautiful experiences and elegant software and solutions. Whether
              it be music, art, or technology, I just love to make things.
            </Paragraph>
            <Paragraph>
              <p>
                I am also a natural problem solver and I get a lot of
                gratification solving difficult problems. I am{" "}
                <GreenLinkItem
                  text={"A+ certified"}
                  url={"https://www.comptia.org/certifications/a"}
                />{" "}
                and can provide IT troubleshooting support. I've built and
                maintained several computers.
              </p>
            </Paragraph>
            <Paragraph>
              <p>
                In my free time, I love to make music, play board and video
                games, and enjoy a beer or two with friends.
              </p>
            </Paragraph>
            <Paragraph>
              <p>I am most proficent in the following technologies :</p>
            </Paragraph>
            <TechList />
            <Paragraph>
              <p>
                A full list of technologies I have worked with can be viewed
                either on my{" "}
                <GreenLinkItem
                  text={"resume"}
                  url={"/assets/ChristopherKellerResumeSD.pdf"}
                />{" "}
                or my{" "}
                <GreenLinkItem
                  text={"GitHub."}
                  url={"https://github.com/ckeller22"}
                />
              </p>
            </Paragraph>
          </TextContainer>

          <PortraitImage />
        </FlexContainer>
      </div>
    </CenteredContainer>
  );
};

export default About;
