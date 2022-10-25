import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Type
import { CodeTogetherCurriculumType } from "@type/CodeTogetherCurriculum";
// Typography
import { Typography } from "typography";
// Components
import { MasterInfo } from "./MasterInfo";
// Assets
import { DESCRIPTION } from "assets/static/phrases";

const Curriculum: React.FC<{ curriculumInfo: CodeTogetherCurriculumType }> = ({
  curriculumInfo,
}) => {
  const { subjectList, masterInfoList, tabName } = curriculumInfo;

  const descriptionLinkObj: { [key: string]: JSX.Element } = {
    JavaScript: (
      <Typography type="MBold">
        <LinkWrapper {...{ to: "/masters" }}>{DESCRIPTION.FRONT_CURRICULUM_LINK}</LinkWrapper>
        {DESCRIPTION.SUITABLE_READY_CLASS}
      </Typography>
    ),
    Java: (
      <Typography type="MBold">
        <LinkWrapper {...{ to: "/masters" }}>{DESCRIPTION.BACK_CURRICULUM_LINK}</LinkWrapper>
        {DESCRIPTION.OR}
        <LinkWrapper {...{ to: "/masters" }}>{DESCRIPTION.MOBILE_CURRICULUM_LINK}</LinkWrapper>
        {DESCRIPTION.SUITABLE_READY_CLASS}
      </Typography>
    ),
    Swift: (
      <Typography type="MBold">
        <LinkWrapper {...{ to: "/masters" }}>{DESCRIPTION.IOS_CURRICULUM_LINK}</LinkWrapper>
        {DESCRIPTION.SUITABLE_READY_CLASS}
      </Typography>
    ),
  };
  return (
    <CurriculumWrapper>
      <CurriculumList>
        <TitleWrapper>{descriptionLinkObj[tabName]}</TitleWrapper>
        <DivideLine />
        <SubjectList>
          {subjectList.map(({ name, details }) => (
            <SubjectItem key={name}>
              <SubjectTitle>
                <Typography type="SHLBold">{name}</Typography>
              </SubjectTitle>
              <SubjectDetailList>
                {details.map((detail) => (
                  <li key={detail}>
                    <Typography type="MBody" as="span">
                      {detail}
                    </Typography>
                  </li>
                ))}
              </SubjectDetailList>
            </SubjectItem>
          ))}
        </SubjectList>
        <DivideLine />
        <MasterInfo {...{ masterInfo }} />
      </CurriculumList>
    </CurriculumWrapper>
  );
};

const CurriculumWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 3.2rem 2.4rem;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    padding: 8rem 8rem;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 107rem;
    padding: 8rem 4rem;
  }
`;

const CurriculumList = styled.ul`
  width: 98.2rem;
`;

const TitleWrapper = styled.div`
  display: block;
`;
const LinkWrapper = styled(Link)<{ medium?: boolean }>`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.primary.green2};
  &:hover {
    text-decoration: underline;
  }
`;

const SubjectList = styled.ul`
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
const SubjectItem = styled.li`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > * {
      margin-right: 2.4rem;
    }
  }
`;
const SubjectTitle = styled.h6`
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 19rem;
  }
`;
const SubjectDetailList = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
  @media ${({ theme }) => theme.device.mobile} {
    margin-left: 1rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-left: 1rem;
    margin-top: 0.8rem;
  }
`;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  width: 100%;
  margin: 5.6rem 0;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 3.2rem 0;
  }
`;

export default Curriculum;
