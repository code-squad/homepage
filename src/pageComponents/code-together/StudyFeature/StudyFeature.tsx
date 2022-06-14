import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Components
import { TitleSet } from "components";
import { ImageCard } from "./ImageCard";
// Assets
import icons from "assets/img/icons";
import features from "assets/img/illusts/feature";
import illusts from "assets/img/illusts";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const StudyFeature: React.FC = () => {
  const data = useStaticQuery(CodeTogetherStudyFeatureQuery);
  const { studyFeatures }: { studyFeatures: CodeTogetherFeatureType[] } = strainMdxInfo(data);

  const { placeBlank } = illusts;
  const imgList = [picture.howToStudy, placeBlank];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 1 <= imgList.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <StudyWrapper>
      <ArrowNavigationWrapper>
        <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
          <img src={icons.chevronLeft} alt="arrow-left" />
        </ArrowButton>
        <ArrowButton disabled={currentIndex === imgList.length - 1} onClick={handleArrowRightClick}>
          <img src={icons.chevronRight} alt="arrow-right" />
        </ArrowButton>
      </ArrowNavigationWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
      <StudyFeatureImgListWrapper>
        <StudyFeatureImgList {...{ currentIndex }}>
          {imgList.map((image, i) => (
            // 이미지 추가 후 이미지 수정 필요
            <li key={`${image}-${i}`}>
              <StudyFeatureImg src={image} alt="codetogether-study-feature" />
            </li>
          ))}
        </StudyFeatureImgList>
      </StudyFeatureImgListWrapper>
      <FeatureList>
        {studyFeatures.map(({ title, descriptions, img }) => (
          <FeatureItem key={title}>
            <ImageCard {...{ title, descriptions }} img={illusts.illustCardBlank} medium />
          </FeatureItem>
        ))}
      </FeatureList>
    </StudyWrapper>
  );
};

const StudyWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-top: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
  position: absolute;
  margin-top: 6.4rem;
  margin-left: 98.6rem;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

const ArrowButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    filter: invert(50%) sepia(7%) saturate(6%) hue-rotate(351deg) brightness(92%) contrast(89%);
  }
`;

const StudyFeatureImgListWrapper = styled.div`
  width: 77.8rem;
  margin: 0 auto;
  overflow: hidden;
`;

const StudyFeatureImgList = styled.ul<{ currentIndex: number }>`
  display: flex;
  position: relative;
  display: flex;
  transition: left 0.5s;
  left: -${({ currentIndex }) => currentIndex * 77.8}rem;
`;

const StudyFeatureImg = styled.img`
  width: 77.8rem;
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
