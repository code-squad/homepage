import React from "react";
import styled from "styled-components";
// Typography
import { LBody } from "typography/";

interface ITabNavigationBarProps {
  onIndexChanged: (index: number) => void;
  titles: string[];
}
const TabNavigationBar: React.FC<ITabNavigationBarProps> = ({ onIndexChanged, titles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleTabNavigationButtonClick = (index: number) => {
    setCurrentIndex(index);
    onIndexChanged(index);
  };

  return (
    <TabNavigationBarWrapper>
      <TabNavButtonList>
        {titles.map((title: string, index: number) => (
          <li key={title}>
            <TabNavButton
              onClick={() => handleTabNavigationButtonClick(index)}
              selected={index === currentIndex}
            >
              <LBody>{title}</LBody>
            </TabNavButton>
          </li>
        ))}
      </TabNavButtonList>
    </TabNavigationBarWrapper>
  );
};

const TabNavigationBarWrapper = styled.div`
  width: 100%;
  min-width: 106.2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TabNavButtonList = styled.ul`
  width: 84.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const TabNavButton = styled.button<{ selected?: boolean }>`
  width: 19.3rem;
  height: 5.8rem;
  color: ${({ selected, theme: { color } }) =>
    selected ? color.primary.green2 : color.greyScale.grey2};
  background-color: transparent;
  border: 0;
  border-bottom: ${({ selected, theme: { color } }) =>
    selected ? `0.2rem solid ${color.primary.green2}` : "0.2rem solid transparent"};
  transition-property: corlor, border-bottom;
  transition-duration: 0.3s;
  &:hover {
    cursor: pointer;
  }
  font-family: inherit;
`;

export default TabNavigationBar;
