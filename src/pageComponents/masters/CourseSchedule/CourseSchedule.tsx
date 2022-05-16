import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { LBody, MBody, MDisplay, SDisplay } from "typography";
// Components
import { ImageCard } from "components";
// Assets
import images from "assets/images";
import { SUBTITLE, TITLE } from "assets/static/phrases";
import { strainMdxInfo } from "lib/utils";

interface featuresType {
  index?: number;
  title: string;
  content: string;
  img: keyof typeof images;
}

const CourseSchedule: React.FC = ({}) => {
  const scheduleInfo = strainMdxInfo(useStaticQuery(ScheduleQuery));
  const {
    title,
    subtitle,
    description,
    progress,
    waiterApplyUrl,
    applyUrl,
    waiterApplyUrlBtnText,
    applyBtnText,
  } = scheduleInfo;

  return (
    <CourseScheduleWrapper>
      <ScheduleTitleWrapper>
        <LBody bold>2021 마스터즈 코스</LBody>
        <ScheduleHeadTitle>
          <SDisplay>졸업생 후기</SDisplay>
        </ScheduleHeadTitle>
      </ScheduleTitleWrapper>
      <ScheduleWrapper></ScheduleWrapper>
    </CourseScheduleWrapper>
  );
};

const CourseScheduleWrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
`;
const ScheduleTitleWrapper = styled.div`
  width: 107rem;
  display: flex;
  flex-direction: column;
`;

const ScheduleHeadTitle = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 5.2rem;
`;

const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 144rem;
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
`;

const ScheduleQuery = graphql`
  query ScheduleQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_schedule" } }) {
      frontmatter {
        title
        subtitle
        description
        progress
        waiterApplyUrl
        applyUrl
        waiterApplyUrlBtnText
        applyBtnText
      }
    }
  }
`;

export default CourseSchedule;
