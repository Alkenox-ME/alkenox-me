import styled, { css } from "styled-components";
import { getRule } from "../../lib";
import { TextProps, ListProps } from "../../../@types/css.d";

export const text = css<TextProps>`
  width: 100%;
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "center")};
  vertical-align: ${getRule("valign", "center")};
  font-family: ${props => (props.font ? props.font : null)};
  font-size: ${props => (props.size ? props.size : null)};
  color: ${props => props.color || null};
  line-height: ${props => (props.lineheight ? props.lineheight : "1.4em")};
  text-transform: ${props => props.ttransform || null};
  font-decoration: ${props => props.tdecoration || null};
  font-style: ${props => props.tstyle || null};
  font-weight: ${props => props.tweight || null};
  background: ${props => props.bg || null};
  text-shadow: ${props => props.tshadow || null};
  letter-space: ${props => props.letterspace || null};
  word-space: ${props => props.wordspace || null};
  font-size-adjust: ${props => props.tadjust || null};
  font-stretch: ${props => props.tstretch || null};
  text-underline-position: ${props => props.tunderpos || null};
  text-indent: ${props => props.tindent || null};
  text-overflow: ${props => props.toverflow || null};
  word-break: ${props => props.wordbreak || null};
  line-break: ${props => props.linebreak || null};
  word-wrap: ${props => props.twrap || null};
  text-align: ${props => props.talign || "center"};
  padding: ${props => props.p || null};
  margin: ${props => props.m || null};
  background: ${props => props.bg || null};
  border: ${props => props.border || null};
  opacity: ${props => props.opacity || null};
  box-shadow: ${props => props.boxshadow || null};
  text-shadow: ${props => props.tshadow || "inherit"};
  filter: ${props => props.filter || null};
  display: ${props => props.display || null};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};
  left: ${props => props.left || null};
  z-index: ${props => props.zindex || null};
`;

export const list = css<ListProps>`
  width: 100%;
  align-self: ${getRule("self", "center")};
  align-content: ${getRule("content", "center")};
  align-items: ${getRule("items", "center")};
  justify-content: ${getRule("justify", "space-inbetween")};
  vertical-align: ${getRule("valign", "center")};
  font-family: ${props => props.font || null};
  font-size: ${props => props.size || null};
  color: ${props => props.color || null};
  line-height: ${props => props.lineheight || null};
  text-transform: ${props => props.ttransform || null};
  font-decoration: ${props => props.tdecoration || null};
  font-style: ${props => props.tstyle || null};
  font-weight: ${props => props.tweight || null};
  background: ${props => props.bg || null};
  text-shadow: ${props => props.tshadow || "inherit"};
  letter-space: ${props => props.letterspace || null};
  word-space: ${props => props.wordspace || null};
  font-size-adjust: ${props => props.tadjust || null};
  font-stretch: ${props => props.tstretch || null};
  text-underline-position: ${props => props.tunderpos || null};
  text-indent: ${props => props.tindent || null};
  text-overflow: ${props => props.toverflow || null};
  word-break: ${props => props.wordbreak || null};
  line-break: ${props => props.linebreak || null};
  word-wrap: ${props => props.twrap || null};
  list-style: ${props => props.lstyle || "none inside"};
  text-align: ${props => props.talign || "center"};
  padding: ${props => props.p || null};
  margin: ${props => props.m || null};
  background: ${props => props.bg || null};
  border: ${props => props.border || null};
  opacity: ${props => props.opacity || null};
  box-shadow: ${props => props.boxshadow || null};
  text-shadow: ${props => props.textshadow || null};
  filter: ${props => props.filter || null};
  display: ${props => props.display || null};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};
  left: ${props => props.left || null};
  z-index: ${props => props.zindex || null};
  .noStyle {
    list-style: none;
  }
`;

export const tP = styled.p`
  ${text}
`;
export const P = styled.p`
  ${text}
`;
export const H1 = styled.h1`
  ${text}
`;
export const H2 = styled.h2`
  ${text}
`;
export const H3 = styled.h3`
  ${text}
`;
export const H4 = styled.h4`
  ${text}
`;
export const H5 = styled.h5`
  ${text}
`;
export const H6 = styled.h6`
  ${text}
`;

/******************/
export const List = styled.ul`
  ${list}
`;

export const Item = styled.li`
  ${list}
`;
