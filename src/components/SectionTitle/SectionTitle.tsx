import React from "react";
import styled from "styled-components";
// Typography
import { LBody, SDisplay } from "typography";

interface ICourseSchedule {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<ICourseSchedule> = ({ title, subTitle }) => {
  return (
    <TitleWrapper>
      <LBody bold>{subTitle}</LBody>
      <HeadTitle>
        <SDisplay>{title}</SDisplay>
      </HeadTitle>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: 107rem;
  display: flex;
  flex-direction: column;
`;
const HeadTitle = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 5.2rem;
`;

export default SectionTitle;
