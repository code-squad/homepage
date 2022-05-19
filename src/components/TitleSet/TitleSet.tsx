import React from "react";
import styled, { useTheme } from "styled-components";
// Typography
import { LBody, SDisplay } from "typography";

interface ITitleSet {
  title: string;
  subtitle: string;
}

const TitleSet: React.FC<ITitleSet> = ({ title, subtitle }) => {
  const { color } = useTheme();

  return (
    <TitleWrapper>
      <LBody bold style={{ color: color.greyScale.grey1 }}>
        {subtitle}
      </LBody>
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
`;

export default TitleSet;
