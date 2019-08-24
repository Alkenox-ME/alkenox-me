// eslint-disable-next-line
// @Flow
import React from 'react';
import Helmet from 'react-helmet';

import Seo from './Seo';
import Footer from '../Footer';
import GlobalStyle from '../theme/GlobalStyle';
import Navbar from '../Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Seo />
            <GlobalStyle />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
