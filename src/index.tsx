import { hot } from 'react-hot-loader/root';
import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

const app = <App />;

if (rootElement.hasChildNodes()) {
    hydrate(app, rootElement);
} else {
    render(app, rootElement);
}

// Hot Module Replacement
if (module.hot) {
    module.hot.accept();
}
