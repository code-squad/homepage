import React from "react";
import styled, { useTheme } from "styled-components";
// Typography
import { LBody, SDisplay } from "typography";

interface ICourseSchedule {
  title: string;
  subTitle: string;
}

const SectionTitle: React.FC<ICourseSchedule> = ({ title, subTitle }) => {
  const theme = useTheme();

  return (
    <TitleWrapper>
      <LBody bold style={{ color: theme.color.greyScale.grey1 }}>
        {subTitle}
      </LBody>
      <HeadTitle>
        <SDisplay>{title}</SDisplay>
      </HeadTitle>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeadTitle = styled.div`
  margin-top: 0.8rem;
`;

export default SectionTitle;
