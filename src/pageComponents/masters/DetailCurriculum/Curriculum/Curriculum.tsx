import React from "react";
import styled from "styled-components";
// Type
import { CurriculumType } from "@type/Curriculum";
// Typography
import { Typography } from "typography";
// Components
import { MasterInfo } from "./MasterInfo";
// Libs;
import { useResponsive } from "lib/hooks";

const Curriculum: React.FC<{ curriculumInfo: CurriculumType }> = ({ curriculumInfo }) => {
  const { isMobile } = useResponsive();
  const { curriculum, masterInfoList } = curriculumInfo;

  return (
    <CurriculumWrapper>
      <CurriculumList>
        {curriculum.map(({ subject, subjectList }) => (
          <li key={subject}>
            <CurriculumTitle>
              <Typography type={isMobile ? "SHLBold" : "HLBold"}>{subject}</Typography>
            </CurriculumTitle>
            <SubjectItemList>
              {subjectList.map(({ name, detail }) => (
                <SubjectItem key={detail}>
                  <SubjectTitle>
                    <Typography type="SHLBold">{name}</Typography>
                  </SubjectTitle>
                  <SubjectDetail>
                    <Typography type="MBody">{detail}</Typography>
                  </SubjectDetail>
                </SubjectItem>
              ))}
            </SubjectItemList>
            <DivideLine />
          </li>
        ))}
        {masterInfoList.map((masterInfo) => (
          <MasterInfo key={masterInfo.name} {...{ masterInfo }} />
        ))}
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
const CurriculumTitle = styled.h4`
  color: ${({ theme: { color } }) => color.primary.green2};
`;
const SubjectItemList = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 3rem;
    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 3rem;
    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
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
    margin-top: 3rem;
  }
`;
const SubjectTitle = styled.h6`
  width: 19rem;
  color: ${({ theme: { color } }) => color.black};
`;
const SubjectDetail = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 3.2rem 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 5.6rem 0;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 5.6rem 0;
  }
`;

export default Curriculum;
