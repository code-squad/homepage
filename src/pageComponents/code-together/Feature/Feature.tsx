import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Components
import { TitleSet } from "components";
import { ImageCard } from "./ImageCard";
// Assets
import featureImgs from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Feature: React.FC = ({}) => {
  const data = useStaticQuery(CodeTogetherFeatureQuery);
  const { features }: { features: CodeTogetherFeatureType[] } = strainMdxInfo(data);

  return (
    <FeatureWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.FEATURE} bigSubtitle />
      <FeatureList>
        {features.map(({ title, descriptions, img }) => (
          <FeatureItem key={title}>
            <ImageCard descriptions={descriptions} title={title} img={featureImgs[img]} />
          </FeatureItem>
        ))}
      </FeatureList>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
  margin-top: 16rem;
`;

const FeatureList = styled.ul`
  width: 106.2rem;
  margin-top: 6.4rem;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  & > *:not(:nth-child(3n)) {
    margin-right: 7.8rem;
  }
`;

const FeatureItem = styled.li`
  display: inline-flex;
`;

const CodeTogetherFeatureQuery = graphql`
  query CodeTogetherFeatureQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_features" } }) {
      frontmatter {
        features {
          title
          img
          descriptions
        }
      }
    }
  }
`;

export default Feature;
