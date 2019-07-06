import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { text, space, backgroundColor, fx, shape, link } from "../style";
import { getRule } from "../lib";

const getFoot = ({ fixed }) => {
  if (fixed) {
    return `
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index:10000;
  `;
  } else {
    return `
    position: null;
  `;
  }
};


export const FT = styled.div`
  text-align: ${getRule("talign", "center")};
  max-width: 100vw;
  font-size: .5em;
  padding: .5em;
  color: ${props => props.theme.colors.white};
  font-weight: 100;
  ${space}
  ${shape}
  ${backgroundColor}
  ${props => getFoot(props)}
`;


const Footer = ({ copyYear, copyCompany }) => {
    return (
        <FT fixed bgColor={props => props.theme.colors.tint.black[9]}>
          Copyright &copy; {copyYear}&nbsp;{copyCompany} All rights reserved.
        </FT>
    );
  }

Footer.propTypes = {
  year: PropTypes.number,
  company: PropTypes.string
};

Footer.defaultProps = {
  year: [],
  company: ''
};

export default Footer;
