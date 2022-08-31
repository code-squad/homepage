import React from "react";
import { useTheme } from "styled-components";

function useResponsive() {
  if (typeof window === "undefined") return { isMobile: false, isTablet: false, isDesktop: true };

  const { breakPoint } = useTheme();

  const [windowSize, setWindowSize] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let [isMobile, isTablet, isDesktop] = [false, false, false];
  if (windowSize.width < breakPoint.tablet) isMobile = true;
  if (breakPoint.tablet <= windowSize.width && windowSize.width < breakPoint.desktop)
    isTablet = true;
  if (windowSize.width >= breakPoint.desktop) isDesktop = true;
  return { isMobile, isTablet, isDesktop, windowSize };
}

export default useResponsive;
