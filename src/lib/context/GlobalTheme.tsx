import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import GlobalStyle from "../../styles/GlobalStyle";

const GlobalTheme = ({ children }: JSX.ElementChildrenAttribute) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default GlobalTheme;
