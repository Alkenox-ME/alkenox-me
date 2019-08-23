// Core
import * as React from 'react';

// Styling
import { ThemeProvider } from 'emotion-theming';
import GlobalStyle from './GlobalStyle';
import nox from './overRide';

interface NoxProps {
    children: any;
}

export default class Provider {
    render() {
        return(
        <ThemeProvider theme={nox}>{children}</ThemeProvider>;
    )
  }
}
