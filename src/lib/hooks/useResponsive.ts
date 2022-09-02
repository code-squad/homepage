import React from "react";
import theme from "styles/theme";

function useResponsive() {
  const { breakPoint } = theme;

  const [windowWidthSize, setWindowWidthSize] = React.useState(breakPoint.mobile);

  const handleResize = () => {
    setWindowWidthSize(window.innerWidth);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let [isMobile, isTablet, isDesktop] = [false, false, false];
  if (windowWidthSize < breakPoint.tablet) isMobile = true;
  if (breakPoint.tablet <= windowWidthSize && windowWidthSize < breakPoint.desktop) isTablet = true;
  if (windowWidthSize >= breakPoint.desktop) isDesktop = true;
  return { isMobile, isTablet, isDesktop };
}

export default useResponsive;
