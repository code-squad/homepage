import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { EducationFeatureType } from "@type/EducationFeature";
// Components
import { ImageCard, TitleSet } from "components";
// Assets
import featuresImg from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const EducationFeatures: React.FC = ({}) => {
  const data = useStaticQuery(FeaturesQuery);
  const { features }: { features: EducationFeatureType[] } = strainMdxInfo(data);

  return (
    <EducationFeaturesWrapper>
      <TitleSet subtitle={SUBTITLE.MASTERS_COURSE} title={TITLE.EDUCATION_FEATURES} bigSubtitle />
      <FeatureListWrapper>
        <FeatureList>
          {features.map(({ title, content, img }) => (
            <FeatureItem key={title}>
              <ImageCard description={content} title={title} img={featuresImg[img]} />
            </FeatureItem>
          ))}
        </FeatureList>
      </FeatureListWrapper>
    </EducationFeaturesWrapper>
  );
};

const EducationFeaturesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    margin-top: 12rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    margin-top: 18rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    padding: 0 18.9rem;
    margin-top: 18rem;
    min-width: 106.2rem;
  }
`;
const FeatureListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.desktop} {
    width: 107rem;
  }
`;

const FeatureList = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 7.9rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: flex-start;
    & > *:not(:nth-child(3n)) {
      margin-right: 7.9rem;
    }
  }
`;
const FeatureItem = styled.li`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    margin-top: 4.8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: inline-flex;
    margin-top: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: inline-flex;
    margin-top: 8rem;
  }
`;

const FeaturesQuery = graphql`
  query FeaturesQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_features" } }) {
      frontmatter {
        features {
          title
          content
          img
        }
      }
    }
  }
`;

export default EducationFeatures;
