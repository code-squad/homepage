import React from "react";
import styled from "styled-components";
// Typography
import { HLBold, SDisplay } from "typography";

interface ITitleSet {
  title?: string;
  subtitle?: string;
  bigSubtitle?: boolean;
}

const TitleSet: React.FC<ITitleSet> = ({ title, subtitle, bigSubtitle }) => {
  return (
    <TitleWrapper>
      {bigSubtitle ? <SDisplay>{subtitle}</SDisplay> : <HLBold>{subtitle}</HLBold>}
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
