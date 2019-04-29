import React from 'react';
import PropTypes from 'prop-types';
import { FT } from '../atoms'

const Footer = ({ copyYear, copyCompany }) => {
    return (
        <FT fixed bgColor={props => props.theme.colors.blacktint[9]}>
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

export {Footer};
