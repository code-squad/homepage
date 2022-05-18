import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CurriculumType } from "@type/Curriculum";
// Components
import { SectionTitle, TabNavigationBar } from "components";
import { Curriculum } from "./Curriculum";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainAllMdxInfo } from "lib/utils";

const DetailCurriculum: React.FC = () => {
  const curriculumInfo: CurriculumType[] = strainAllMdxInfo(useStaticQuery(CurriculumQuery));
  const titles = curriculumInfo.map((curriculum) => curriculum.tabName);

  const [curriculumIndex, setCurriculumIndex] = React.useState(0);

  return (
    <DetailCurriculumWrapper>
      <SectionTitle subTitle={SUBTITLE.MASTERS_COURSE} title={TITLE.DETAIL_CURRICULUM} />
      <div style={{ width: "107rem" }}>
        <TabNavigationBar {...{ titles }} onIndexChanged={setCurriculumIndex} />
      </div>
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

const CurriculumWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-width: 144rem;
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
`;

const CurriculumQuery = graphql`
  query CurriculumQuery {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { glob: "masters_curriculum*" } } }
    ) {
      edges {
        node {
          frontmatter {
            tabName
            index
            curriculum {
              index
              subject
              subjectList {
                detail
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
