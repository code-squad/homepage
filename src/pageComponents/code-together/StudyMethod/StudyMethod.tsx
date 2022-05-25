import React from "react";
import styled from "styled-components";
// Components
import { TitleSet } from "components";
// Assets
import icons from "assets/img/icons";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const StudyMethod: React.FC = () => {
  const { codetogetherStudy1 } = picture;

  const imgList = [codetogetherStudy1, codetogetherStudy1];
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
      <StudyMethodListWrapper>
        <StudyMethodList {...{ currentIndex }}>
          {imgList.map((image, i) => (
            <li key={`${image}-${i}`}>
              <StudyMethodImage src={image} alt="codetogether-studymethod" />
            </li>
          ))}
        </StudyMethodList>
      </StudyMethodListWrapper>
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

const StudyMethodListWrapper = styled.div`
  width: 80rem;
  margin: 0 auto;
  overflow: hidden;
`;

const StudyMethodList = styled.ul<{ currentIndex: number }>`
  display: flex;
  position: relative;
  display: flex;
  transition: left 0.5s;
  left: -${({ currentIndex }) => currentIndex * 77.8}rem;
`;

const StudyMethodImage = styled.img`
  width: 77.8rem;
`;

export default StudyMethod;
