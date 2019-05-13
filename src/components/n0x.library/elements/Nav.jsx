import React from "react";
import { Link } from "@reach/router";
import { HMenu, MenuItem, UFX } from "../atoms";

const Nav = () => {
  return (
    <HMenu fixed bgColor={props => props.theme.colors.tint.black[4]}>
      <MenuItem mx={"8%"}>
        <UFX hover3>
          <Link to="/">Home</Link>
        </UFX>
      </MenuItem>
      <MenuItem mx={"8%"}>
        <UFX hover1>
          <Link to="/about-us">About</Link>
        </UFX>
      </MenuItem>
      <MenuItem mx={"8%"}>
        <UFX hover2>
          <Link to="/contact-us">Contact</Link>
        </UFX>
      </MenuItem>
      <hr />
    </HMenu>
  );
};

export { Nav };
