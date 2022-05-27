import React from "react";
import styled from "styled-components";
// Components
import { TitleSet } from "components";
// Assets
import picture from "assets/img/picture";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const TimeTable: React.FC = () => {
  return (
    <TimeTableWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
      <TimeTableImgWrapper>
        <img src={picture.javascriptTimetable} alt="codetogether-study-feature" />
      </TimeTableImgWrapper>
    </TimeTableWrapper>
  );
};

const TimeTableWrapper = styled.div`
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

const TimeTableImgWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

export default TimeTable;
