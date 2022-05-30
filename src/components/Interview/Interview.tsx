import React from "react";
import styled, { CSSProperties } from "styled-components";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { InterviewBox, TitleSet } from "components/";
// Assets
import avatars from "assets/img/avatars";
import icons from "assets/img/icons";

interface IInterview {
  subtitle: string;
  title: string;
  interviews: InterviewType[];
  style?: CSSProperties | undefined;
}

const Interview: React.FC<IInterview> = ({ subtitle, title, interviews, style }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 2 >= 0) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 3 === interviews.length) {
      setCurrentIndex(currentIndex + 1);
      return;
    }
    if (currentIndex + 2 <= interviews.length) {
      setCurrentIndex(currentIndex + 2);
      return;
    }
    if (currentIndex + 1 <= interviews.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <InterviewWrapper {...{ style }}>
      <TitleWrapper>
        <TitleSet {...{ title, subtitle }} />
        <ArrowNavigationWrapper>
          <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
            <img src={icons.chevronLeft} alt="arrow-left" />
          </ArrowButton>
          <ArrowButton
            disabled={currentIndex + 2 === interviews.length}
            onClick={handleArrowRightClick}
          >
            <img src={icons.chevronRight} alt="arrow-right" />
          </ArrowButton>
        </ArrowNavigationWrapper>
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
                  ? avatars.smallMember1
                  : avatars.smallMember2
              }
            />
          ))}
        </InterviewList>
      </InterviewListWrapper>
    </InterviewWrapper>
  );
};

const InterviewWrapper = styled.div`
  margin-bottom: 16rem;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
`;

const TitleWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 8rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
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
