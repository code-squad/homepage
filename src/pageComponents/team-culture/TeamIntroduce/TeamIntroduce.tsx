import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Assets
import header from "assets/img/illusts/header";
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { useResponsive } from "lib/hooks";

const TeamIntroduce: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <TeamIntroduceWrapper>
      <IntroduceText>
        {isMobile ? (
          <>
            <Typography type="SDisplay">{SUBTITLE.WE}</Typography>
            <Typography type="MBody" style={{ marginTop: "1.6rem" }}>
              {TITLE.TEAM_CULTURE}
            </Typography>
          </>
        ) : (
          <Typography type="SDisplay">{SUBTITLE.WE + " " + TITLE.TEAM_CULTURE}</Typography>
        )}
      </IntroduceText>
    </TeamIntroduceWrapper>
  );
};

const TeamIntroduceWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  background-repeat: no-repeat;
  background-position: right;
  @media ${({ theme }) => theme.device.mobile} {
    height: 35.2rem;
    background-image: ${`url(${header.mobilePattern2})`};
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: 44.8rem;
    background-image: ${`url(${header.tabletPattern2})`};
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
    min-height: 56rem;
    background-image: ${`url(${header.desktopPattern2})`};
  }
`;

const IntroduceText = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 5.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 8rem;
    margin: 0 auto;
  }
`;

export default TeamIntroduce;
