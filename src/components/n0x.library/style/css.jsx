import { css } from "styled-components";
import { breakpoint } from "./breaks";

// Text
export const text = css`
  font-size: ${props => props.fontSize || null}em;
  font-weight: ${props => props.fontWeight || null};
  text-decoration: ${props => props.tDecoration || null};
  text-justify: ${props => props.tJustify || null};
  letter-spacing: ${props => props.lSpace || null};
  line-height: ${props => props.lHeight || null};
  font-family: ${props => props.font || null};
  color: ${props => props.color || props.theme.colors.bodytext};
  word-break: ${props => props.wBreak || null};
  word-spacing: ${props => props.wSpacing || null};
  word-wrap: ${props => props.wWrap || null};
`;

export const link = css`
  color: ${props => props.linkColor1 ? props.linkColor1 : props.theme.colors.link[0]};
  cursor: pointer;

  :hover {
    color: ${props => props.linkColor2 ? props.linkColor2 : props.theme.colors.link[1]};
  }
`

export const list = css`
  list-style: ${props => props.listStyle || null};
  list-style-image: ${props => props.listStyleImage || null};
  list-style-position: ${props => props.listStylePosition || null};
  list-style-type: ${props => props.listStyleType || null};
`;

// Underlines
export const textUnderline = css`
  background-size: 0.01em 1em;
  box-shadow: inset 0 -0.12em ${props => props.theme.colors.body},
    inset 0 -0.15em ${props => props.theme.colors.bodytext};
  display: inline;
`;

export const shadowUnderlineDbl = css`
  background-size: 1px 1em;
  display: inline;
  box-shadow: inset 0 -0.075em ${props => props.theme.colors.body},
    inset 0 -0.1em ${props => props.theme.colors.red},
    inset 0 -0.15em ${props => props.theme.colors.body},
    inset 0 -0.175em ${props => props.theme.colors.red};
`;

// Backgrounds
export const backgroundColor = css`
  background: ${props => props.bgColor || null};
`;

export const backgroundImage = css`
  background-image: url(${props => props.bgImage || null});
  background-size: ${props => props.bgSize || "cover"};
  background-position: ${props => props.bgPosition || "center"};
  background-attachment: ${props => props.bgAttachment || null};
  background-origin: ${props => props.bgOrigin || null};
`;

// FX
export const fx = css`
  opacity: ${props => props.opacity || "none"};
  box-shadow: ${props => props.boxShadow || "none"};
  text-shadow: ${props => props.textShadow || "none"};
  filter: ${props => props.filter || "none"};
`;

// Tools
export const border = css`
  border-radius: ${props => props.bRadius || null};
  border-color: ${props => props.bColor || null};
  border-width: ${props => props.bWidth || null}em;
  border-image: ${props => props.bImage || null};
  border-spacing: ${props => props.bSpacing || null};
  border-style: ${props => props.bStyle || null};
`;


export const utility = css`
  outline: ${props => props.outline || "none"};
  cursor: ${props => props.cursor || null};
  content: ${props => props.content || ""};
  overflow-x: ${props => props.overflowX || null};
  overflow-y: ${props => props.overflowY || null};
`;

export const position = css`
  display: ${props => props.display || null};
  position: ${props => props.position || null};
  top: ${props => props.top || null};
  right: ${props => props.right || null};
  bottom: ${props => props.bottom || null};
  left: ${props => props.left || null};
  z-index: ${props => props.zIndex || null};
`;

// Grid
export const space = css`
  padding: ${props => props.p || null};
  padding-top: ${props => props.pt || props.py || null};
  padding-right: ${props => props.pr || props.px || null};
  padding-bottom: ${props => props.pb || props.py || null};
  padding-left: ${props => props.pl || props.px || null};
  margin: ${props => props.m || null};
  margin-top: ${props => props.mt || props.my || null};
  margin-right: ${props => props.mr || props.mx || "auto"};
  margin-bottom: ${props => props.mb || props.my || null};
  margin-left: ${props => props.ml || props.mx || "auto"};
`;

export const shape = css`
  width: ${props => (props.width ? props.width : null)};
  height: ${props => (props.height ? props.height : null)};
`;

export const size = css`
  width: 100%;

  @media (min-width: ${breakpoint[1]}em) {
    width: ${props => (props.lp ? 100 / props.lp : null)}%;
  }

  @media (min-width: ${breakpoint[2]}em) {
    width: ${props => (props.tv ? 100 / props.tv : null)}%;
  }
`;
