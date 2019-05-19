
import styled from "styled-components/macro";
import { getRule, text, space, size, border, fx, shape } from "../lib";
import { Button1 } from "../animate";

const Image = styled.img`
    margin: 0 auto;
    ${size}
    ${shape}
    ${space}
    ${border}
    ${fx}
    object-fit: ${props => props.objFit || "cover"};
    object-position: ${props => props.objPosition || "center"};
  `;

const BTN = styled(Button1)`
  cursor: pointer;
  text-align: ${getRule("talign", "center")};
  ${text}
  ${shape}
  ${space}
  ${fx}
  ${border}
`;

const Divider = styled.hr`
  display: block;
  width: ${props => (props.width ? props.width : "100")}vw;
  height: ${props => (props.height ? props.height : "0")}vh;
  ${space}
`;

export {
  Image,
  BTN,
  Divider
};
