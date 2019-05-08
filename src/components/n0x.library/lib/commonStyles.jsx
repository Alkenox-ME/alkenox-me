import { css } from "styled-components/macro";
import { breakpoint } from "./breaks";

export const textShadow = css`
  text-shadow: ${props => props.theme.textShadow || null};
`;

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

export const text = css`
  font-size: ${props => props.fontSize || null}em;
  font-weight: ${props => props.fontWeight || null};
  text-decoration: ${props => props.textDecoration || null};
  text-justify: ${props => props.textJustify || null};
  letter-spacing: ${props => props.letterSpace || null};
  line-height: ${props => props.lineHeight || null};
  font-family: ${props => props.fontFamily || null};
  color: ${props => (props.color ? props.color : props.theme.colors.blue)};
  word-break: ${props => props.wordBreak || null};
  word-spacing: ${props => props.wordSpacing || null};
  word-wrap: ${props => props.wordWrap || null};
`;

export const space = css`
  padding: ${props => props.p || null}%;
  padding-top: ${props => props.pt || props.py || null}%;
  padding-right: ${props => props.pr || props.px || null}%;
  padding-bottom: ${props => props.pb || props.py || null}%;
  padding-left: ${props => props.pl || props.px || null}%;
  margin: ${props => props.m || null}%;
  margin-top: ${props => props.mt || props.my || null}%;
  margin-right: ${props => props.mr || props.mx || null}%;
  margin-bottom: ${props => props.mb || props.my || null}%;
  margin-left: ${props => props.ml || props.mx || null}%;
`;

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

export const border = css`
  border: ${props => props.border || null};
  border-radius: ${props => props.bRadius || null}em;
  border-color: ${props => props.bColor || null};
  border-width: ${props => props.bWidth || null}em;
  border-image: ${props => props.bImage || null};
  border-spacing: ${props => props.bSpacing || null};
  border-style: ${props => props.bStyle || null};
`;

export const shadow = css`
  opacity: ${props => props.opacity || "none"};
  box-shadow: ${props => props.boxShadow || "none"};
  text-shadow: ${props => props.textShadow || "none"};
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

export const list = css`
  list-style: ${props => props.listStyle || null};
  list-style-image: ${props => props.listStyleImage || null};
  list-style-position: ${props => props.listStylePosition || null};
  list-style-type: ${props => props.listStyleType || null};
`;

export const shape = css`
  width: ${props => (props.width ? props.width : null)}vw;
  height: ${props => (props.height ? props.height : null)}vh;
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
