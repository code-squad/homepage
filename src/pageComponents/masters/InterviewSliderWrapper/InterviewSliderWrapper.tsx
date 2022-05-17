import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
// Components
import { Interview } from "components";
// Assets
import images from "assets/images";
// Utils
import { strainMdxInfo } from "lib/utils";

const InterviewSliderWrapper: React.FC = ({}) => {
  const { interviewList } = strainMdxInfo(useStaticQuery(InterviewListQuery));

  return (
    <TopMargin>
      <Interview
        {...{ title: "졸업생 후기", subtitle: "2021 마스터즈 코스", interviews: interviewList }}
      />
    </TopMargin>
  );
};

const TopMargin = styled.div`
  margin-top: 20rem;
`;
const InterviewListQuery = graphql`
  query InterviewListQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_interview_list" } }) {
      frontmatter {
        interviewList {
          index
          writerPhoto
          nutshell
          content
          writer
          writerInfo
        }
      }
    }
  }
`;

export default InterviewSliderWrapper;
