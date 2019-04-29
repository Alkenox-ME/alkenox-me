import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const MainLayout = ({ image, tint, children, copyYear, copyCompany, ...props }) => {

  const BGImage = styled.div`
      background-image: url(${image});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    `;

  const BGTint = styled.div`
      width: 100%;
      height: 100%;
      background-color: ${tint};
    `;

    // NavBar Style
  const NavBar = styled.div`
      z-index: 1000;
      position: fixed;
      top: 0;
      padding: 1em;
      width: 100%;
    `;

  return (
    <N0xTheme>
      <BGImage>
        <SeoGlobal {...props} />
        <BGTint>
          <NavBar>
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
    </N0xTheme>
    );
  }

export {MainLayout};
