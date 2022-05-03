import React from "react";
import styled from "styled-components";

interface ICircleNavigation {
  count: number;
  onIndexChanged: (index: number) => void;
}

const CircleNavigation: React.FC<ICircleNavigation> = ({ count, onIndexChanged }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleCircleClick = (index: number) => {
    if (index !== currentIndex) {
      setCurrentIndex(index);
      onIndexChanged(index);
    }
  };

  const indexArray = [...Array(count).keys()];
  // const indexArray = new Array(count);
  // for (let i = 0; i < count; ++i) indexArray[i] = i;

  return (
    <CircleNavigationWrapper>
      {indexArray.map((index) => (
        <li key={index}>
          <CircleButton
            selected={index === currentIndex}
            onClick={() => handleCircleClick(index)}
          ></CircleButton>
        </li>
      ))}
    </CircleNavigationWrapper>
  );
};

const CircleNavigationWrapper = styled.ul`
  width: 38.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CircleButton = styled.button<{ selected?: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${({ selected, theme: { color } }) =>
    selected ? color.greyScale.black : "transparent"};
  border-color: ${({ theme: { color } }) => color.greyScale.black};
  &:hover {
    cursor: pointer;
  }
`;

export default CircleNavigation;
