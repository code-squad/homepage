import React from "react";
import theme from "styles/theme";

interface Responsive {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

function useResponsive() {
  const { breakPoint } = theme;

  const [responsive, setResponsive] = React.useState<Responsive>({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const throttle = React.useRef(false);

  const getCurrentResponsive = () => {
    const windowWidthSize = window.innerWidth;
    let [isMobile, isTablet, isDesktop] = [false, false, false];

    if (windowWidthSize < breakPoint.tablet) isMobile = true;
    if (breakPoint.tablet <= windowWidthSize && windowWidthSize < breakPoint.desktop)
      isTablet = true;
    if (windowWidthSize >= breakPoint.desktop) isDesktop = true;

    return { isMobile, isTablet, isDesktop };
  };

  const checkResponsiveChanged = (prevResponsive: Responsive, currResponsive: Responsive) => {
    if (JSON.stringify(prevResponsive) === JSON.stringify(currResponsive)) return false;
    return true;
  };

  const handleResize = () => {
    const currentResponsive = getCurrentResponsive();

    const responsiveChanged = checkResponsiveChanged(responsive, currentResponsive);
    if (throttle.current || !responsiveChanged) return;

    setResponsive(currentResponsive);
    throttle.current = true;
    setTimeout(async () => {
      throttle.current = false;
    }, 100);
  };

  React.useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return responsive;
}

export default useResponsive;
