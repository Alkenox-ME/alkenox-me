import React from 'react'
import styled from 'styled-components/macro'
import SplitText from 'react-pose-text'
import { T, T1, T2, T3, T4, T5, T6, TA } from "../animate";
import { getRule, text, space, size, backgroundColor, border, list, fx, shape, link } from "../lib";

export const P = (props) => {
  let Txt = styled(T)`
    text-align: ${getRule("talign", "left")};
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
export const H1 = (props) => {
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
export const H2 = (props) => {
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
export const H3 = (props) => {
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
export const H4 = (props) => {
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
export const H5 = (props) => {
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
export const H6 = (props) => {
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
export const A = styled(TA)`
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

export const PP = styled.p`
  text-indent: ${ props => props.tIndent || null }em;
    text-align: ${getRule("talign", "left")};
    max-width: 80vw;
    margin: 0 auto;
    ${text}
    ${space}
    ${size}
    ${fx}
`;
export const TH1 = styled.h1`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const TH2 = styled.h2`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const TH3 = styled.h3`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const TH4 = styled.h4`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const TH5 = styled.h5`
  text-align: ${getRule("talign", "center")};
  max-width: 80vw;
  ${text}
  ${space}
  ${size}
  ${fx}
`;
export const TH6 = styled.h6`
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
