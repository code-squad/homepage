import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Libs
import { useResponsive } from "lib/hooks";

interface ITitleSet {
  title: string;
  subtitle?: string;
  bigSubtitle?: boolean;
}

const TitleSet: React.FC<ITitleSet> = ({ title, subtitle, bigSubtitle }) => {
  const { isMobile } = useResponsive();

  return (
    <TitleWrapper>
      {bigSubtitle ? (
        <Typography type={isMobile ? "HLBold" : "SDisplay"}>{subtitle}</Typography>
      ) : (
        <Typography type={isMobile ? "SHLBold" : "HLBold"}>{subtitle}</Typography>
      )}
      <HeadTitle>
        {subtitle ? (
          <Typography type={isMobile ? "HLBold" : "SDisplay"}>{title}</Typography>
        ) : (
          <Typography type={isMobile ? "SHLBold" : "HLBold"}>{title}</Typography>
        )}
      </HeadTitle>
    </TitleWrapper>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.black};

  @media ${({ theme }) => theme.device.desktop} {
    width: 107rem;
  }
`;
const HeadTitle = styled.div<{ subtitle?: boolean }>`
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: ${({ subtitle }) => (subtitle ? "0.4rem" : "0rem")};
  }
`;

export default TitleSet;
