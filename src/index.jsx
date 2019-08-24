// eslint-disable-next-line
// @Flow
import React from "react";
import { hydrate, render } from "react-dom";
import App from "./components/App";

const rootElement = document.getElementById("root");

const app = <App />;

if (rootElement.hasChildNodes()) {
  hydrate(app, rootElement);
} else {
  render(app, rootElement);
}
