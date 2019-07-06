
import styled from "styled-components";
import { text, space, size, border, fx, shape } from "../style";
import { Button1 } from "../animate";
import { getRule } from "../lib";

export const BTN = styled.button`
  cursor: pointer;
  text-align: ${getRule("talign", "center")};
  ${text}
  ${shape}
  ${space}
  ${fx}
  ${border}
`;

export const Divider = styled.hr`
  display: block;
  width: ${props => (props.width ? props.width : "100")}vw;
  height: ${props => (props.height ? props.height : "0")}vh;
  ${space}
`;
