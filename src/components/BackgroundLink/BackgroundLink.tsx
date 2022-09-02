import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
// Typography
import { Typography } from "typography";
// Libs
import { useResponsive } from "lib/hooks";

export interface IBackgroundLink {
  backgroundColor?: string;
  title: string;
  subtitle?: string;
  to: string;
}

const BackgroundLink: React.FC<IBackgroundLink> = ({ backgroundColor, title, subtitle, to }) => {
  const { isMobile } = useResponsive();
  return (
    <BackgroundLinkWrapper {...{ backgroundColor }}>
      <Typography type={isMobile ? "SBold" : "MBold"}>{subtitle}</Typography>
      <LinkItem {...{ to }}>
        <Typography type={isMobile ? "HLBold" : "SDisplay"}>{title}</Typography>
      </LinkItem>
    </BackgroundLinkWrapper>
  );
};

const BackgroundLinkWrapper = styled.div<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({ backgroundColor, theme: { color } }) =>
    backgroundColor || color.secondary.blue3};
  white-space: pre-line;
  @media ${({ theme }) => theme.device.mobile} {
    padding-left: 2.304rem;
    height: 17.2rem;
    align-items: flex-start;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 17.2rem;
    align-items: center;
    justify-content: center;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
    height: 30.2rem;
    align-items: center;
    justify-content: center;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.black};
`;

export default BackgroundLink;
