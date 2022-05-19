import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { Interview } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const InterviewSliderWrapper: React.FC = ({}) => {
  const { interviewList } = strainMdxInfo(useStaticQuery(InterviewListQuery));

  return (
    <div style={{ marginTop: "20rem" }}>
      <Interview
        {...{
          title: TITLE.GRADUATE_INTERVIEW,
          subtitle: SUBTITLE.MASTERS_COURSE_2021,
          interviews: interviewList,
        }}
      />
    </div>
  );
};

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
