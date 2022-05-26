import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { EducationFeatureType } from "@type/EducationFeature";
// Components
import { ImageCard, TitleSet } from "components";
// Assets
import illusts from "assets/img/illusts";
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
              <ImageCard description={content} title={title} img={illusts[img]} medium />
            </FeatureItem>
          ))}
        </FeatureList>
      </FeatureListWrapper>
    </EducationFeaturesWrapper>
  );
};

const EducationFeaturesWrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
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
`;
const FeatureItem = styled.li`
  margin-top: 8rem;
  display: inline-flex;
  margin-right: 12rem;
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
