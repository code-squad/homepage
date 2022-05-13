import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { LBody, SDisplay } from "typography";
// Components
import { TabNavigationBar } from "components";
import { Curriculum } from "./Curriculum";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const frontMatterReduce = (data: any) => {
  const { allMdx } = data;
  const { edges } = allMdx;
  return edges.map((v: any) => v.node.frontmatter);
};

const DetailCurriculum: React.FC = ({}) => {
  const data = useStaticQuery(CurriculumQuery);
  const curriculumInfo = frontMatterReduce(data);
  const titles = curriculumInfo.map((v: any) => v.tabName);

  const [curriculumIndex, setCurriculumIndex] = React.useState(0);

  return (
    <DetailCurriculumWrapper>
      <CurriculumTitleWrapper>
        <LBody bold>{SUBTITLE.MASTERS_COURSE}</LBody>
        <CurriculumHeadTitle>
          <SDisplay>{TITLE.DETAIL_CURRICULUM}</SDisplay>
        </CurriculumHeadTitle>
        <TabNavigationBar {...{ titles }} onIndexChanged={setCurriculumIndex} />
      </CurriculumTitleWrapper>
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
const CurriculumTitleWrapper = styled.div`
  width: 107rem;
  display: flex;
  flex-direction: column;
`;

const CurriculumHeadTitle = styled.div`
  margin-top: 0.8rem;
  margin-bottom: 5.2rem;
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
