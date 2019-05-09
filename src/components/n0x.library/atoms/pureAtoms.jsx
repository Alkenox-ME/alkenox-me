import React from "react";
import { decamelize } from "humps";
import styled, { css } from "styled-components/macro";
import {
  colors,
  text,
  space,
  size,
  backgroundImage,
  backgroundColor,
  border,
  list,
  position,
  utility,
  textUnderline,
  textShadow,
  fx,
  shape,
  breaks
} from "../lib";
import {
  MenuFx1,
  underlineCenter,
  underlineLtR,
  underlineRtL,
  underlineInOut,
  underlineInOutInverse,
  underlineTtB,
  underlineBtT,
  Button1,
  Button2,
  Sound,
  Mx,
  Photo,
  Vx,
  Gx,
  Web,
  Rx,
  ImgZoom
} from "../animate";

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

const getHover1 = ({ hover1 }) => hover1 && `${underlineCenter}`;
const getHover2 = ({ hover2 }) => hover2 && `${underlineLtR}`;
const getHover3 = ({ hover3 }) => hover3 && `${underlineRtL}`;
const getHover4 = ({ hover4 }) => hover4 && `${underlineInOut}`;
const getHover5 = ({ hover5 }) => hover5 && `${underlineInOutInverse}`;
const getHover6 = ({ hover6 }) => hover6 && `${underlineTtB}`;
const getHover7 = ({ hover7 }) => hover7 && `${underlineBtT}`;

const getRule = (ruleName, defaultRule) => props => {
  const foundRule = Object.keys(props).find(key => key.startsWith(ruleName));
  if (!foundRule || !props[foundRule]) {
    return defaultRule;
  }

  const [, ...rule] = decamelize(foundRule, { separator: "-" }).split("-");
  return rule.join("-");
};

const Block = styled.section`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${getRule("direction", "row")};
  flex-wrap: ${getRule("wrap", "wrap")};
  justify-content: ${getRule("justify", "center")};
  align-items: ${getRule("items", "stretch")};
  align-content: ${getRule("content", "stretch")};
  ${space}
  ${position}
`;

const Box = styled.div`
align-self: ${getRule("self", "center")};
align-content: ${getRule("content", "center")};
align-items: ${getRule("items", "center")};
justify-content: ${getRule("justify", "center")};
vertical-align: ${getRule("valign", "center")};
box-shadow: 10px 10px 8px #000000;

  ${utility}
  ${position}
  ${size}
  ${space}
  ${backgroundImage}
  ${fx}
`;

const Boxish = styled.div`
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

const UTitle = styled.span`
  border-bottom-width: ${getRule("bwidth", ".04")}em;
  border-bottom-color: ${getRule("bcolor", "inherit")};
  border-bottom-style: ${getRule("bstyle", "solid")};
  display: inline-block;
  line-height: 0.85;
  ${textShadow}
`;

const UText = styled.span`
  ${textUnderline}
  ${textShadow}
`;

const UFX = styled.span`
${props => getHover1(props)}
${props => getHover2(props)}
${props => getHover3(props)}
${props => getHover4(props)}
${props => getHover5(props)}
${props => getHover6(props)}
${props => getHover7(props)}
${props => getMenuFx1(props)}
`;

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

const BGimg = styled.div`
  text-align: ${getRule("talign", "center")};
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "center")};
  vertical-align: ${getRule("valign", "center")};
  ${shape}
  ${space}
  ${border}
  ${backgroundImage}
`;

const PT = styled.p`
  text-align: ${getRule("talign", "center")};
  font-weight: 600;
  font-size: 2em;
  opacity: .1;
  ${shape}
  ${text}
  ${border}
  ${space}
  ${fx}
  ${backgroundColor}
  @media (min-width: ${props => props.theme.breakpoints.lp}px) {
    font-size: 1.1em;
  }
`;

const TP1 = styled.p`
  text-align: ${getRule("talign", "left")};
  padding: ${props => props.pad || "0 auto"};
  ${shape}
  ${text}
  ${border}
  ${fx}
  ${backgroundColor}
`;

const TP = styled.p`
  text-align: ${getRule("talign", "center")};
  padding: ${props => props.pad || "0 auto"};
  font-size: .85em;
  font-weight: bold;
  ${shape}
  ${text}
  ${border}
  ${fx}
  ${backgroundColor}
`;

const BGcolor = styled.div`
  display: flex;
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "center")};
  vertical-align: ${getRule("valign", "center")};
  opacity: .3;
  ${shape}
  ${space}
  ${border}
  ${backgroundColor}
  :hover {
    opacity: .9;
    transition: all .5s ease;
  }
  :hover ${PT} {
    opacity: .9;
    transition: all .5s ease;
  }
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

const SoundBlock = styled(Sound)`
  ${size}
  ${shape}
  ${space}
`;

const MxBlock = styled(Mx)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const PhotoBlock = styled(Photo)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const VxBlock = styled(Vx)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const GxBlock = styled(Gx)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const WebBlock = styled(Web)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const RxBlock = styled(Rx)`
  ${text}
  ${size}
  ${space}
  ${fx}
`;

const FT = styled.div`
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

const T = styled.p`
  text-indent: ${props => props.tindent || null}em;
  text-align: ${getRule("talign", "left")};
  max-width: 80vw;
  margin: 0 auto;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T1 = styled.h1`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T2 = styled.h2`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T3 = styled.h3`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T4 = styled.h4`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T5 = styled.h5`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const T6 = styled.h6`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const List = styled.ul`
  text-align: ${getRule("talign", "inherit")};
  list-style: ${getRule("lstyle", "none")};
  list-style-position: ${getRule("lposition", "outside")};
  ${list}
  ${text}
  ${space}
  ${size}
  ${fx}
`;

const ListItem = styled.li`
  text-align: ${getRule("talign", "inherit")};
  ${list}
  ${text}
  ${space}
  ${fx}
`;

const Href = styled.a`
  text-align: ${getRule("talign", "inherit")};
  cursor: pointer;
  ${text}
  ${space}
  ${fx}
`;

const HMenu = styled.ul`
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

const MenuItem = styled.li`
  display: ${getRule("display", "inline")};
  text-align: ${getRule("talign", "inherit")};
  cursor: pointer;
  ${space}
  ${fx}
`;

const Divider = styled.hr`
  display: block;
  width: ${props => (props.width ? props.width : "100")}vw;
  height: ${props => (props.height ? props.height : "0")}vh;
  ${space}
`;

export {
  Block,
  Box,
  Boxish,
  HMenu,
  MenuItem,
  UTitle,
  UText,
  UFX,
  List,
  ListItem,
  Image,
  Href,
  T,
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  PT,
  TP,
  TP1,
  BTN,
  Divider,
  SoundBlock,
  MxBlock,
  PhotoBlock,
  VxBlock,
  GxBlock,
  WebBlock,
  RxBlock,
  BGimg,
  BGcolor,
  FT
};
