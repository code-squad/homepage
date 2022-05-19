import React from "react";
import styled from "styled-components";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { InterviewBox, SectionTitleRefac } from "components/";
// Assets
import avatars from "assets/images/avatars";
import arrowLeft from "assets/images/icons/arrow-left.svg";
import arrowRight from "assets/images/icons/arrow-right.svg";

interface IInterview {
  subtitle: string;
  title: string;
  interviews: InterviewType[];
}

const Interview: React.FC<IInterview> = ({ subtitle, title, interviews }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 2 <= interviews.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    if (currentIndex + 1 <= interviews.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <InterviewWrapper>
      <TitleWrapper>
        <ArrowNavigationWrapper>
          <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
            <img src={arrowLeft} alt="arrow-left" />
          </ArrowButton>
          <ArrowButton
            disabled={currentIndex === interviews.length - 1}
            onClick={handleArrowRightClick}
          >
            <img src={arrowRight} alt="arrow-right" />
          </ArrowButton>
        </ArrowNavigationWrapper>
        <SectionTitleRefac subTitle={subtitle} {...{ title }} />
      </TitleWrapper>
      <InterviewListWrapper>
        <InterviewList {...{ currentIndex }}>
          {interviews.map((interview, index) => (
            <InterviewBox
              key={interview.nutshell}
              {...{ ...interview }}
              writerPhoto={
                interview.writerPhoto
                  ? avatars[interview.writerPhoto]
                  : index % 2 === 0
                  ? avatars["avatarOrange"]
                  : avatars["avatarGreen"]
              }
            />
          ))}
        </InterviewList>
      </InterviewListWrapper>
    </InterviewWrapper>
  );
};

const InterviewWrapper = styled.div`
  padding-bottom: 20rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
  & > *:not(:last-child) {
    margin-bottom: 8rem;
  }
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
  position: absolute;
  margin-left: 98.6rem;
  margin-top: 8.1rem;
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

const TitleWrapper = styled.div`
  width: 100%;
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  position: relative;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const InterviewListWrapper = styled.div`
  overflow-x: hidden;
`;

const InterviewList = styled.ul<{ currentIndex: number }>`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
  position: relative;
  display: flex;
  transition: left 0.5s;
  left: -${({ currentIndex }) => currentIndex * 54.3}rem;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export default Interview;
