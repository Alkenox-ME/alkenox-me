// eslint-disable-next-line
// @Flow
import styled from "styled-components";
import { getRule } from "../../lib";
import { breakpoint } from "../../lib";
import { GridProps } from "../../../@types/css.d";

export const Box = styled.div<GridProps>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${getRule("direction", "row")};
  flex-wrap: ${getRule("wrap", "wrap")};
  align-self: ${getRule("self", "center")};
  justify-content: ${getRule("justify", "center")};
  align-items: ${getRule("items", "stretch")};
  align-content: ${getRule("content", "stretch")};
  width: ${props => (props.ms ? 100 / props.ms : 100)}%;
  height: ${props => props.height || null};
  min-width: ${props => props.minwidth || null};
  min-height: ${props => props.minheight || null};
  max-width: ${props => props.maxwidth || null};
  max-height: ${props => props.maxheight || null};
  font-family: ${props => props.font || null};
  font-size: ${props => props.size || null};
  color: ${props => props.color || null};
  line-height: ${props => (props.lineheight ? props.lineheight : "inherit")};
  text-transform: ${props => props.ttransform || null};
  font-decoration: ${props => props.tdecoration || null};
  font-style: ${props => props.tstyle || null};
  font-weight: ${props => props.tweight || null};
  background: ${props => props.bg || null};
  background-size: ${props => props.bgsize || "cover"};
  background-position: ${props => props.bgposition || "center top"};
  text-shadow: ${props => props.tshadow || null};
  letter-space: ${props => props.letterspace || null};
  word-space: ${props => props.wordspace || null};
  text-size-adjust: ${props => props.tadjust || null};
  text-stretch: ${props => props.tstretch || null};
  text-underline-position: ${props => props.tunderpos || null};
  text-indent: ${props => props.tindent || null};
  text-overflow: ${props => props.toverflow || null};
  word-break: ${props => props.wordbreak || null};
  line-break: ${props => props.linebreak || null};
  text-wrap: ${props => props.twrap || null};
  text-align: ${props => props.talign || "center"};
  padding: ${props => props.p || "0 2rem"};
  margin: ${props => props.m || null};
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
  list-style: ${props => props.lstyle || "none"};

  @media (min-width: ${breakpoint[1]}em) {
    width: ${props => (props.lp ? 100 / props.lp : null)}%;
  }

  @media (min-width: ${breakpoint[2]}em) {
    width: ${props => (props.tv ? 100 / props.tv : null)}%;
  }
`;

export const Screen = styled.div<GridProps>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${getRule("direction", "row")};
  flex-wrap: ${getRule("wrap", "wrap")};
  justify-content: ${getRule("justify", "center")};
  align-items: ${getRule("items", "center")};
  align-content: ${getRule("content", "center")};
  width: ${props => (props.ms ? 100 / props.ms : 100)}%;
  height: ${props => props.height || null};
  min-width: ${props => (props.ms ? 100 / props.ms : null)}%;
  min-height: ${props => props.minheight || 100}vh;
  max-width: ${props => (props.ms ? 100 / props.ms : null)}%;
  max-height: ${props => props.maxheight || null};
  font-family: ${props => props.font || null};
  font-size: ${props => props.size || null};
  color: ${props => props.color || null};
  line-height: ${props => props.lineheight || null};
  text-transform: ${props => props.ttransform || null};
  font-decoration: ${props => props.tdecoration || null};
  font-style: ${props => props.tstyle || null};
  font-weight: ${props => props.tweight || null};
  background: ${props => props.bg || null};
  background-size: ${props => props.bgsize || "cover"};
  background-position: ${props => props.bgposition || "center"};
  text-shadow: ${props => props.tshadow || null};
  letter-space: ${props => props.letterspace || null};
  word-space: ${props => props.wordspace || null};
  text-size-adjust: ${props => props.tadjust || null};
  text-stretch: ${props => props.tstretch || null};
  text-underline-position: ${props => props.tunderpos || null};
  text-indent: ${props => props.tindent || null};
  text-overflow: ${props => props.toverflow || null};
  word-break: ${props => props.wordbreak || null};
  line-break: ${props => props.linebreak || null};
  text-wrap: ${props => props.twrap || null};
  text-align: ${props => props.talign || "center"};
  padding: ${props => props.p || null};
  margin: ${props => props.m || null};
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
  list-style: ${props => props.lstyle || "none"};

  @media (min-width: ${breakpoint[1]}em) {
    width: ${props => (props.lp ? 100 / props.lp : null)}%;
  }

  @media (min-width: ${breakpoint[2]}em) {
    width: ${props => (props.tv ? 100 / props.tv : null)}%;
  }
`;

export const Shape = styled.div<GridProps>`
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-direction: ${getRule("direction", "row")};
  flex-wrap: ${getRule("wrap", "wrap")};
  justify-content: ${getRule("justify", "center")};
  align-items: ${getRule("items", "center")};
  align-content: ${getRule("content", "center")};
  width: ${props => props.width || null};
  height: ${props => props.height || null};
  min-width: ${props => props.minwidth || null};
  min-height: ${props => props.minheight || null};
  max-width: ${props => props.maxwidth || null};
  max-height: ${props => props.maxheight || null};
  font-family: ${props => props.font || null};
  font-size: ${props => props.size || null};
  color: ${props => props.color || null};
  line-height: ${props => props.lineheight || null};
  text-transform: ${props => props.ttransform || null};
  font-decoration: ${props => props.tdecoration || null};
  font-style: ${props => props.tstyle || null};
  font-weight: ${props => props.tweight || null};
  background: ${props => props.bg || null};
  background-size: ${props => props.bgsize || "cover"};
  background-position: ${props => props.bgposition || "center"};
  text-shadow: ${props => props.tshadow || null};
  letter-space: ${props => props.letterspace || null};
  word-space: ${props => props.wordspace || null};
  text-size-adjust: ${props => props.tadjust || null};
  text-stretch: ${props => props.tstretch || null};
  text-underline-position: ${props => props.tunderpos || null};
  text-indent: ${props => props.tindent || null};
  text-overflow: ${props => props.toverflow || null};
  word-break: ${props => props.wordbreak || null};
  line-break: ${props => props.linebreak || null};
  text-wrap: ${props => props.twrap || null};
  text-align: ${props => props.talign || "center"};
  padding: ${props => props.p || null};
  margin: ${props => props.m || null};
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
  list-style: ${props => props.lstyle || "none"};
`;
