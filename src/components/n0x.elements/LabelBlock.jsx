// Core
import React from 'react';
import { Link as Href } from '@reach/router';

// Styling
import styled from 'styled-components';
import { Image, Card, Heading } from '../n0x.Bass';

const LabelBlock = ({ link, label, bshadow, bradius, bgimg, fontSz, width, height }) => {

    const Link = styled(Href)`
      font-family: ${props => props.theme.font.family.sans};
      color: ${props => props.theme.link.color.base};
        :hover {
        color: ${props => props.theme.link.color.hover};
    }
    `;

    const LabelText = styled(Heading)`
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      z-index: 1;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      opacity: 0.2;
    `;

    const LabelImage = styled(Image)`
      object-fit: cover;
      object-position: center;
      z-index: 0;
      transition: 0.5s ease-in-out;
      opacity: 1;
    `;

    const LabelBase = styled(Card)`
      position: relative;
      &:hover ${LabelImage} {
        transition: 0.5s ease-in-out;
        opacity: 0.2;
      }
      &:hover ${LabelText} {
        transition: 0.5s ease-in-out;
        opacity: 1;
      }
    `;

    return (
        <Link exact="true" to={link} title={label} aria-label={label}>
          <LabelBase boxShadow={bshadow} borderRadius={bradius} src={bgimg}>
            <LabelText fontSize={fontSz} width={1} color="inherit" textAlign="center">
              {label}
            </LabelText>
            <LabelImage borderRadius={bradius} src={bgimg} width={1} height={height} />
          </LabelBase>
        </Link>
    );
  }

export {LabelBlock};
