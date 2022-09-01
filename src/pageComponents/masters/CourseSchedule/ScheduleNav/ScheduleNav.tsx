import React from "react";
import styled from "styled-components";
// Type
import { ProgressType } from "@type/Schedule";
// Typography
import { MBody } from "typography";

interface IScheduleNav {
  progress: ProgressType[];
  selectedScheduleIndex: number;
  setSelectedScheduleIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ScheduleNav: React.FC<IScheduleNav> = ({
  progress,
  selectedScheduleIndex,
  setSelectedScheduleIndex,
}) => {
  return (
    <ScheduleNavItemWrapper>
      {progress.map(({ label }: ProgressType, index) => (
        <div key={label} style={{ position: "relative" }}>
          <ScheduleNavItem onClick={() => setSelectedScheduleIndex(index)}>
            <LabelWrapper clicked={selectedScheduleIndex === index}>
              <MBody>{label}</MBody>
            </LabelWrapper>
            <Dot clicked={selectedScheduleIndex === index} />
          </ScheduleNavItem>
          {index + 2 > progress.length ? null : <VerticalLine />}
        </div>
      ))}
    </ScheduleNavItemWrapper>
  );
};

const ScheduleNavItemWrapper = styled.ul`
  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const ScheduleNavItem = styled.li`
  width: 13.2rem;
  height: 2.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

const LabelWrapper = styled.div<{ clicked: boolean }>`
  width: 10rem;
  display: flex;
  justify-content: center;
  color: ${({ clicked, theme: { color } }) =>
    clicked ? color.primary.green2 : color.greyScale.grey2};
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
  left: ${({ clicked }) => (clicked ? ".4rem" : "unset")};
  z-index: 1;
`;
const VerticalLine = styled.div`
  position: absolute;
  right: 0.7rem;
  top: 2.1rem;
  height: 5rem;
  border-right: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
`;

export default ScheduleNav;
