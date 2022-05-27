import React from "react";
import styled from "styled-components";
// Type
import { CodeTogetherCurriculumType } from "@type/CodeTogetherCurriculum";
// Typography
import { LBody, MBody } from "typography";
// Components
import { MasterInfo } from "./MasterInfo";

const Curriculum: React.FC<{ curriculumInfo: CodeTogetherCurriculumType }> = ({
  curriculumInfo,
}) => {
  const { curriculum, masterInfo } = curriculumInfo;

  return (
    <CurriculumWrapper>
      <CurriculumList>
        {curriculum.map(({ subjectList }, index) => (
          <li key={index}>
            <SubjectList>
              {subjectList.map(({ name, details }) => (
                <SubjectItem key={name}>
                  <SubjectTitle>
                    <LBody bold>{name}</LBody>
                  </SubjectTitle>
                  <SubjectDetailList>
                    {details.map((detail) => (
                      <li>
                        <MBody as="span">{detail}</MBody>
                      </li>
                    ))}
                  </SubjectDetailList>
                </SubjectItem>
              ))}
            </SubjectList>
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
`;
const SubjectDetailList = styled.ul`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  list-style: disc;
  list-style-position: inside;
`;
const SubjectDetail = styled.div``;
const DivideLine = styled.div`
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.black20};
  margin: 5.6rem 0;
  width: 100%;
`;

export default Curriculum;
