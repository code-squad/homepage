import React from "react";
import styled from "styled-components";
// Type
import { ScheduleType } from "@type/Schedule";
import { ProgressType } from "@type/Schedule";
// Components
import { ScheduleInfoNav } from "./ScheduleInfoNav";

const VerticalCourseSchedule: React.FC<{ scheduleInfo: ScheduleType }> = ({ scheduleInfo }) => {
  const [selectedScheduleIndex, setSelectedScheduleIndex] = React.useState(0);

  return (
    <ScheduleWrapper>
      <ScheduleInfoNav {...{ scheduleInfo, selectedScheduleIndex, setSelectedScheduleIndex }} />
    </ScheduleWrapper>
  );
};

const ScheduleWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  box-sizing: border-box;
  justify-content: center;
  margin-top: 4rem;
  padding: 4rem 2.4rem;
`;

export default VerticalCourseSchedule;
