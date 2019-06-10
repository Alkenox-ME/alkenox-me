import React, {Fragment, useState, useEffect} from "react";

import { UFX, Image } from "../../atoms";
import { HMenu, MenuItem, MenuLink } from "./navStyles";

import LogoA from "../../../../static/philoStone-icon-a.svg"
import LogoB from "../../../../static/philoStone-icon-b.svg"

const NavBar = ({i}) => {
    let [ open, setOpen ] = useState(false);

    let tShadow = '2px 2px 6px #000000'
    let bShadow = '0px 5px 1px 10px'

    let Logo = (
      <Image
        style={{cursor: 'pointer'}}
        position={'fixed'}
        objFit={'contain'}
        width={'8vw'}
        src={ LogoA }
        alt='logo'
        zIndex={10001}
        left={'2vw'}
        top={'2vh'}
        bRadius={'100%'}
        onClick={() => setOpen(open === i ? false : i )}
      />
                )

    let LogoOpen = (
      <Image
        style={{cursor: 'pointer'}}
        position={'fixed'}
        objFit={'contain'}
        width={'8vw'}
        src={ LogoB }
        alt='logo'
        zIndex={10001}
        left={'2vw'}
        top={'2vh'}
        bRadius={'100%'}
        onClick={() => setOpen(open === i ? false : i )}
      />
                   )

  return (
    <Fragment>

      { open === i ? Logo : LogoOpen }

      <HMenu
        fixed
        filter={'drop-shadow(0px 5px 1px 5px)'}
        bgColor={props => props.theme.colors.tint.black[4]}
        boxShadow={bShadow}
        pose={open === i ? 'open' : 'closed'}
      >

        <MenuItem mx={"4%"}>
          <UFX hover3>
            <MenuLink
              to="/"
              textShadow={tShadow}
              onClick={() => setOpen(open === i ? false : i )}
            >
              Home
            </MenuLink>
          </UFX>
        </MenuItem>

        <MenuItem mx={"4%"}>
          <UFX hover1>
            <MenuLink
              to="services"
              textShadow={tShadow}
              onClick={() => setOpen(open === i ? false : i )}
            >
              Services
            </MenuLink>
          </UFX>
        </MenuItem>

        <MenuItem mx={"4%"}>
          <UFX hover1>
            <MenuLink
              to="about-us"
              textShadow={tShadow}
              onClick={() => setOpen(open === i ? false : i )}
            >
              About
            </MenuLink>
          </UFX>
        </MenuItem>

        <MenuItem mx={"4%"}>
          <UFX hover2>
            <MenuLink
              to="contact-us"
              textShadow={tShadow}
              onClick={() => setOpen(open === i ? false : i )}
            >
              Contact
            </MenuLink>
          </UFX>
        </MenuItem>

        <hr />

      </HMenu>

    </Fragment>
  );
};

export default NavBar;
