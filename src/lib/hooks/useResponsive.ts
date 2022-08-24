import React from "react";
import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

const useScrollPosition = () => {
  const {
    breakPoint: { tablet, desktop },
  } = useTheme();
  const isMobile = useMediaQuery({ query: `(max-width: calc(${tablet} - 1px))` });
  const isTablet = useMediaQuery({ query: `(min-width: calc(${tablet})` });
  const isDesktop = useMediaQuery({ query: `(min-width: ${desktop}` });

  return { isMobile, isTablet, isDesktop };
};

export default useScrollPosition;
