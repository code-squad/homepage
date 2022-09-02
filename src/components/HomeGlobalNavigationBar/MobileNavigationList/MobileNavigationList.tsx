import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Typography
import { Typography } from "typography";
// Assets
import icons from "assets/img/icons";
import { MESSAGE } from "assets/static/phrases";
import { EXTERNAL } from "assets/static/urls";
// Libs
import { getCurrentPath } from "lib/utils";

const MobileNavigationList: React.FC<{
  links: { title: string; path: string }[];
  open: boolean;
}> = ({ links, open }) => {
  const currentPath = getCurrentPath();
  const currentFirstPath = currentPath.split("/")[1];

  const linkIconList = [
    { icon: icons.medium, to: EXTERNAL.BLOG },
    { icon: icons.youtube, to: EXTERNAL.YOUTUBE },
    { icon: icons.facebook, to: EXTERNAL.FACEBOOK },
    { icon: icons.kakaotalk, to: EXTERNAL.KAKAOTALK_CHANNEL },
  ];

  return (
    <NavigationListWrapper {...{ open }}>
      <ButtonList>
        {links.map(({ title, path }) => (
          <li key={title}>
            <LinkButton
              selected={currentPath === path || currentFirstPath === path.split("/")[1]}
              to={path}
            >
              {title}
            </LinkButton>
          </li>
        ))}
      </ButtonList>
      <CompanyInfoWrapper>
        <Typography type="SBody">{MESSAGE.COPYRIGHT}</Typography>
        <ExternalLink
          href={`mailto:${EXTERNAL.EMAIL}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          underline
        >
          {MESSAGE.COMPANY_EMAIL_ADDRESS}
        </ExternalLink>
        <Typography type="SBody">{MESSAGE.TEL_NUMBER}</Typography>
        <Typography type="SBody">{MESSAGE.ADDRESS}</Typography>
        <LinkIconWrapper>
          {linkIconList.map(({ icon, to }) => (
            <LinkIconItem {...{ to }} target="_blank" rel="noopener noreferrer nofollow">
              <LinkIcon alt={`link-icon-${icon}`} src={icon} />
            </LinkIconItem>
          ))}
        </LinkIconWrapper>
      </CompanyInfoWrapper>
    </NavigationListWrapper>
  );
};

const NavigationListWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  width: 100vw;
  height: ${({ open }) => (open ? "calc(100vh - 6.2rem)" : "0")};
  overflow: hidden;
  position: fixed;
  top: 6.2rem;
  right: 0;
  background-color: ${({ theme: { color } }) => color.white};
`;

const ButtonList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8rem;
  padding: 0 2.4rem;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const ExternalLink = styled.a<{ underline?: boolean }>`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
`;

const LinkButton = styled(Link)<{ selected?: boolean }>`
  color: ${({ theme: { color } }) => color.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.xl};
  font-weight: ${({ selected, theme: { fontWeight } }) =>
    selected ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.xl};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  text-decoration: ${({ selected }) => (selected ? "underline" : "none")};
`;

const CompanyInfoWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 2.4rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const LinkIconWrapper = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 3.2rem 0 8rem 0rem;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;
const LinkIconItem = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
`;
const LinkIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export default MobileNavigationList;
