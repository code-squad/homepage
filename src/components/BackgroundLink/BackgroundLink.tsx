import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
// Typography
import { MBold, SDisplay } from "typography";

export interface IBackgroundLink {
  backgroundColor?: string;
  title: string;
  subtitle?: string;
  to: string;
}

const BackgroundLink: React.FC<IBackgroundLink> = ({ backgroundColor, title, subtitle, to }) => {
  return (
    <BackgroundLinkWrapper {...{ backgroundColor }}>
      <MBold>{subtitle}</MBold>
      <LinkItem {...{ to }}>
        <SDisplay>{title}</SDisplay>
      </LinkItem>
    </BackgroundLinkWrapper>
  );
};

const BackgroundLinkWrapper = styled.div<{ backgroundColor?: string }>`
  min-width: 144rem;
  height: 30.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme: { color } }) =>
    backgroundColor || color.secondary.blue3};
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;

export default BackgroundLink;
