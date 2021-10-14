import React, { useEffect } from "react";
import {
  Section,
  Title,
  ContentBx,
  Content,
  ImgBx,
  Img,
  Button,
  LinkB,
} from "./about.styles";
import img from "../../images/img.jpg";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-in-sine" });
  }, []);
  return (
    <Section id="about">
      <Title>
        <h2>Who is this guy?</h2>
      </Title>
      <ContentBx>
        <Content>
          <ImgBx data-aos="fade-up" data-aos-once="true">
            <Img src={img}></Img>
          </ImgBx>
        </Content>
        <Content>
          <p>
            Web developer from Bishkek, Kyrgyzstan. Now I live and work in
            Prague. My main area of work is <strong>front end</strong>, cuz i
            love creating stunning modern user interfaces with amazing
            <strong> page transitions</strong> and
            <strong> animations</strong>. Have serious passion for{" "}
            <strong> minimalist</strong> design and also great knowledge of
            other design mainstreams. My web applications are always{" "}
            <strong> adaptive</strong> to all types of screens (responsive).
            Follow my
            <LinkB to="/blog"> blog </LinkB>
            to read more about my skills and to share my vision in design and
            web development.
            <br /> <br />
            More facts about me: I love playing video games. Had played 3k+
            hours <strong> DOTA 2</strong>. Fan of <strong> Elon Musk</strong>{" "}
            and <strong> Steve Jobs</strong>. Professional Basketball player
            (joke). Favourite team is <strong> GSW</strong>. Watched 50+ anime
            titles.
            <br /> <br />
          </p>
          Always interested in engaging projects and ready for cooperation
          proposals.
          <Button
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
          >
            Get in touch
          </Button>
        </Content>
      </ContentBx>
    </Section>
  );
};

export default About;
