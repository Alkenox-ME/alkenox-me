// eslint-disable-next-line
// @Flow
import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";
import { nox } from "./theme/overRide";
import { Box, Text, Image } from "rebass";
import navbg from "../static/images/bg-nav2.png";
import mark from "../static/images/logo-mark-icon.svg";

const Navbar = () => {
  const NavLink = styled(Link)`
    color: ${nox.font.link.color[0]};
    transition: all 1s ease-in-out;
    :hover {
      color: ${nox.font.link.color[1]};
      transition: all 0.5s ease-in-out;
    }
  `;

  return (
    <Box>
      <ul>
        <Image src={mark} alt={"alkenox-me"} width={"4%"} height={"4%"} />
        <Text>alkenox-me</Text>
        <li>
          <Text>
            <NavLink to={"/"}>Home</NavLink>
          </Text>
        </li>
        <li title={"Our Branding Service"}>
          <NavLink to={"/branding-service"}>Branding</NavLink>
        </li>
        <li title={"Content Creation"}>
          <NavLink to={"/content-creation"}>Content</NavLink>
        </li>
        <li>
          <NavLink to={"/about-us"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact-us"}>Contact</NavLink>
        </li>
      </ul>
    </Box>
  );
};

export default Navbar;
