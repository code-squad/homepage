import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay, SDisplay } from "typography";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Libs
import { useResponsive } from "lib/hooks";

const Welcome: React.FC = () => {
  const { isMobile } = useResponsive();

  return (
    <WelcomeWrapper>
      {isMobile ? <SDisplay>{TITLE.WELCOME}</SDisplay> : <MDisplay>{TITLE.WELCOME}</MDisplay>}
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { color } }) => color.black};
  white-space: pre-line;
  text-align: center;
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-image: ${`url(${headers.hero})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
`;

export default Welcome;
