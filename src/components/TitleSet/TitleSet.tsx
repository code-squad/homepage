import React from "react";
import styled from "styled-components";
// Typography
import { HLBold, SHLBold, SDisplay } from "typography";
// Libs
import { useResponsive } from "lib/hooks";

interface ITitleSet {
  title?: string;
  subtitle?: string;
  bigSubtitle?: boolean;
}

const TitleSet: React.FC<ITitleSet> = ({ title, subtitle, bigSubtitle }) => {
  const { isMobile } = useResponsive();

  return (
    <TitleWrapper>
      {isMobile && (
        <>
          {bigSubtitle ? <HLBold>{subtitle}</HLBold> : <SHLBold>{subtitle}</SHLBold>}
          <HeadTitle>{subtitle ? <HLBold>{title}</HLBold> : <SHLBold>{title}</SHLBold>}</HeadTitle>
        </>
      )}
      {!isMobile && (
        <>
          {subtitle &&
            (bigSubtitle ? <SDisplay>{subtitle}</SDisplay> : <HLBold>{subtitle}</HLBold>)}
          <HeadTitle subtitle={Boolean(subtitle)}>
            {subtitle ? <SDisplay>{title}</SDisplay> : <HLBold>{title}</HLBold>}
          </HeadTitle>
        </>
      )}
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  width: 107rem;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;
const HeadTitle = styled.div<{ subtitle?: boolean }>`
  @media (min-width: ${({ theme }) => theme.breakPoint.mobile}) {
    margin-top: ${({ subtitle }) => (subtitle ? "0.4rem" : "0rem")};
  }
`;

export default TitleSet;
