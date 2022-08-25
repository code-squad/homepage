import { useTheme } from "styled-components";
import { useMediaQuery } from "react-responsive";

const useScrollPosition = () => {
  const {
    device: { mobile, tablet, desktop },
  } = useTheme();
  const isMobile = useMediaQuery({ query: mobile });
  const isTablet = useMediaQuery({ query: tablet });
  const isDesktop = useMediaQuery({ query: desktop });

  return { isMobile, isTablet, isDesktop };
};

export default useScrollPosition;
