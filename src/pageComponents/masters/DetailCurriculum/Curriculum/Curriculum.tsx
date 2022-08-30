import React from "react";
import styled from "styled-components";
// Type
import { CurriculumType } from "@type/Curriculum";
// Typography
import { HLBold, SHLBold, MBody } from "typography";
// Components
import { MasterInfo } from "./MasterInfo";

const Curriculum: React.FC<{ curriculumInfo: CurriculumType }> = ({ curriculumInfo }) => {
  const { curriculum, masterInfo } = curriculumInfo;

  return (
    <CurriculumWrapper>
      <CurriculumList>
        {curriculum.map(({ subject, subjectList }) => (
          <li key={subject}>
            <CurriculumTitle>
              <HLBold>{subject}</HLBold>
            </CurriculumTitle>
            <ul>
              {subjectList.map(({ name, detail }) => (
                <SubjectItem key={detail}>
                  <SubjectTitle>
                    <SHLBold>{name}</SHLBold>
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
        <MasterInfo {...{ masterInfo }} />
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
  color: ${({ theme: { color } }) => color.black};
`;
const SubjectDetail = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  margin: 5.6rem 0;
  width: 100%;
`;

export default Curriculum;
