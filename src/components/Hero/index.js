import React from "react";
import { Section, Img, ContentBx, Button } from "./hero.styles";
import bg from "../../images/bg2.jpg";

const Hero = () => {
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  const fade = {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <Section id="home">
      <Img
        src={bg}
        // style={{ transform: `translateY(${offsetY * 0.7}px)` }}
      ></Img>
      <ContentBx
        variants={fade}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
      >
        <h2>Hi, I'm Dastan</h2>
        <h4>And I'm a Web developer</h4>

        <Button to="about" smooth={true} duration={500} spy={true} exact="true">
          About me
        </Button>
      </ContentBx>
    </Section>
  );
};

export default Hero;
