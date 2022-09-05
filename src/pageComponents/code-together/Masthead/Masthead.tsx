import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { Typography } from "typography";
// Components
import { MButton } from "components";
// Assets
import header from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { title, description } = strainMdxInfo(useStaticQuery(MastheadQuery));

  return (
    <MastheadWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <Typography type="MDisplay">{title}</Typography>
          <Typography type="MBody">{description}</Typography>
        </TitleWrapper>
        <MoveLinkWrapper>
          <MButton to="#course" children={TITLE.VIEW_ENTIRE_COURSE} type="right" />
        </MoveLinkWrapper>
      </ContentWrapper>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-position: top right;
  background-position: center;
  background-size: cover;
  @media ${({ theme }) => theme.device.mobile} {
    background-image: ${`url(${header.mobilePattern1})`};
    height: 46.8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${`url(${header.tabletPattern1})`};
    min-width: 76.8rem;
    height: 43.8rem;
    align-items: flex-start;
  }
  @media ${({ theme }) => theme.device.desktop} {
    background-image: ${`url(${header.desktopPattern1})`};
    min-width: 144rem;
    height: 56rem;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    bottom: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
    bottom: 5.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 106.8rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    min-width: 60.8rem;
    & > *:last-child {
      width: 70%;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:last-child {
      width: 50%;
    }
  }
`;

const MoveLinkWrapper = styled.div`
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    min-width: 60.8rem;
  }
`;

const MastheadQuery = graphql`
  query CodeTogetherMastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_masthead" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export default Masthead;
