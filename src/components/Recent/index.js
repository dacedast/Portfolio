import React, { useEffect } from "react";
import { Section, Title, ContentBx, Btn2 } from "./recent.styles";
import Aos from "aos";
import "aos/dist/aos.css";
import "./recent.styles.css";

const Recent = () => {
  useEffect(() => {
    Aos.init({ duration: 700, easing: "ease-in-sine" });
  }, []);
  return (
    <Section id="recent">
      <Title>
        <h2>Recent Works</h2>
      </Title>
      <ContentBx>
        <div className="card">
          <div className="content">
            <h2 className="title">Tic Tac Toe</h2>
            <p className="copy">
              Popular two player game. Made with Html, Css and Javascript
            </p>
            <a
              className="btn"
              href="https://dazzling-bose-107096.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Demo
            </a>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">New works are coming...</h2>
            <p className="copy">--</p>
            <button className="btn">Demo</button>
          </div>
        </div>
        <div className="card">
          <div className="content">
            <h2 className="title">New works are coming...</h2>
            <p className="copy">--</p>
            <button className="btn">Demo</button>
          </div>
        </div>
      </ContentBx>
      <Btn2 to="/works">Load More...</Btn2>
    </Section>
  );
};

export default Recent;
