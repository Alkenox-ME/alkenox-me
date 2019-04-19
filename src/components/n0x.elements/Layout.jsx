import React, { PureComponent } from "react";
import styled from "styled-components";
import posed from 'react-pose'
import { Flex } from "../n0x.Bass";
import { SeoPage } from './SeoPage'

const Layout = ({ image, tint, enter, leave, children, ...props }) => {
    const BGImage = styled.div`
      background-image: url(${image});
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
      background-size: cover;
    `;

    const BGTint = styled(Flex)`
      width: 100vw;
      min-height: 100vh;
      background-color: ${tint};
      position: relative;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    `;

    return (
        <BGTint p={[3]}>
          <SeoPage {...props} />
          {children}
        </BGTint>
    );
  }


export {Layout};
