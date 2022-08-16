import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay } from "typography";
// Assets
import { TITLE } from "assets/static/phrases";

const TeamIntroduce: React.FC = () => {
  return (
    <TeamIntroduceWrapper>
      <Background />
      <IntroduceText>
        <MDisplay>{TITLE.TEAM_CULTURE}</MDisplay>
      </IntroduceText>
    </TeamIntroduceWrapper>
  );
};

const Background = styled.div`
  position: absolute;
  z-index: -1;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  height: 56rem;
  width: 100%;
  min-width: 144rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    display: block;
    width: 28rem;
    height: 28rem;
    background-color: #b2dee6;
    position: relative;
    left: 32rem;
    transform: rotate(45deg);
  }
`;

const TeamIntroduceWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 144rem;
  min-height: 56rem;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  white-space: pre-line;
  text-align: start;
`;

const IntroduceText = styled.div`
  width: 106.2rem;
  padding: 16rem 18.9rem 3.2rem 18.9rem;
  margin: 0 auto;
`;

export default TeamIntroduce;
