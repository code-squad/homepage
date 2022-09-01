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
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-image: ${`url(${header.pattern3})`};
  background-position: top right;
  background-position: center;
  // 배경 이미지 asset 파일이 추가되면 추가작업 필요
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
    padding: 0 2.4rem;
    background-size: cover;
    height: 46.8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
    padding: 0 8rem;
    height: 43.8rem;
    background-size: cover;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
    height: 56rem;
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
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
  width: 106.2rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:last-child {
      width: 50%;
    }
  }
`;

const MoveLinkWrapper = styled.div`
  width: 106.2rem;
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
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
