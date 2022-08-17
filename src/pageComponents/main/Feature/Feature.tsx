import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FeatureType } from "@type/Feature";
// Typography
import { MBody, HLBold, SBold } from "typography";
// Components
import { TitleSet } from "components/";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
import features from "assets/img/illusts/feature";
// Lib
import { getSplittedPhrase, strainMdxInfo } from "lib/utils";

const Feature: React.FC = () => {
  const { color } = useTheme();

  const { title, subtitle, description, image }: FeatureType = strainMdxInfo(
    useStaticQuery(FeatureQuery)
  );
  const splittedDescription = getSplittedPhrase(description);

  return (
    <FeatureWrapper>
      <TitleSet title={TITLE.FEATURE} subtitle={SUBTITLE.FEATURE} bigSubtitle />
      <ContentWrapper>
        <FeatureImg src={features[image]} alt="feature" />
        <Content>
          <div>
            <HLBold style={{ color: color.greyScale.grey1 }}>{title}</HLBold>
            <SBold>{subtitle}</SBold>
          </div>
          {splittedDescription.map((descriptionItem: string) => (
            <MBody key={descriptionItem}>{descriptionItem}</MBody>
          ))}
        </Content>
      </ContentWrapper>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 18rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  & > *:not(:last-child) {
    margin-bottom: 5.6rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-right: 13.2rem;
  }
`;

const Content = styled.div`
  width: 41.1rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const FeatureImg = styled.img`
  width: 51.9rem;
  height: 44rem;
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
