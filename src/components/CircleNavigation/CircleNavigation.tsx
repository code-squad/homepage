import React from "react";
import styled from "styled-components";

interface ICircleNavigation {
  count: number;
  index: number;
  onIndexChanged: (index: number) => void;
}

const CircleNavigation: React.FC<ICircleNavigation> = ({ count, index, onIndexChanged }) => {
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
  width: min-content;
  height: 2.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const CircleButton = styled.button<{ selected?: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 50%;
  background-color: ${({ selected, theme: { color } }) => (selected ? color.black : "transparent")};
  border: 0.2rem solid ${({ theme: { color } }) => color.black};
  &:hover {
    cursor: pointer;
  }
`;

export default CircleNavigation;
