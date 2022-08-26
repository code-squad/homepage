import React from "react";
import styled from "styled-components";
// Assets
import icons from "assets/img/icons";
// Components
import { Avatar } from "components";
import { LBody, MBody, SBody, SBold } from "typography";

interface IInterviewBox {
  writerPhoto: string;
  nutshell: string;
  content: string;
  writer: string;
  writerInfo: string;
}

const InterviewBox: React.FC<IInterviewBox> = ({
  writerPhoto,
  nutshell,
  content,
  writer,
  writerInfo,
}) => {
  return (
    <InterviewBoxWrapper>
      <Avatar src={writerPhoto} />
      <Nutshell>
        <LBody>{nutshell}</LBody>
      </Nutshell>
      <Content>
        <MBody>{content}</MBody>
      </Content>
      <WriterWrapper>
        <WriterName>
          <SBold>{writer}</SBold>
        </WriterName>
        <WriterInfo>
          <SBody>{writerInfo}</SBody>
        </WriterInfo>
      </WriterWrapper>
    </InterviewBoxWrapper>
  );
};

const InterviewBoxWrapper = styled.div`
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 26.4rem;
    padding: 3.2rem 4.8rem 3.2rem 4.8rem;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4.8rem 4.8rem 7rem 4.8rem;
    min-width: 42.3rem;
    width: 42.3rem;
    border-radius: 1.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 4.8rem 4.8rem 7rem 4.8rem;
    min-width: 42.3rem;
    width: 42.3rem;
    border-radius: 1.6rem;
  }
`;

const Nutshell = styled.div`
  margin: 3.2rem 0 0 3.6rem;
  position: relative;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  &:before {
    content: "";
    position: absolute;
    width: 2.4rem;
    height: 2.4rem;
    background-image: url(${icons.quotation});
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    left: -3.6rem;
    top: 0;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 23rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 38.9rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 38.9rem;
  }
`;

const Content = styled.div`
  margin-top: 1.6rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const WriterWrapper = styled.div`
  margin-top: 2.4rem;
`;
const WriterName = styled.span`
  display: inline-block;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  margin-right: 0.8rem;
`;
const WriterInfo = styled.span`
  display: inline-block;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

export default InterviewBox;
