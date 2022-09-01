import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography/";
// Assets
import icons from "assets/img/icons";

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
              <>
                <img src={icons.hash} style={{ width: "1.6rem", height: "1.6rem" }} />
                <Typography type={index === currentIndex ? "MBold" : "MBody"}>{title}</Typography>
              </>
            </TagNavButton>
          </li>
        ))}
      </TagNavButtonList>
    </TagNavigationBarWrapper>
  );
};

const TagNavigationBarWrapper = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  float: left;
  &::-webkit-scrollbar {
    width: 0.3rem;
    height: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    width: 0.3rem;
    height: 0.3rem;
    border-radius: 3rem;
    background: #bbb;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 32.7rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
  }
`;

const TagNavButtonList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

const TagNavButton = styled.button<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 1.6rem 0 1.2rem;
  height: 3.2rem;
  background-color: ${({ selected, theme: { color } }) => (selected ? color.white : "transparent")};
  border-width: 0.1rem;
  border-color: ${({ selected, theme: { color } }) => (selected ? color.black : "transparent")};
  border-radius: 99.9rem;
  transition-property: font-weight, background-color;
  transition-duration: 0.3s;
  color: ${({ theme: { color } }) => color.black};
  font-family: inherit;
  &:hover {
    cursor: pointer;
  }
`;

export default TabNavigationBar;
