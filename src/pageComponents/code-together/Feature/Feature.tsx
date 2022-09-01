import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Components
import { ImageCard, TitleSet } from "components";
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
            <ImageCard {...{ descriptions, title }} img={featureImgs[img]} />
          </FeatureItem>
        ))}
      </FeatureList>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  margin: 0 auto;
  flex-direction: column;
  margin-top: 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
  }
`;

const FeatureList = styled.ul`
  margin-top: 8rem;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  & > *:not(:nth-child(3n)) {
    margin-right: 7.8rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
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
