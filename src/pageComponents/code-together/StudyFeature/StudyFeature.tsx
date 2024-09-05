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
import { useResponsive } from "lib/hooks";

const StudyFeature: React.FC = () => {
  const data = useStaticQuery(CodeTogetherStudyFeatureQuery);
  const { studyFeatures }: { studyFeatures: CodeTogetherFeatureType[] } = strainMdxInfo(data);

  const { isDesktop, isMobile } = useResponsive();

  return (
    <StudyBackgroundWrapper>
      <StudyWrapper>
        <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
        <FeatureList>
          {studyFeatures.map(({ title, descriptions, img }) => (
            <FeatureItem key={title}>
              <ImageCard
                {...{ descriptions, title }}
                img={features[img]}
                medium={isDesktop}
                vertical={isMobile}
              />
            </FeatureItem>
          ))}
        </FeatureList>
      </StudyWrapper>
    </StudyBackgroundWrapper>
  );
};

const StudyBackgroundWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  @media ${({ theme }) => theme.device.mobile} {
    background-color: ${({ theme: { color } }) => color.surface.white20};
  }
`;

const StudyWrapper = styled.div<{ backgroundColor?: string }>`
  margin: 0 auto;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 8rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 8rem 18.9rem;
  }
`;

const FeatureList = styled.ul`
  margin-top: 8rem;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 7.9rem;
    & > *:nth-child(2n) {
      margin-bottom: 8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    & > *:not(:nth-child(2n)) {
      margin-right: 13.3rem;
      margin-bottom: 8.4rem;
    }
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
