import React, { useState, setState } from "react";
import { Link } from  '@reach/router';
import { HMenu, MenuItem, UFX, MenuLink } from "../atoms";
import { ModalTrigger } from "../elements";
import Services from '../../Services'

const Nav = () => {
  return (
      <HMenu fixed bgColor={props => props.theme.colors.tint.black[4]}>
        <MenuItem mx={"8%"}>
          <UFX hover3>
            <MenuLink to="/">Home</MenuLink>
          </UFX>
        </MenuItem>
        <MenuItem mx={"8%"}>
          <UFX hover1>
            <MenuLink to="services">Services</MenuLink>
          </UFX>
        </MenuItem>
        <MenuItem mx={"8%"}>
          <UFX hover1>
            <MenuLink to="about-us">About</MenuLink>
          </UFX>
        </MenuItem>
        <MenuItem mx={"8%"}>
          <UFX hover2>
            <MenuLink to="contact-us">Contact</MenuLink>
          </UFX>
        </MenuItem>
        <hr />
      </HMenu>
  );
};

export { Nav };
