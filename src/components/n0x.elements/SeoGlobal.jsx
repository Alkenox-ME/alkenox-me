import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const SeoGlobal = props => {
  const { siteDesc, defTitle } = props;
  return (
    <Helmet defaultTitle={defTitle}>
      {/* Set site wide header info here and specific overrides in pages */}
      <meta charset="utf-8" />
      <meta name="description" content={siteDesc} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=2, user-scalable=yes"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />
    </Helmet>
  );
};

SeoGlobal.propTypes = {
  defTitle: PropTypes.string,
  siteDesc: PropTypes.string
};

SeoGlobal.defaultProps = {
  defTitle: '',
  siteDesc: ''
};

export {SeoGlobal};
