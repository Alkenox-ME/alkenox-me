// Core
import React from "react";
import PropTypes from "prop-types";

// Styling
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle, breakpoints, colors, fonts, shadows, fontWeights, fontSizes, lineHeights, textShadows } from '../config/'


export const theme = {
  breakpoints,
  fonts,
  fontWeights,
  fontSizes,
  lineHeights,
  colors,
  "borders": [
    0,
    "1px solid"
  ],
  "radii": [ 0, 3, 6 ],
  shadows,
  textShadows,
  "space": [ 0, 4, 8, 16, 24, 32, 40, 48, 64, 80, 96, 112, 128 ]
}

const N0xTheme = ({children}) => {
    return (
      <ThemeProvider theme={theme}>
        <span>
          <GlobalStyle />
          {children}
        </span>
      </ThemeProvider>
    );
  }

N0xTheme.propTypes = {
  children: PropTypes.element
};

N0xTheme.defaultProps = {
  children: ""
};

export { N0xTheme };
