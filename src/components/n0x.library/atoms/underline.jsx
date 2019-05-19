import styled from 'styled-components/macro'
import { underlineCenter, underlineLtR, underlineRtL, underlineInOut, underlineInOutInverse, underlineTtB, underlineBtT, MenuFx1 } from "../animate";
import { getRule, textUnderline } from "../lib";

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

const getHover1 = ({ hover1 }) => hover1 && `${underlineCenter}`;
const getHover2 = ({ hover2 }) => hover2 && `${underlineLtR}`;
const getHover3 = ({ hover3 }) => hover3 && `${underlineRtL}`;
const getHover4 = ({ hover4 }) => hover4 && `${underlineInOut}`;
const getHover5 = ({ hover5 }) => hover5 && `${underlineInOutInverse}`;
const getHover6 = ({ hover6 }) => hover6 && `${underlineTtB}`;
const getHover7 = ({ hover7 }) => hover7 && `${underlineBtT}`;

export const UTitle = styled.span`
  border-bottom-width: ${getRule("bwidth", ".04")}em;
  border-bottom-color: ${getRule("bcolor", "inherit")};
  border-bottom-style: ${getRule("bstyle", "solid")};
  display: inline-block;
  line-height: 0.85;
`;

export const UText = styled.span`
  ${textUnderline}
`;

export const UFX = styled.span`
${props => getHover1(props)}
${props => getHover2(props)}
${props => getHover3(props)}
${props => getHover4(props)}
${props => getHover5(props)}
${props => getHover6(props)}
${props => getHover7(props)}
${props => getMenuFx1(props)}
`;
