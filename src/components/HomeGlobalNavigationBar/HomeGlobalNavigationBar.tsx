import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
// Global-Components
import { SButton } from "components/";
// Assets
import homeSigniture from "assets/images/logos/HomeSigniture.svg";
// Static
import { LINK } from "assets/static/phrases";
import { DOMAIN, PATH } from "assets/static/urls";
// Utils
import { getCurrentPath } from "lib/utils";

const HomeGlobalNavigationBar: React.FC = () => {
  const currentPath = getCurrentPath();
  const links = [
    {
      title: LINK.MASTERS,
      path: PATH.MASTERS,
    },
    {
      title: LINK.CODE_TOGETHER,
      path: PATH.CODE_TOGETHER,
    },
    {
      title: LINK.FAQ,
      path: PATH.FAQ,
    },
  ];

  const handleSubscribeBtnClick = () => {
    window.open(DOMAIN, "_blank");
  };

  return (
    <HomeGlobalNavigationBarWrapper>
      <ContentWrapper>
        <HomeSigniture src={homeSigniture} />
        <ButtonList>
          {links.map(({ title, path }: any) => (
            <li key={title}>
              <LinkButton selected={currentPath === path} to={path}>
                {title}
              </LinkButton>
            </li>
          ))}
          <li>
            <SButton onClick={handleSubscribeBtnClick}>소식받아보기</SButton>
          </li>
        </ButtonList>
      </ContentWrapper>
    </HomeGlobalNavigationBarWrapper>
  );
};

const HomeGlobalNavigationBarWrapper = styled.nav`
  width: 100%;
  min-width: 144rem;
  min-height: 8rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const ContentWrapper = styled.div`
  width: 126rem;
  padding: 0 8rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeSigniture = styled.img`
  min-width: 15.5rem;
  min-height: 3rem;
`;

const ButtonList = styled.ul`
  min-width: 42.4rem;
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
