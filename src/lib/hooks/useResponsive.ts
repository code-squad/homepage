import React from "react";
import theme from "styles/theme";

function useResponsive() {
  if (typeof window === "undefined") return { isMobile: false, isTablet: false, isDesktop: true };

  const { breakPoint } = theme;

  const [windowWidthSize, setWindowWidthSize] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidthSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let [isMobile, isTablet, isDesktop] = [false, false, false];
  if (windowWidthSize < breakPoint.tablet) isMobile = true;
  if (breakPoint.tablet <= windowWidthSize && windowWidthSize < breakPoint.desktop) isTablet = true;
  if (windowWidthSize >= breakPoint.desktop) isDesktop = true;
  return { isMobile, isTablet, isDesktop };
}

export default useResponsive;
