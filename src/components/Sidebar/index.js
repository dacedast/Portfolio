import React from "react";
import { Navigation, NavItem, NavItemR } from "./sidebar.styles";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Navigation isOpen={isOpen} onClick={toggle}>
      <NavItem
        to="home"
        onClick={toggle}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        Home
      </NavItem>
      <NavItem
        to="about"
        onClick={toggle}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        About
      </NavItem>
      <NavItem
        to="recent"
        onClick={toggle}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        Recent Works
      </NavItem>
      <NavItemR to="/blog" onClick={toggle}>
        Blog
      </NavItemR>
      <NavItem
        to="contact"
        onClick={toggle}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
      >
        Contact
      </NavItem>
    </Navigation>
  );
};

export default Sidebar;
