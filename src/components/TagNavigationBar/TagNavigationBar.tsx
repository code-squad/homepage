import React from "react";
import styled from "styled-components";
// Typography
import { LBody } from "typography/";

const TabNavigationBar: React.FC<{
  onIndexChanged: (index: number) => void;
  titles: string[];
}> = ({ onIndexChanged, titles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleTabNavigationButtonClick = (index: number) => {
    setCurrentIndex(index);
    onIndexChanged(index);
  };

  return (
    <TagNavigationBarWrapper>
      <TagNavButtonList>
        {titles.map((title: string, index: number) => (
          <li key={title}>
            <TagNavButton
              onClick={() => handleTabNavigationButtonClick(index)}
              selected={index === currentIndex}
            >
              <LBody bold={index === currentIndex}>{`#${title}`}</LBody>
            </TagNavButton>
          </li>
        ))}
      </TagNavButtonList>
    </TagNavigationBarWrapper>
  );
};

const TagNavigationBarWrapper = styled.div`
  width: 100%;
  min-width: 106.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TagNavButtonList = styled.ul`
  width: 84.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

const TagNavButton = styled.button<{ selected?: boolean }>`
  padding: 0 1.2rem;
  height: 3.6rem;
  background-color: ${({ selected, theme: { color } }) =>
    selected ? color.greyScale.white : "transparent"};
  border: 0;
  border-radius: 99.9rem;
  transition-property: font-weight, background-color;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
  }
`;

export default TabNavigationBar;
