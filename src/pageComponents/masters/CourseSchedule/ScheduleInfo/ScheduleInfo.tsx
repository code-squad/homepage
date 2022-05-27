import React from "react";
import styled, { useTheme } from "styled-components";
// Type
import { ScheduleType } from "@type/Schedule";
// Typography
import { LBody, MBody } from "typography";
// Components
import { MButton } from "components";
// Assets

interface IScheduleInfo {
  scheduleInfo: ScheduleType;
  selectedScheduleIndex: number;
}

const ScheduleInfo: React.FC<IScheduleInfo> = ({ scheduleInfo, selectedScheduleIndex }) => {
  const { progress, waiterApplyUrl, waiterApplyUrlBtnText, applyBtnText, applyUrl } = scheduleInfo;
  const { title, subtitle, description } = progress[selectedScheduleIndex];

  return (
    <ScheduleInfoWrapper>
      <LBody bold>{title}</LBody>
      <LBody style={{ marginTop: "2.4rem" }}>{subtitle}</LBody>
      {description.split("\n\n").map((descriptionItem: string) => (
        <DescriptionWrapper key={descriptionItem}>
          <MBody>{descriptionItem}</MBody>
        </DescriptionWrapper>
      ))}
      {selectedScheduleIndex === 0 ? (
        <ButtonWrapper>
          {waiterApplyUrlBtnText ? (
            <MButton to={waiterApplyUrl} children={waiterApplyUrlBtnText} />
          ) : null}
          {applyBtnText ? <MButton to={applyUrl} accent children={applyBtnText} /> : null}
        </ButtonWrapper>
      ) : null}
    </ScheduleInfoWrapper>
  );
};

const ScheduleInfoWrapper = styled.div`
  width: 62.8rem;
  margin-left: 8.5rem;
  display: flex;
  flex-direction: column;
`;
const DescriptionWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  margin-top: 1.6rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 4.8rem;
  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export default ScheduleInfo;
