import styled from 'styled-components/macro'
import { MenuFx1 } from "../../atoms/underline/underlineFx";
import { text, space, backgroundColor, fx, shape, link, breakpoint } from "../../style";
import { Sidebar, Item } from './navPose';
import { getRule } from "../../lib";
import { Link } from '@reach/router';

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
    right: 0;
    z-index:10000;
  `;
  } else {
    return `
    position: null;
  `;
  }
};

export const HMenu = styled(Sidebar)`
  text-align: ${getRule("talign", "center")};
  list-style: ${getRule("lstyle", "none")};
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "space-between")};
  vertical-align: ${getRule("valign", "center")};
  margin: 0;
  width: 100%;
  padding: .5em;
  ${text}
  ${backgroundColor}
  ${props => getMenuFx1(props)}
  ${props => getNav(props)}

    @media (min-width: ${breakpoint[1]}em) {
      transform: translateY(50%);
      height: 8vh;
    }

    @media (min-width: ${breakpoint[2]}em) {
      transform: translateY(50%);
      height: 8vh;
    }
`;

export const MenuItem = styled(Item)`
  display: block;
  text-align: ${getRule("talign", "inherit")};
  cursor: pointer;
  padding-top: 5vh;
  padding-bottom: 5vh;
  ${space}
  ${fx}

  @media (min-width: ${breakpoint[1]}em) {
    display: inline;
    width: 100%;
  }

  @media (min-width: ${breakpoint[2]}em) {
    display: inline;
    width: 100%;
  }
`;

export const MenuLink = styled(Link)`
  text-align: ${getRule("talign", "inherit")};
  color: ${props => props.theme.colors.link[0]};
  cursor: pointer;
  ${space}
  ${fx}
  :hover, :focus {
    color: ${props => props.theme.colors.link[1]};
  }
`;
