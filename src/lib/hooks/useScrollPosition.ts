import React from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(false);
  const [throttle, setThrottle] = React.useState(false);

  const updatePosition = () => {
    if (throttle) return;

    const edgeYOffset = 15;
    if (window.pageYOffset > edgeYOffset) setScrollPosition(true);
    else if (window.pageXOffset <= edgeYOffset) setScrollPosition(false);

    setTimeout(async () => {
      setThrottle(true);
    }, 100);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
