import React from "react";
import styled from "styled-components/macro";
import SeoGlobal from '../Seo/SeoGlobal'
import N0xTheme from "../Theme/N0xTheme";

const GlobalLayout = (props) => {

  const BG = styled.div`
      background-image: url(${props.image || null});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
      width: 100vw;
      min-height: 100vh;
    `;

  return (
    <N0xTheme>
      <SeoGlobal {...props} />
      <BG>

        {props.children}

      </BG>
    </N0xTheme>
    );
  }

export default GlobalLayout;
