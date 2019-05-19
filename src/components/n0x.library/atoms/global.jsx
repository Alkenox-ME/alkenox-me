import styled from 'styled-components/macro'
import { MenuFx1 } from "../animate";
import { getRule, text, space, backgroundColor, fx, shape } from "../lib";

 const getMenuFx1 = ({ menuFx1 }) => {
   if (menuFx1) {
     return `
     ${MenuFx1}
   `;
   } else {
     return `
     hr {
       visibility: hidden;
     }
   `;
   }
 };

const getNav = ({ fixed }) => {
  if (fixed) {
    return `
    position: fixed;
    top: 0;
    left: 0;
    z-index:10000;
  `;
  } else {
    return `
    position: null;
  `;
  }
};

const getFoot = ({ fixed }) => {
  if (fixed) {
    return `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:10000;
  `;
  } else {
    return `
    position: null;
  `;
  }
};


export const FT = styled.div`
  text-align: ${getRule("talign", "center")};
  max-width: 100vw;
  font-size: .5em;
  padding: .5em;
  color: ${props => props.theme.colors.white};
  font-weight: 100;
  ${space}
  ${shape}
  ${backgroundColor}
  ${props => getFoot(props)}
`;

export const HMenu = styled.ul`
  display: ${getRule("display", "inline")};
  text-align: ${getRule("talign", "center")};
  list-style: ${getRule("lstyle", "none")};
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "space-between")};
  vertical-align: ${getRule("valign", "center")};
  margin: 0;
  width: 100%;
  height: 2em;
  padding: .5em;
  ${text}
  ${backgroundColor}
  ${props => getMenuFx1(props)}
  ${props => getNav(props)}
`;

export const MenuItem = styled.li`
  display: ${getRule("display", "inline")};
  text-align: ${getRule("talign", "inherit")};
  cursor: pointer;
  ${space}
  ${fx}
`;
