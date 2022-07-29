import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay } from "typography";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";

const Welcome: React.FC = () => {
  return (
    <WelcomeWrapper>
      <MDisplay>{TITLE.WELCOME}</MDisplay>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  min-width: 144rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { color } }) => color.greyScale.black};
  white-space: pre-line;
  text-align: center;
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-image: ${`url(${headers.hero})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Welcome;
