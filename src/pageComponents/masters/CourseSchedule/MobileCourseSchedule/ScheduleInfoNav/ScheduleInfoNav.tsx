import React from "react";
import styled, { useTheme } from "styled-components";
// Type
import { ProgressType } from "@type/Schedule";
import { ScheduleType } from "@type/Schedule";
// Typography
import { Typography } from "typography";
// Components
import { MButton, Tag } from "components";

interface IScheduleInfoNav {
  scheduleInfo: ScheduleType;
  selectedScheduleIndex: number;
  setSelectedScheduleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScheduleInfoNav: React.FC<IScheduleInfoNav> = ({
  scheduleInfo,
  selectedScheduleIndex,
  setSelectedScheduleIndex,
}) => {
  const { color } = useTheme();

  const { progress, waiterApplyUrl, waiterApplyUrlBtnText, applyBtnText, applyUrl } = scheduleInfo;

  return (
    <ScheduleInfoNavWrapper>
      {progress.map(({ title, subtitle, description, label, tags }: ProgressType, index) => (
        <div key={label} style={{ position: "relative" }}>
          <ScheduleNavItem key={label} onClick={() => setSelectedScheduleIndex(index)}>
            <div>
              <Dot clicked={selectedScheduleIndex === index} />
            </div>
            <ScheduleInfoWrapper clicked={selectedScheduleIndex === index}>
              <Typography
                type={selectedScheduleIndex === index ? "SHLBold" : "MBold"}
                style={{
                  color:
                    selectedScheduleIndex === index ? color.primary.green2 : color.greyScale.grey2,
                }}
              >
                {title}
              </Typography>
              {index === selectedScheduleIndex && (
                <>
                  <TagWrapper>
                    {tags &&
                      tags.map((tag: string) => (
                        <div style={{ marginRight: ".8rem" }}>
                          <Tag type="Orange" text={tag} />
                        </div>
                      ))}
                  </TagWrapper>
                  <Typography type="LBody" style={{ marginTop: "1.9rem" }}>
                    {subtitle}
                  </Typography>
                  <DescriptionWrapper>
                    <Typography type="MBody">{description}</Typography>
                  </DescriptionWrapper>
                  {index === 0 && (
                    <ButtonWrapper>
                      {waiterApplyUrlBtnText && (
                        <MButton
                          to={waiterApplyUrl}
                          children={waiterApplyUrlBtnText}
                          type="right"
                        />
                      )}
                      {applyBtnText && (
                        <MButton to={applyUrl} accent children={applyBtnText} type="right" />
                      )}
                    </ButtonWrapper>
                  )}
                </>
              )}
            </ScheduleInfoWrapper>
          </ScheduleNavItem>
          {index + 2 > progress.length ? null : <VerticalLine />}
        </div>
      ))}
    </ScheduleInfoNavWrapper>
  );
};

const ScheduleInfoNavWrapper = styled.ul`
  & > *:not(:last-child) {
    padding-bottom: 2.4rem;
  }
`;

const ScheduleNavItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  cursor: pointer;
`;

const Dot = styled.div<{ clicked: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${({ clicked, theme: { color } }) =>
    clicked ? color.primary.green2 : color.greyScale.grey2};
  border-radius: 50%;
  border: ${({ clicked, theme: { color } }) =>
    clicked ? `.4rem solid ${color.primary.green4}` : "unset"};
  position: relative;
  top: 0.6rem;
  top: ${({ clicked }) => (clicked ? "0.2rem" : "0.6rem")};
  left: ${({ clicked }) => (clicked ? "-0.4rem" : "0rem")};
  z-index: 1;
  cursor: pointer;
`;

const VerticalLine = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 2.1rem;
  height: 100%;
  border-right: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
`;

const TagWrapper = styled.div`
  display: flex;
  margin-top: 2.9rem;
`;
const ScheduleInfoWrapper = styled.div<{ clicked: boolean }>`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.black};
  margin-left: ${({ clicked }) => (clicked ? "0.8rem" : "1.6rem")};
  margin-bottom: ${({ clicked }) => (clicked ? "1.6rem" : "unset")};
`;
const DescriptionWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  margin-top: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 2.4rem;
  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
`;

export default ScheduleInfoNav;
