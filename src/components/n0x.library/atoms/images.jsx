
import styled from "styled-components";
import { text, space, size, border, fx, shape, position, backgroundImage } from "../style";
import { Button1 } from "../animate";
import { getRule } from "../lib";

export const Image = styled.img`
    margin: 0 auto;
    ${size}
    ${shape}
    ${space}
    ${border}
    ${fx}
    ${position}
    clip-path: ${props => props.clipPath || null};
    object-fit: ${props => props.objFit || "cover"};
    object-position: ${props => props.objPosition || "center"};
  `;

  export const BGimg = styled.div`
    text-align: ${getRule("talign", "center")};
    align-self: ${getRule("self", "center")};
    align-content: ${getRule("content", "center")};
    align-items: ${getRule("items", "center")};
    justify-content: ${getRule("justify", "center")};
    vertical-align: ${getRule("valign", "center")};
    z-index: 0;
    ${size}
    ${shape}
    ${space}
    ${border}
    ${position}
    ${backgroundImage}
    ${fx}
  `;
