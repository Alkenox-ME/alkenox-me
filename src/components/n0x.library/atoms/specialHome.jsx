import styled from 'styled-components';
import { Sound, Mx, Photo, Vx, Gx, Web, Rx } from "../animate";
import { text, space, size, backgroundColor, border, fx, shape } from "../style";
import { getRule } from "../lib";

export const PT = styled.p`
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

export const BGcolor = styled.div`
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


const blockShadow = '.15em .15em .05em .05em rgba(0,0,0,0.8), .15em -.15em .05em .05em rgba(0,0,0,0.8), -.15em .15em .05em .05em rgba(0,0,0,0.8), -.15em -.15em .05em .05em rgba(0,0,0,0.8)'

export const SoundBlock = styled(Sound)`
  box-shadow: ${blockShadow};
  ${size}
  ${shape}
  ${space}
  ${fx}
`;

export const MxBlock = styled(Mx)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;

export const PhotoBlock = styled(Photo)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;

export const VxBlock = styled(Vx)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;

export const GxBlock = styled(Gx)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;

export const WebBlock = styled(Web)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;

export const RxBlock = styled(Rx)`
  box-shadow: ${blockShadow};
  ${text}
  ${size}
  ${space}
  ${fx}
`;
