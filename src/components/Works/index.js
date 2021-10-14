import React from "react";
import ScrollToTop from "../ScrollToTop";
import { Section, Title, ContentBx, BacktoMain } from "./works.styles";
import { works } from "./data";
const Works = () => {
  return (
    <>
      <ScrollToTop />
      <Section>
        <Title>
          <h2>My portfolio</h2>
          <BacktoMain to="/">Back to main page</BacktoMain>
        </Title>
        <ContentBx>
          {works.map((work) => (
            <div className="card" key={work.id}>
              <div className="content">
                <h2 className="title">{work.header}</h2>
                <p className="copy">{work.Text}</p>
                <a
                  className="btn"
                  href={work.BtnHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </ContentBx>
      </Section>
    </>
  );
};

export default Works;
