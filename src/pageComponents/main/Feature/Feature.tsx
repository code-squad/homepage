import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FeatureType } from "@type/Feature";
// Typography
import { MBody, XLBody } from "typography";
// Components
import { TitleSet } from "components/";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
import images from "assets/images";
// Lib
import { strainMdxInfo } from "lib/utils";

const Feature: React.FC = () => {
  const { color } = useTheme();

  const { title, subtitle, description, image }: FeatureType = strainMdxInfo(
    useStaticQuery(FeatureQuery)
  );

  return (
    <FeatureWrapper>
      <TitleSet title={TITLE.FEATURE} subtitle={SUBTITLE.FEATURE} />
      <ContentWrapper>
        <Content>
          <div>
            <XLBody bold>{title}</XLBody>
            <MBody bold style={{ color: color.greyScale.grey2 }}>
              {subtitle}
            </MBody>
          </div>
          {description.split("\n\n").map((descriptionItem: string) => (
            <MBody key={descriptionItem} style={{ color: color.greyScale.grey2 }}>
              {descriptionItem}
            </MBody>
          ))}
        </Content>
        <FeatureImg src={images[image]} alt="feature" />
      </ContentWrapper>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  width: 106.2rem;
  padding-bottom: 16rem;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
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
