import React, {useState, setState} from "react";
import styled from "styled-components/macro";
import { Block } from "../../atoms";
import { Container } from "../Router/routeAnimations";

const ModalLayout = (props) => {
  let Tint = styled(Container)`
    width: 100vw;
    min-height: 100vh;
    background-color: ${props.color || null};
  `;

  return (
        <Tint key={props.children}>
          <Block px={"2%"} py={"6%"}>
            {props.children}
          </Block>
        </Tint>
  );
};

export default ModalLayout;
