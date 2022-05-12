import React from "react";
import styled from "styled-components";
// Typography
import { XLBody, LBody, MBody, SBody } from "typography";
// Components
// Assets
import images from "assets/images";
import { SUBTITLE, TITLE } from "assets/static/phrases";
import { Avatar } from "components";
import blankProfile from "assets/images/blank-profile.svg";

type mastersInfo = {
  avatar: keyof typeof images;
  name: string;
  position: string;
  introduce: string;
  nutshell: string;
};
type subjectInfoType = {
  detail: string;
  name: string;
};
type subjectType = {
  index: number;
  subject: string;
  subjectList: subjectInfoType[];
};
type curriculumType = {
  tagName: string;
  curriculum: subjectType[];
  masterInfo: mastersInfo;
};
interface ICurriculumProps {
  curriculumInfo: curriculumType;
}

const Curriculum: React.FC<ICurriculumProps> = ({ curriculumInfo }) => {
  const { curriculum, masterInfo } = curriculumInfo;

  return (
    <CurriculumWrapper>
      <CurriculumList>
        {curriculum.map(({ subject, subjectList }) => (
          <li>
            <CurriculumTitle>
              <XLBody bold>{subject}</XLBody>
            </CurriculumTitle>
            <ul>
              {subjectList.map(({ name, detail }) => (
                <SubjectItem>
                  <SubjectTitle>
                    <LBody bold>{name}</LBody>
                  </SubjectTitle>
                  <SubjectDetail>
                    <MBody>{detail}</MBody>
                  </SubjectDetail>
                </SubjectItem>
              ))}
            </ul>
            <DivideLine />
          </li>
        ))}
        <MasterInfoWrapper>
          <AvatarWrapper>
            <Avatar width="12rem" height="12rem" src={blankProfile} />
          </AvatarWrapper>
          <InfoWrapper>
            <NameWrapper>
              <XLBody bold>{masterInfo.name}</XLBody>
              <PositionWrapper>
                <SBody>{masterInfo.position}</SBody>
              </PositionWrapper>
            </NameWrapper>
            <NutshellWrapper>
              <LBody bold>{masterInfo.nutshell}</LBody>
            </NutshellWrapper>
            <IntroduceWrapper>
              <MBody>{masterInfo.introduce}</MBody>
            </IntroduceWrapper>
          </InfoWrapper>
        </MasterInfoWrapper>
      </CurriculumList>
    </CurriculumWrapper>
  );
};

const CurriculumWrapper = styled.div`
  display: flex;
  width: 107rem;
  padding: 8rem 4rem;
`;

const CurriculumList = styled.ul`
  width: 98.2rem;
`;
const CurriculumTitle = styled.h4`
  color: ${({ theme: { color } }) => color.primary.green2};
`;
const SubjectItem = styled.li`
  display: flex;
  margin-top: 3rem;
`;
const SubjectTitle = styled.h6`
  width: 19rem;
`;
const SubjectDetail = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.black20};
  margin: 5.6rem 0;
  width: 100%;
`;

const MasterInfoWrapper = styled.li`
  display: flex;
`;
const AvatarWrapper = styled.div`
  width: 12rem;
  height: 12rem;
`;
const InfoWrapper = styled.div`
  margin-left: 4rem;
`;

const NameWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;
const PositionWrapper = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  padding-left: 0.8rem;
`;
const NutshellWrapper = styled.div`
  margin-top: 1.6rem;
`;
const IntroduceWrapper = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

export default Curriculum;
