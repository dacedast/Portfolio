import React, { useState, useEffect } from "react";
import { Header, Logo1 } from "./navbar.styles";
import { GoThreeBars } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import Logo from "../Logo";
const Navbar = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
    return () => {
      setScrollNav(true);
    };
  }, []);
  return (
    <Header scrollNav={scrollNav}>
      <Logo1 to="home" smooth={true} duration={500} spy={true} exact="true">
        <Logo />
      </Logo1>

      {isOpen ? (
        <GrClose
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
            color: "#333",
          }}
          onClick={toggle}
        />
      ) : (
        <GoThreeBars
          style={{
            width: "30px",
            height: "30px",
            cursor: "pointer",
            color: "#333",
          }}
          onClick={toggle}
        />
      )}
    </Header>
  );
};

export default Navbar;
