import React from "react";
import { BacktoMain, Section } from "./styles";
const NotFound = () => {
  return (
    <Section>
      <h1>404</h1>
      <p>Oops! Page Not Found</p>
      <BacktoMain to="/">Go back to main page</BacktoMain>
    </Section>
  );
};

export default NotFound;
