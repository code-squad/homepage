import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FeatureType } from "@type/Feature";
// Typography
import { MBody, XLBody } from "typography";
// Components
import { SectionTitleRefac } from "components/";
// Assets
import images from "assets/images";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const Feature: React.FC = () => {
  const theme = useTheme();

  const data = useStaticQuery(FeatureQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, subtitle, description, image }: FeatureType = frontmatter;

  return (
    <FeatureWrapper>
      <SectionTitleRefac title={TITLE.FEATURE} subTitle={SUBTITLE.FEATURE} />
      <ContentWrapper>
        <Content>
          <div>
            <XLBody bold>{title}</XLBody>
            <MBody bold style={{ color: `${theme.color.greyScale.grey2}` }}>
              {subtitle}
            </MBody>
          </div>
          {description.split("\n\n").map((descriptionItem: string) => (
            <MBody key={descriptionItem} style={{ color: theme.color.greyScale.grey2 }}>
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
  padding: 0 18.9rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
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
