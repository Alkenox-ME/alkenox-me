import styled, { css } from 'styled-components';
import { nox } from '../theme/NoxTheme';
import {
    underlineCenter,
    underlineLtR,
    underlineRtL,
    underlineInOut,
    underlineInOutInverse,
    underlineTtB,
    underlineBtT,
    MenuFx1,
} from './underlineFx';
import { getRule } from '../../lib';
import { UnderlineProps } from '@types/css';

const textUnderline = css<UnderlineProps>`
    background-size: 0.01em 1em;
    box-shadow: inset 0 -0.12em ${nox.main.color.bg.body}, inset 0 -0.15em ${nox.main.color.fg.text};
    display: inline;
`;

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

export const UTitle = styled.span<UnderlineProps>`
    color: ${nox.main.color.fg.link[0]};
    cursor: pointer;
    border-bottom-width: ${getRule('bwidth', '.04')}em;
    border-bottom-color: ${getRule('bcolor', 'inherit')};
    border-bottom-style: ${getRule('bstyle', 'solid')};
    display: inline-block;
    line-height: 0.85;

    :hover {
        color: ${nox.main.color.fg.link[1]};
    }
`;

export const UText = styled.span<UnderlineProps>`
    color: ${nox.main.color.fg.link[0]};
    cursor: pointer;
    ${textUnderline}

    :hover {
        color: ${nox.main.color.fg.link[1]};
    }
`;

export const UFX = styled.span<UnderlineProps>`
    color: ${nox.main.color.fg.link[0]};
  cursor: pointer;
  ${props => getHover1(props)}
  ${props => getHover2(props)}
  ${props => getHover3(props)}
  ${props => getHover4(props)}
  ${props => getHover5(props)}
  ${props => getHover6(props)}
  ${props => getHover7(props)}
  ${props => getMenuFx1(props)}

:hover {
    color: ${nox.main.color.fg.link[1]};
}
`;
