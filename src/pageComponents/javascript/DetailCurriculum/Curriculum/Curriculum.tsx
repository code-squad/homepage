import React from "react";
import styled from "styled-components";
// Type
import { CodeTogetherCurriculumType } from "@type/CodeTogetherCurriculum";
// Typography
import { SHLBold, MBody } from "typography";
// Components
import { MasterInfo } from "./MasterInfo";

const Curriculum: React.FC<{ curriculumInfo: CodeTogetherCurriculumType }> = ({
  curriculumInfo,
}) => {
  const { subjectList, masterInfo } = curriculumInfo;

  return (
    <CurriculumWrapper>
      <CurriculumList>
        <SubjectList>
          {subjectList.map(({ name, details }) => (
            <SubjectItem key={name}>
              <SubjectTitle>
                <SHLBold>{name}</SHLBold>
              </SubjectTitle>
              <SubjectDetailList>
                {details.map((detail) => (
                  <li key={detail}>
                    <MBody as="span">{detail}</MBody>
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
  width: 107rem;
  padding: 5rem 4rem 8rem 4rem;
`;

const CurriculumList = styled.ul`
  width: 98.2rem;
`;
const SubjectList = styled.ul`
  & > *:not(:first-child) {
    margin-top: 3rem;
  }
`;
const SubjectItem = styled.li`
  display: flex;
  & > * {
    margin-right: 2.4rem;
  }
`;
const SubjectTitle = styled.h6`
  width: 19rem;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;
const SubjectDetailList = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
`;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  margin: 5.6rem 0;
  width: 100%;
`;

export default Curriculum;
