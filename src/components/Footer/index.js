import React from "react";
import { Logo1, Footer1, Text, Wrapper, IconS } from "./footer.styles";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import Logo from "../Logo";

const Footer = () => {
  return (
    <Footer1>
      <Logo1 to="home" smooth={true} duration={500} spy={true} exact="true">
        <Logo />
      </Logo1>
      <Text>
        Copyright © {new Date().getFullYear() + ` `} Made with love. All rights
        reserved.
      </Text>
      <Wrapper>
        <IconS
          href="https://www.facebook.com/profile.php?id=100069352808363"
          target="_blank"
        >
          <AiOutlineFacebook size={30} />
        </IconS>
        <IconS href="https://www.instagram.com/da.stunnning/" target="_blank">
          <AiOutlineInstagram size={30} />
        </IconS>
        <IconS
          href="https://wa.me/996507707997?text=Hi, My name is _____. And I wanted to ask u about ..."
          target="_blank"
        >
          <AiOutlineWhatsApp size={30} />
        </IconS>
      </Wrapper>
    </Footer1>
  );
};

export default Footer;
