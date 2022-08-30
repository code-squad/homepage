import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Typography
import { Typography } from "typography";
// Assets
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
        <Typography type="SBody">{MESSAGE.COMPANY_TEL_NUMBER}</Typography>
        <Typography type="SBody">{MESSAGE.COMPANY_ADDRESS}</Typography>
      </CompanyInfoWrapper>
    </NavigationListWrapper>
  );
};

const NavigationListWrapper = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
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
  margin: 8rem 0 18.9rem 0;
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

export default MobileNavigationList;
