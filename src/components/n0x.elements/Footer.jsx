import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../n0x.Bass';

const Footer = class extends PureComponent {
  render() {
    const { copyright, symbol, year, company, rights } = this.props;
    return (
        <Text p={[3]} width={[1]} textAlign="center">
          {copyright}&nbsp;{symbol}&nbsp;{year}&nbsp;{company}&nbsp;{rights}
        </Text>
    );
  }
};

Footer.propTypes = {
  copyright: PropTypes.string,
  symbol: PropTypes.string,
  year: PropTypes.number,
  company: PropTypes.string,
  rights: PropTypes.string
};

Footer.defaultProps = {
  copyright: '',
  symbol: '',
  year: [],
  company: '',
  rights: ''
};

export {Footer};
