import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyle";

const GlobalTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalTheme;
