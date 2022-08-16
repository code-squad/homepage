import React from "react";
import styled from "styled-components";
// Typography
import { HLBold, SDisplay } from "typography";

interface ITitleSet {
  title: string;
  subtitle: string;
}

const TitleSet: React.FC<ITitleSet> = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <HLBold>{subtitle}</HLBold>
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
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;
const HeadTitle = styled.div`
  margin-top: 0.4rem;
`;

export default TitleSet;
