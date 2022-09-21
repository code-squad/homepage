import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography/";

interface ITabNavigationBarProps {
  onIndexChanged: (index: number) => void;
  titles: string[];
}
const TabNavigationBar: React.FC<ITabNavigationBarProps> = ({ onIndexChanged, titles }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const navRef = React.useRef<HTMLUListElement>(null);

  const handleTabNavigationButtonClick = (index: number) => {
    setCurrentIndex(index);
    onIndexChanged(index);
    scroll(index);
  };

  const scroll = (index: number) => {
    navRef.current!.scrollLeft = (index - 1) * 200;
  };

  return (
    <TabNavigationBarWrapper>
      <TabNavButtonList ref={navRef}>
        {titles.map((title: string, index: number) => (
          <li key={title} style={{ minWidth: "fit-content" }}>
            <TabNavButton
              onClick={() => handleTabNavigationButtonClick(index)}
              selected={index === currentIndex}
            >
              <FontBorderWrapper selected={index === currentIndex}>
                <Typography type="MBold">{title}</Typography>
              </FontBorderWrapper>
            </TabNavButton>
          </li>
        ))}
      </TabNavButtonList>
    </TabNavigationBarWrapper>
  );
};

const TabNavigationBarWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${({ theme }) => theme.device.desktop} {
    width: 100%;
    min-width: 106.2rem;
  }
`;

const TabNavButtonList = styled.ul`
  width: 84.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FontBorderWrapper = styled.div<{ selected?: boolean }>`
  color: ${({ selected, theme: { color } }) =>
    selected ? color.primary.green2 : color.greyScale.grey2};
  border-bottom: ${({ selected, theme: { color } }) =>
    selected ? `0.2rem solid ${color.primary.green2}` : "0.2rem solid transparent"};
  transition-property: corlor, border-bottom;
  transition-duration: 0.3s;
`;
const TabNavButton = styled.button<{ selected?: boolean }>`
  background-color: transparent;
  border: 0;
  font-family: inherit;
  &:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: fit-content;
    height: 3.2rem;
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 19.3rem;
    height: 4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 19.3rem;
    height: 4rem;
  }
`;

export default TabNavigationBar;
