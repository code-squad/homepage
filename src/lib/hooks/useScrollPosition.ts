import React from "react";

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = React.useState(false);
  const throttle = React.useRef(false);

  const updatePosition = () => {
    if (throttle.current && window.pageYOffset > 0) return;

    const edgeYOffset = 15;
    if (window.pageYOffset > edgeYOffset) setScrollPosition(true);
    else if (window.pageXOffset <= edgeYOffset) setScrollPosition(false);

    throttle.current = true;
    setTimeout(async () => {
      throttle.current = false;
    }, 100);
  };

  React.useEffect(() => {
    updatePosition();
    window.addEventListener("scroll", updatePosition);
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
};

export default useScrollPosition;
