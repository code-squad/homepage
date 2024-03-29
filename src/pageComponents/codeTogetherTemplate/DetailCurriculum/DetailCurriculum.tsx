import React from "react";
import styled from "styled-components";
// Type
import { CodeTogetherCurriculumType } from "@type/CodeTogetherCurriculum";
// Components
import { TitleSet, TabNavigationBar } from "components";
import { Curriculum } from "./Curriculum";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const DetailCurriculum: React.FC<{
  curriculumInfo: CodeTogetherCurriculumType[];
  courseTitle: string;
}> = ({ curriculumInfo, courseTitle }) => {
  const titles = curriculumInfo.map(({ tabName }) => tabName);

  const [curriculumIndex, setCurriculumIndex] = React.useState(0);

  return (
    <DetailCurriculumWrapper>
      <TitleSetWrapper>
        <TitleSet
          subtitle={`${courseTitle}${SUBTITLE.CURRICULUMS}`}
          title={TITLE.CODE_TOGETHER_DETAIL_CURRICULUM}
        />
      </TitleSetWrapper>
      <TabNavigationBarWrapper>
        <TabNavigationBar {...{ titles }} onIndexChanged={setCurriculumIndex} />
      </TabNavigationBarWrapper>
      <CurriculumWrapper>
        <Curriculum {...{ curriculumInfo: curriculumInfo[curriculumIndex] }} />
      </CurriculumWrapper>
    </DetailCurriculumWrapper>
  );
};

const DetailCurriculumWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 9.7rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 18rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 18rem;
    align-items: center;
    width: 100%;
    min-width: 144rem;
  }
`;

const TitleSetWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
  }
`;

const TabNavigationBarWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 2.4rem;
    padding-left: 2.4rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 5.2rem;
    padding-left: 8.2rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin: 0 auto;
    margin-top: 5.2rem;
    padding: 0 18.9rem;
    width: 106.2rem;
  }
`;

const CurriculumWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
  }
`;

export default DetailCurriculum;
