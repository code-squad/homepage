import React from "react";
import styled from "styled-components";

interface IRectangleNavigation {
  count: number;
  index: number;
}

const RectangleNavigation: React.FC<IRectangleNavigation> = ({ count, index }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const indexArray = [...Array(count).keys()];

  React.useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  return (
    <RectangleNavigationWrapper>
      {indexArray.map((index) => (
        <li key={index}>
          <RectangleButton
            aria-label="rectangle"
            selected={index === currentIndex}
          ></RectangleButton>
        </li>
      ))}
    </RectangleNavigationWrapper>
  );
};

const RectangleNavigationWrapper = styled.ul`
  width: min-content;
  height: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

const RectangleButton = styled.div<{ selected?: boolean }>`
  width: 3rem;
  height: 0.2rem;
  background-color: ${({ selected, theme: { color } }) =>
    selected ? color.black : color.greyScale.grey3};
`;

export default RectangleNavigation;
