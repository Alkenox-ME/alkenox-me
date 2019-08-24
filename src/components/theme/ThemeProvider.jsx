// eslint-disable-next-line
// @Flow
// Core
import React from "react";

// Styling
import { ThemeProvider } from "emotion-theming";
import GlobalStyle from "./GlobalStyle";
import nox from "./overRide";

const Provider = children => {
  return <ThemeProvider theme={nox}>{children}</ThemeProvider>;
};

export default Provider;
