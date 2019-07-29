// Core
import * as React from 'react';

// Styling
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import theme from './DefTheme';

interface NoxProps {
    children: any;
}

const N0xTheme: React.FC<NoxProps> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <html>
                <GlobalStyle />
                {children}
            </html>
        </ThemeProvider>
    );
};

export default N0xTheme;
