import React from "react";
import styled, { useTheme } from "styled-components";
// Components
import { Recruit } from "components";

const Masthead: React.FC = ({}) => {
  const { color } = useTheme();

  return (
    <RecruitWrapper>
      <Recruit backgroundColor={color.secondary.blue3} />
    </RecruitWrapper>
  );
};

const RecruitWrapper = styled.div`
  margin-top: 16rem;
`;

export default Masthead;
