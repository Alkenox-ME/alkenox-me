import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-snapshot';
import config from 'react-reveal';
import App from './App';
import * as serviceWorker from './serviceWorker';

config({ ssrFadeout: true });

const rootElement = document.getElementById('root');

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
