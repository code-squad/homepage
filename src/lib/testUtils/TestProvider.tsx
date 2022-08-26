import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";

const TestProvider = ({ width, children }: { width?: number; children: React.ReactNode }) => {
  global.innerWidth = width || 1440;

  return <GlobalTheme>{children}</GlobalTheme>;
};

export default TestProvider;
