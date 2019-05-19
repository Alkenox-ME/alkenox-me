import React from "react";
import styled from "styled-components/macro";
import { SeoGlobal } from '../elements'
import { N0xTheme } from "../atoms";

const GlobalLayout = ({ image, tint, children, ...props }) => {

  const BG = styled.div`
      background-image: url(${image});
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

        {children}

      </BG>
    </N0xTheme>
    );
  }

export {GlobalLayout};
