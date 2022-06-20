import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
// Assets
import signiture from "assets/img/illusts/header/signiture";
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { useScrollPosition } from "lib/hooks";
import { getCurrentPath } from "lib/utils";

const HomeGlobalNavigationBar: React.FC = () => {
  const currentPath = getCurrentPath();
  const links = [
    {
      title: LINK.MASTERS,
      path: INTERNAL.MASTERS,
    },
    {
      title: LINK.CODE_TOGETHER,
      path: INTERNAL.CODE_TOGETHER,
    },
    {
      title: LINK.FAQ,
      path: INTERNAL.FAQ,
    },
    {
      title: LINK.TEAM_CULTURE,
      path: INTERNAL.TEAM_CULTURE,
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <HomeGlobalNavigationBarWrapper>
      <HomeGlobalNavigationBarContentWrapper {...{ scrollPosition }}>
        <ContentWrapper>
          <Link to="/">
            <HomeSigniture
              src={scrollPosition ? signiture.home2 : signiture.home1}
              alt="company-logo"
            />
          </Link>
          <ButtonList>
            {links.map(({ title, path }: any) => (
              <li key={title}>
                <LinkButton selected={currentPath === path} to={path}>
                  {title}
                </LinkButton>
              </li>
            ))}
          </ButtonList>
        </ContentWrapper>
      </HomeGlobalNavigationBarContentWrapper>
    </HomeGlobalNavigationBarWrapper>
  );
};

const HomeGlobalNavigationBarWrapper = styled.header`
  position: relative;
  height: 8rem;
  background-color: transparent;
`;

const HomeGlobalNavigationBarContentWrapper = styled.div<{ scrollPosition: boolean }>`
  width: 100%;
  min-width: 144rem;
  min-height: 8rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${({ scrollPosition, theme: { color } }) =>
    scrollPosition ? color.greyScale.white : "transparent"};
  border-bottom: 0.1rem solid
    ${({ scrollPosition, theme: { color } }) =>
      scrollPosition ? color.greyScale.grey3 : "transparent"};
  transition-property: background-color, border;
  transition-duration: 0.15s;
  transition-timing-function: linear;
`;

const ContentWrapper = styled.nav`
  width: 128rem;
  padding: 0 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeSigniture = styled.img`
  min-width: 15.5rem;
  min-height: 3rem;
`;

const ButtonList = styled.ul`
  min-width: 36.2rem;
  min-height: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkButton = styled(Link)<{ selected?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  font-weight: ${({ selected, theme: { fontWeight } }) =>
    selected ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default HomeGlobalNavigationBar;
