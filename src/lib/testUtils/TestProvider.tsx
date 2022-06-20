import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";

const TestProvider = ({ children }: { children: React.ReactNode }) => (
  <GlobalTheme>{children}</GlobalTheme>
);

export default TestProvider;
