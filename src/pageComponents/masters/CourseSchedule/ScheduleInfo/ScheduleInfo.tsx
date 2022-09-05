import React from "react";
import styled from "styled-components";
// Type
import { ScheduleType } from "@type/Schedule";
// Typography
import { Typography } from "typography";
// Components
import { MButton } from "components";
import { getSplittedPhrase } from "lib/utils";
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
      <Typography type="SHLBold">{title}</Typography>
      <Typography type="LBody" style={{ marginTop: "2.4rem" }}>
        {subtitle}
      </Typography>
      {getSplittedPhrase(description).map((descriptionItem: string) => (
        <DescriptionWrapper key={descriptionItem}>
          <Typography type="MBody">{descriptionItem}</Typography>
        </DescriptionWrapper>
      ))}
      {selectedScheduleIndex === 0 && (
        <ButtonWrapper>
          {waiterApplyUrlBtnText && (
            <MButton to={waiterApplyUrl} children={waiterApplyUrlBtnText} type="right" />
          )}
          {applyBtnText && <MButton to={applyUrl} accent children={applyBtnText} type="right" />}
        </ButtonWrapper>
      )}
    </ScheduleInfoWrapper>
  );
};

const ScheduleInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 1.6rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 3.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 62.8rem;
    margin-left: 8.5rem;
  }
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
