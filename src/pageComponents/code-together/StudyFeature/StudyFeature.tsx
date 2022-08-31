import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Components
import { ImageCard, TitleSet } from "components";
// Assets
import features from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const StudyFeature: React.FC = () => {
  const data = useStaticQuery(CodeTogetherStudyFeatureQuery);
  const { studyFeatures }: { studyFeatures: CodeTogetherFeatureType[] } = strainMdxInfo(data);

  return (
    <StudyWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
      <FeatureList>
        {studyFeatures.map(({ title, descriptions, img }) => (
          <FeatureItem key={title}>
            <ImageCard {...{ title, descriptions }} img={features[img]} medium />
          </FeatureItem>
        ))}
      </FeatureList>
    </StudyWrapper>
  );
};

const StudyWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-top: 18rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const FeatureList = styled.ul`
  width: 106.2rem;
  margin-top: 6.4rem;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  & > *:not(:nth-child(2n)) {
    margin-right: 13.3rem;
  }
  & > *:not(:nth-last-child(-n + 2)) {
    margin-bottom: 8rem;
  }
`;

const FeatureItem = styled.li`
  display: inline-flex;
`;

const CodeTogetherStudyFeatureQuery = graphql`
  query CodeTogetherStudyFeatureQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_studyFeatures" } }) {
      frontmatter {
        studyFeatures {
          title
          img
          descriptions
        }
      }
    }
  }
`;

export default StudyFeature;
