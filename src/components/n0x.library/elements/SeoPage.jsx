import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SeoPage = ({pgTitle, pgDesc,props}) => {
  return (
    <Helmet>
      <title>{pgTitle}</title>
      <meta name='description' content={pgDesc} />
    </Helmet>
  );
};

SeoPage.propTypes = {
  pgTitle: PropTypes.string,
    pgDesc: PropTypes.string
};

SeoPage.defaultProps = {
  pgTitle: '',
    pgDesc: ''
};

export {SeoPage};
