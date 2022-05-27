import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CodeTogetherCurriculumType } from "@type/CodeTogetherCurriculum";
// Components
import { TitleSet, TabNavigationBar } from "components";
import { Curriculum } from "./Curriculum";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainAllMdxInfo } from "lib/utils";

const DetailCurriculum: React.FC = () => {
  const curriculumInfo: CodeTogetherCurriculumType[] = strainAllMdxInfo(
    useStaticQuery(JavascriptCurriculumQuery)
  );
  const titles = curriculumInfo.map(({ tabName }) => tabName);

  const [curriculumIndex, setCurriculumIndex] = React.useState(0);

  return (
    <DetailCurriculumWrapper>
      <TitleSet subtitle={SUBTITLE.MASTERS_COURSE} title={TITLE.DETAIL_CURRICULUM} />
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
  margin-top: 16rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
`;
const TabNavigationBarWrapper = styled.div`
  width: 106.2rem;
  margin-top: 5.2rem;
`;

const CurriculumWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 144rem;
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
`;

const JavascriptCurriculumQuery = graphql`
  query JavascriptCurriculumQuery {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { glob: "codeTogether_javascript_part*" } } }
    ) {
      edges {
        node {
          frontmatter {
            tabName
            index
            curriculum {
              subjectList {
                details
                name
              }
            }
            masterInfo {
              avatar
              introduce
              name
              nutshell
              position
            }
          }
        }
      }
    }
  }
`;

export default DetailCurriculum;
