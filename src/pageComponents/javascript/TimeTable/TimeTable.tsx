import React from "react";
import styled from "styled-components";
// Components
import { TitleSet } from "components";
// Assets
import picture from "assets/img/picture";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const StudyMethod: React.FC = () => {
  return (
    <StudyWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
      <StudyMethodImgWrapper>
        <img src={picture.javascriptTimetable} alt="codetogether-studymethod" />
      </StudyMethodImgWrapper>
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

const StudyMethodImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export default StudyMethod;
