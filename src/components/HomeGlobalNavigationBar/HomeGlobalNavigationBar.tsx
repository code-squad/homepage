import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
// Components
import { MobileNavigationList } from "./MobileNavigationList";
// Assets
import icons from "assets/img/icons";
import signiture from "assets/img/illusts/header/signiture";
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { useScrollPosition, useResponsive } from "lib/hooks";
import { getCurrentPath } from "lib/utils";

const HomeGlobalNavigationBar: React.FC<{ bannerStatus?: boolean }> = ({ bannerStatus }) => {
  const { isMobile } = useResponsive();
  const scrollPosition = useScrollPosition();

  const [open, setOpen] = React.useState(false);

  const currentPath = getCurrentPath();

  React.useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);

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

  return (
    <>
      <HomeGlobalNavigationBarWrapper {...{ bannerStatus, scrollPosition, open }}>
        <ContentWrapper {...{ open }}>
          <Link to="/">
            <HomeSigniture
              {...{ open }}
              src={scrollPosition ? signiture.home2 : signiture.home1}
              alt="company-logo"
            />
          </Link>
          {isMobile ? (
            <>
              <Button onClick={() => setOpen(!open)}>
                <ButtonIcon src={open ? icons.close : icons.menu} />
              </Button>
              <MobileNavigationList {...{ links, open }} />
            </>
          ) : (
            <ButtonList>
              {links.map(({ title, path }: any) => {
                const currentFirstPath = currentPath.split("/")[1];
                const firstPath = path.split("/")[1];

                return (
                  <li key={title}>
                    <LinkButton
                      selected={currentPath === path || currentFirstPath === firstPath}
                      to={path}
                    >
                      {title}
                    </LinkButton>
                  </li>
                );
              })}
            </ButtonList>
          )}
        </ContentWrapper>
      </HomeGlobalNavigationBarWrapper>
    </>
  );
};

const HomeGlobalNavigationBarWrapper = styled.header<{
  bannerStatus?: boolean;
  scrollPosition: boolean;
  open: boolean;
}>`
  position: fixed;
  top: ${({ bannerStatus }) => (bannerStatus ? "8rem" : "0")};
  display: flex;
  width: 100%;
  z-index: 10;
  background-color: ${({ scrollPosition, open, theme: { color } }) =>
    scrollPosition || open ? color.white : "transparent"};
  border-bottom: 0.1rem solid
    ${({ scrollPosition, theme: { color } }) =>
      scrollPosition ? color.greyScale.grey3 : "transparent"};
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
    height: 6.2rem;
    align-items: ${({ open }) => (open ? "flex-start" : "center")};
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-height: 8rem;
    justify-content: center;
    align-items: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
    min-height: 8rem;
    justify-content: center;
    align-items: center;
  }
`;

const ContentWrapper = styled.nav<{ open: boolean }>`
  position: relative;
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    height: 6.2rem;
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: space-between;
    align-items: center;
    width: 128rem;
    padding: 0 8rem;
  }
`;

const HomeSigniture = styled.img<{ open: boolean }>`
  min-width: 15.5rem;
  min-height: 3rem;
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: opacity 0.15s linear;
`;

const ButtonList = styled.ul`
  min-width: 36.2rem;
  min-height: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const LinkButton = styled(Link)<{ selected?: boolean }>`
  color: ${({ theme: { color } }) => color.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  font-weight: ${({ selected, theme: { fontWeight } }) =>
    selected ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  filter: invert(0%) sepia(8%) saturate(4576%) hue-rotate(78deg) brightness(84%) contrast(79%);
`;

const OpacityWrapper = styled.div<{ open: boolean }>`
  opacity: ${({ open }) => (open ? "1" : "0")};
  transition: opacity 0.15s linear;
`;
export default HomeGlobalNavigationBar;
