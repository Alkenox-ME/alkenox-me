import React from "react";
import styled from "styled-components/macro";
import { SeoPage } from '../elements'
import { Block } from "../atoms";
import { Container } from '../animate';

const PageLayout = ({ opacity, color, children, ...props }) => {

    const Tint = styled(Container)`
      width: 100vw;
      min-height: 100vh;
      background-color: ${color};
      opacity: ${opacity};
    `;

    return (
      <Tint>
        <Block px={2} pt={6} pb={6}>
          <SeoPage {...props} />
          {children}
        </Block>
      </Tint>
    );
  }

export {PageLayout};
