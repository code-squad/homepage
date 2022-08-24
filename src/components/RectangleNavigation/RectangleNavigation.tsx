import React from "react";
import styled from "styled-components";

interface IRectangleNavigation {
  count: number;
  index: number;
  onIndexChanged: (index: number) => void;
}

const RectangleNavigation: React.FC<IRectangleNavigation> = ({ count, index, onIndexChanged }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleCircleClick = (index: number) => {
    if (index !== currentIndex) {
      onIndexChanged(index);
      setCurrentIndex(index);
    }
  };

  const indexArray = [...Array(count).keys()];

  React.useEffect(() => {
    setCurrentIndex(index);
  }, [index]);

  return (
    <RectangleNavigationWrapper>
      {indexArray.map((index) => (
        <li key={index}>
          <RectangleButton
            selected={index === currentIndex}
            onClick={() => handleCircleClick(index)}
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

const RectangleButton = styled.button<{ selected?: boolean }>`
  width: 3rem;
  height: 0rem;
  border-radius: 0;
  background-color: ${({ selected, theme: { color } }) =>
    selected ? color.blackAndWhite.black : color.greyScale.grey3};
  border: 0.1rem solid
    ${({ selected, theme: { color } }) =>
      selected ? color.blackAndWhite.black : color.greyScale.grey3};
  &:hover {
    cursor: pointer;
  }
`;

export default RectangleNavigation;
