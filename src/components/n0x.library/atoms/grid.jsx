import styled from 'styled-components'
import { space, size, backgroundImage, backgroundColor, border, position, utility, fx, shape } from "../style";
import { getRule } from "../lib";

/*
const getFlow = ({ row, column }) => {
  if (row) {
    return 'flex-flow: row wrap;'
  } else if (column) {
    return 'flex-flow: column wrap;'
  } else return
}

const getWidth = ({ props }) => {
  const percent = 100 / props.lp;
  return `width: ${percent}%;`
}
 */

export const Block = styled.section`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${getRule("direction", "row")};
  flex-wrap: ${getRule("wrap", "wrap")};
  justify-content: ${getRule("justify", "center")};
  align-items: ${getRule("items", "stretch")};
  align-content: ${getRule("content", "stretch")};
  ${space}
  ${position}
`;

export const Box = styled.div`
align-self: ${getRule("self", "center")};
align-content: ${getRule("content", "center")};
align-items: ${getRule("items", "center")};
justify-content: ${getRule("justify", "center")};
vertical-align: ${getRule("valign", "center")};
  ${utility}
  ${position}
  ${size}
  ${shape}
  ${space}
  ${backgroundImage}
  ${backgroundColor}
  ${fx}
  ${border}
`;

export const BoxIt = styled.div`
align-self: ${getRule("self", "center")};
align-content: ${getRule("content", "center")};
align-items: ${getRule("items", "center")};
justify-content: ${getRule("justify", "center")};
vertical-align: ${getRule("valign", "center")};
  ${utility}
  ${position}
  ${shape}
  ${space}
  ${backgroundImage}
  ${fx}
  ${border}
`;

export const BgBox = styled.div`
align-self: ${getRule("self", "center")};
align-content: ${getRule("content", "center")};
align-items: ${getRule("items", "center")};
justify-content: ${getRule("justify", "center")};
vertical-align: ${getRule("valign", "center")};
object-fit: ${props => props.objFit || "cover"};
object-position: ${props => props.objPosition || "center"};
position: absolute;
left: 0;
right: 0;
  ${utility}
  ${space}
  ${shape}
  ${fx}
  ${border}
  ${backgroundImage}
  ${backgroundColor}
`;

export const Boxish = styled.div`
align-self: ${getRule("self", "center")};
align-content: ${getRule("content", "center")};
align-items: ${getRule("items", "center")};
justify-content: ${getRule("justify", "center")};
vertical-align: ${getRule("valign", "center")};
  height: 100%;
  width: 100%;
  ${utility}
  ${position}
  ${space}
  ${backgroundColor}
  ${fx}
`;
