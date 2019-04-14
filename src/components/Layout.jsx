import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Box, Flex } from "rebass";
import { HomeBtn, AboutBtn, ContactBtn, Footer, SeoPage } from './n0x.elements';

const Layout = class extends PureComponent {
  render() {
    const {
      image,
      tint,
      children,
      pgTitle,
      pgDesc,
      copyYear,
      copyCompany
    } = this.props;

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
      <BGImage flexWrap="wrap" justifyContent="center">
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
          {children}
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
};

Layout.propTypes = {
  children: PropTypes.element,
  image: PropTypes.string,
  tint: PropTypes.string,
  pgTitle: PropTypes.string,
  pgDesc: PropTypes.string,
  copyYear: PropTypes.number,
  copyCompany: PropTypes.string
};

Layout.defaultProps = {
  children: "",
  image: "",
  tint: "",
  pgTitle: "",
  pgDesc: "",
  copyYear: "",
  copyCompany: ""
};

export default Layout;
