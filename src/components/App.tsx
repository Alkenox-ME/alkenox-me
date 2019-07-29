import * as React from 'react';

import Router from './Router';
import Layout from './molecules/Layout';

import Home from '../containers/Home';
import Branding from '../containers/Branding';
import Content from '../containers/Content';
import About from '../containers/About';
import Contact from '../containers/Contact';

const App: React.FC = () => {
    return (
        <Layout>
            <Router>
                <Home path="/" />
                <Branding path="/branding-service" />
                <Content path="/content-creation" />
                <About path="/about-us" />
                <Contact path="/contact-us" />
            </Router>
        </Layout>
    );
};

export default App;
