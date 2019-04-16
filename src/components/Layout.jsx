import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Flex } from "./n0x.Bass";
import { HomeBtn, AboutBtn, ContactBtn, Footer, SeoPage } from './n0x.elements';
import { Page, slideInRight, slideOutRight, slideInLeft, slideOutLeft, fadeInLeft, fadeInRight, fadeOutLeft, fadeOutRight, fadeIn, fadeOut } from '../components/n0x.Animate'

const Layout = ({ image, tint, children, pgTitle, pgDesc, copyYear, copyCompany, inAnimation, outAnimation }) => {

    const BGImage = styled(Flex)`
      background-image: url(${image});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    `;

    const BGTint = styled(Box)`
      min-width: 100vw;
      min-height: 100vh;
      background-color: ${tint};
    `;

    // NavBar Style
    const NavBar = styled(Box)`
      z-index: 1000;
      position: fixed;
      top: 0;
      padding: 1em;
    `;

    return (
        <BGImage>
          <BGTint>
            <SeoPage pgTitle={pgTitle} pgDesc={pgDesc} />
            <NavBar width={[1]}>
              <Link to="/">
                <HomeBtn />
              </Link>
              <Link to="/about-us">
                <AboutBtn />
              </Link>
              <Link to="/contact-us">
                <ContactBtn />
              </Link>
            </NavBar>
            <Flex p={[3]}>{children}</Flex>
            <Footer
              copyright="Copyright"
              symbol="&copy;"
              year={copyYear}
              company={copyCompany}
              rights="All rights reserved."
            />
          </BGTint>
        </BGImage>
    );
  }

export default Layout;
