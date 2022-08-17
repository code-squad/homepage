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
      <TitleSet subtitle={SUBTITLE.MASTERS_COURSE} title={TITLE.EDUCATION_FEATURES} />
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
  margin-top: 18rem;
  display: flex;
  align-items: center;
  min-width: 106.2rem;
  padding: 0 18.9rem;
  flex-direction: column;
`;
const FeatureListWrapper = styled.ul`
  width: 107rem;
  display: flex;
  flex-direction: column;
`;

const FeatureList = styled.ul`
  flex-flow: row wrap;
  align-content: flex-start;
  & > *:not(:nth-child(3n)) {
    margin-right: 7.9rem;
  }
`;
const FeatureItem = styled.li`
  margin-top: 8rem;
  display: inline-flex;
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
