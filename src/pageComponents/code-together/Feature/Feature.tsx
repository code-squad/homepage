import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Typography
import { MBody } from "typography";
// Components
import { TitleSet } from "components";
import { ImageCard } from "./ImageCard";
// Assets
import illusts from "assets/img/illusts";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Feature: React.FC = ({}) => {
  const data = useStaticQuery(CodeTogetherFeatureQuery);
  const { features }: { features: CodeTogetherFeatureType[] } = strainMdxInfo(data);

  return (
    <FeatureWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER_FEATURE} title={TITLE.FEATURE} />
      <DescriptionWrapper>
        <MBody style={{ width: "fit-content" }}>{DESCRIPTION.CODE_TOGETHER}</MBody>
      </DescriptionWrapper>
      <FeatureList>
        {features.map(({ title, descriptions, img }) => (
          <FeatureItem key={title}>
            <ImageCard descriptions={descriptions} title={title} img={illusts[img]} />
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

const DescriptionWrapper = styled.div`
  width: 106.2rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  margin-top: 2.4rem;
  white-space: pre-line;
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
          index
          title
          img
          descriptions
        }
      }
    }
  }
`;

export default Feature;