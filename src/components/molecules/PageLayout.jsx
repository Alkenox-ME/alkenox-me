// eslint-disable-next-line
// @Flow
import React from 'react';
import Helmet from 'react-helmet';

const PageLayout = ({ children, title }) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <main>{children}</main>
        </div>
    );
};

export default PageLayout;
