import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay } from "typography";

const Welcome: React.FC = () => {
  return (
    <WelcomeWrapper>
      <MDisplay>{`강의식 수업이 재미 없던 사람들,
여기여기 모여라!`}</MDisplay>
    </WelcomeWrapper>
  );
};

const WelcomeWrapper = styled.div`
  min-width: 144rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.primary.green4};
  white-space: pre-line;
  text-align: center;
`;

export default Welcome;
