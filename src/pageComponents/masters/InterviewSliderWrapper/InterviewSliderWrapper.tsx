import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { Interview } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const InterviewSliderWrapper: React.FC = ({}) => {
  const { interviewList } = strainMdxInfo(useStaticQuery(InterviewListQuery));

  const { isMobile } = useResponsive();

  return (
    <div style={{ marginTop: isMobile ? "12rem" : "18rem" }}>
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
