import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay } from "typography";
// Assets
import { TITLE } from "assets/static/phrases";

const Welcome: React.FC = () => {
  return (
    <WelcomeWrapper>
      <MDisplay>{TITLE.WELCOME}</MDisplay>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  position: static;
  top: 0;
  min-width: 144rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { color } }) => color.greyScale.black};
  background-color: ${({ theme: { color } }) => color.primary.green4};
  white-space: pre-line;
  text-align: center;
`;

export default Welcome;
