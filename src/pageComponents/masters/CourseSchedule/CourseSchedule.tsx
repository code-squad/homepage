import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { TitleSet } from "components/";
import { ScheduleNav } from "./ScheduleNav";
import { ScheduleInfo } from "./ScheduleInfo";
import { MobileCourseSchedule } from "./MobileCourseSchedule";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const CourseSchedule: React.FC = ({}) => {
  const { isMobile } = useResponsive();

  const scheduleInfo = strainMdxInfo(useStaticQuery(ScheduleQuery));
  const { progress } = scheduleInfo;

  const [selectedScheduleIndex, setSelectedScheduleIndex] = React.useState(0);

  return (
    <CourseScheduleWrapper>
      <TitleSetWrapper>
        <TitleSet
          subtitle={SUBTITLE.MASTERS_COURSE_SCHEDULE}
          title={TITLE.MASTERS_COURSE_SCHEDULE}
        />
      </TitleSetWrapper>
      {isMobile ? (
        <MobileCourseSchedule {...{ progress, scheduleInfo }} />
      ) : (
        <ScheduleWrapper>
          <ScheduleLeftRuler>
            <ScheduleNav {...{ progress, selectedScheduleIndex, setSelectedScheduleIndex }} />
            <ScheduleInfo {...{ scheduleInfo, selectedScheduleIndex }} />
          </ScheduleLeftRuler>
        </ScheduleWrapper>
      )}
    </CourseScheduleWrapper>
  );
};

const CourseScheduleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    min-width: 144rem;
    margin-top: 18rem;
  }
`;

const TitleSetWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
  }
`;

const ScheduleWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  @media ${({ theme }) => theme.device.mobile} {
    box-sizing: border-box;
    justify-content: center;
    margin-top: 4rem;
    padding: 4rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    box-sizing: border-box;
    justify-content: center;
    margin-top: 4rem;
    padding: 8rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: center;
    margin-top: 4rem;
    padding: 8rem 0;
    min-width: 144rem;
  }
`;
const ScheduleLeftRuler = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 107rem;
    justify-content: flex-start;
  }
`;

const ScheduleQuery = graphql`
  query ScheduleQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_schedule" } }) {
      frontmatter {
        progress {
          label
          title
          subtitle
          description
        }
        waiterApplyUrl
        applyUrl
        waiterApplyUrlBtnText
        applyBtnText
      }
    }
  }
`;

export default CourseSchedule;
