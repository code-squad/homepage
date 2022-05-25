import React from "react";
import styled from "styled-components";
// Typography
import { MDisplay } from "typography";
// Assets
import illusts from "assets/img/illusts";
import { TITLE } from "assets/static/phrases";

const TeamIntroduce: React.FC = () => {
  return (
    <TeamIntroduceWrapper image={illusts.diamond}>
      <IntroduceText>
        <MDisplay>{TITLE.TEAM_CULTURE}</MDisplay>
      </IntroduceText>
    </TeamIntroduceWrapper>
  );
};

const TeamIntroduceWrapper = styled.div<{ image: string }>`
  width: 100%;
  height: calc(100vw * 56 / 144);
  min-width: 144rem;
  min-height: 56rem;
  margin-bottom: 16rem;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: 100%;
  color: ${({ theme: { color } }) => color.greyScale.black};
  white-space: pre-line;
  text-align: start;
`;

const IntroduceText = styled.div`
  width: 106.2rem;
  padding: 16rem 18.9rem 3.2rem 18.9rem;
  margin: 0 auto;
`;

export default TeamIntroduce;
