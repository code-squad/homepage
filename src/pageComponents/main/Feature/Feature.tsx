import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FeatureType } from "@type/Feature";
// Typography
import { MBody, HLBold, SHLBold, SBold } from "typography";
// Components
import { MButton, TitleSet } from "components/";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
import features from "assets/img/illusts/feature";
// Lib
import { getSplittedPhrase, strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Feature: React.FC = () => {
  const { color } = useTheme();
  const { isMobile } = useResponsive();

  const { title, subtitle, description, image }: FeatureType = strainMdxInfo(
    useStaticQuery(FeatureQuery)
  );
  const [detailView, setDetailView] = React.useState(false);

  const splittedDescription = getSplittedPhrase(description);

  return (
    <FeatureWrapper>
      <TitleSet title={TITLE.FEATURE} subtitle={SUBTITLE.FEATURE} bigSubtitle />
      <ContentWrapper>
        <FeatureImg src={features[image]} alt="feature" />
        <Content>
          <div>
            {isMobile && <SHLBold style={{ color: color.greyScale.grey1 }}>{title}</SHLBold>}
            {!isMobile && <HLBold style={{ color: color.greyScale.grey1 }}>{title}</HLBold>}
            <SBold>{subtitle}</SBold>
          </div>
          {splittedDescription.map((descriptionItem: string, index: number) => {
            if (isMobile && !detailView && index > 0) return null;
            return <MBody key={descriptionItem}>{descriptionItem}</MBody>;
          })}
        </Content>
      </ContentWrapper>
      {isMobile && (
        <MButton
          children={detailView ? TITLE.FOLD : TITLE.VIEW_DETAIL}
          onClick={() => setDetailView(!detailView)}
          type={detailView ? "none" : "left"}
        />
      )}
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 12rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 18rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-bottom: 5.6rem;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-right: 13.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 3.2rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 41.1rem;
  }
`;

const FeatureImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 51.9rem;
    height: 44rem;
  }
`;

const FeatureQuery = graphql`
  query FeatureQuery {
    mdx(frontmatter: { templateKey: { eq: "main_feature" } }) {
      frontmatter {
        title
        subtitle
        description
        image
      }
    }
  }
`;

export default Feature;
