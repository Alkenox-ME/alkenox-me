import React from "react";
import styled from "styled-components";
import SeoPage from "../Seo/SeoPage";
import { Block } from "../../atoms";
import { Container } from "../Router/routeAnimations";

const PageLayout = (props) => {
  const Tint = styled(Container)`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props.color || 'rgba(0,0,0,0)'};
  `;

  return (
    <Tint key={props.children}>
      <Block px={"2%"} py={"4%"}>
        <SeoPage {...props} />
        {props.children}
      </Block>
    </Tint>
  );
};

export default PageLayout;
