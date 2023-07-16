import React from "react";
import SocialmediaHandles from "./SocialMediaHandles";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import { Divider } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ backgroundColor: "#010815", color: "#fff" }}>
      <SocialmediaHandles />
      <Divider />
      <FooterContent />
      <Divider />
      <FooterBottom />
    </div>
  );
}

export default Footer;
