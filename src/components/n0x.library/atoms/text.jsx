import React from 'react';
import styled from 'styled-components/macro';
import SplitText from 'react-pose-text';
import { T, T1, T2, T3, T4, T5, T6, TA } from "../animate";
import { text, space, size, backgroundColor, border, list, fx, shape, link } from "../style";
import { getRule } from "../lib";

export const P = styled(T)`
    text-align: ${getRule("talign", "left")};
    text-indent: ${getRule("tindent", 0)}em;
    max-width: 80vw;
    margin: 0 auto;
    ${text}
    ${space}
    ${size}
    ${fx}
`;
export const H1 = styled(T1)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H2 = styled(T2)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H3 = styled(T3)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H4 = styled(T4)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H5 = styled(T5)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H6 = styled(T6)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

export const PSplit = (props) => {
  let Txt = styled(T)`
    text-align: ${getRule("talign", "left")};
    text-indent: ${getRule("tindent", 0)}em;
    max-width: 80vw;
    margin: 0 auto;
    ${text}
    ${space}
    ${size}
    ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H1Split = (props) => {
  let Txt = styled(T1)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H2Split = (props) => {
  let Txt = styled(T2)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H3Split = (props) => {
  let Txt = styled(T3)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H4Split = (props) => {
  let Txt = styled(T4)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H5Split = (props) => {
  let Txt = styled(T5)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const H6Split = (props) => {
  let Txt = styled(T6)`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
return (
  <Txt {...props}>
    <SplitText wordPoses={props.wordPoses || null} charPoses={props.charPoses || null}>
      { props.children }
    </SplitText>
  </Txt>
)
}
export const ASplit = styled(TA)`
  text-indent: ${ props => props.tIndent || null }em;
    text-align: ${getRule("talign", "left")};
    max-width: 80vw;
    margin: 0 auto;
    ${link}
    ${text}
    ${space}
    ${size}
    ${fx}
`;

export const PPure = styled.p`
  text-indent: ${ props => props.tIndent || null }em;
    text-align: ${getRule("talign", "left")};
    max-width: 80vw;
    margin: 0 auto;
    ${text}
    ${space}
    ${size}
    ${fx}
`;
export const H1Pure = styled.h1`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H2Pure = styled.h2`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H3Pure = styled.h3`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H4Pure = styled.h4`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H5Pure = styled.h5`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const H6Pure = styled.h6`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;

export const List = styled.ul`
  text-align: ${getRule("talign", "inherit")};
  list-style: ${getRule("lstyle", "none")};
  list-style-position: ${getRule("lposition", "outside")};
  ${list}
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const ListItem = styled.li`
  text-align: ${getRule("talign", "inherit")};
  ${list}
  ${text}
  ${space}
  ${fx}
`;
export const Href = styled.a`
  text-align: ${getRule("talign", "inherit")};
  cursor: pointer;
  ${link}
  ${text}
  ${space}
  ${fx}
`;

export const TP1 = styled.p`
  text-align: ${getRule("talign", "left")};
  padding: ${props => props.pad || "0 auto"};
  ${shape}
  ${text}
  ${border}
  ${fx}
  ${backgroundColor}
`;

export const TP = styled.p`
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
