// Core
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link as Href } from 'react-router-dom';

// Styling
import styled from 'styled-components/macro';
import { Image, Card, Heading } from 'rebass';

const LabelBlock = class extends PureComponent {
  render() {
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

    const { link, label, bshadow, bradius, bgimg, fontSz, width, height } = this.props;

    return (
        <Link exact="true" to={link} title={label} aria-label={label}>
          <LabelBase boxShadow={bshadow} borderRadius={bradius} src={bgimg}>
            <LabelText fontSize={fontSz} width={width} color="inherit" textAlign="center">
              {label}
            </LabelText>
            <LabelImage borderRadius={bradius} src={bgimg} width={width} height={height} />
          </LabelBase>
        </Link>
    );
  }
};

LabelBlock.propTypes = {
  link: PropTypes.string,
  label: PropTypes.string,
  bshadow: PropTypes.string,
  bradius: PropTypes.number,
  bgimg: PropTypes.string,
  fontSz: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number
};

LabelBlock.defaultProps = {
  link: '',
  label: '',
  bshadow: '',
  bradius: [],
  bgimg: '',
  fontSz: [],
  width: [],
  height: []
};

export {LabelBlock};
