import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { Interview } from "components/Interview";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const TeamInterview: React.FC = () => {
  const data = useStaticQuery(TeamInterviewQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { interviews }: { interviews: InterviewType[] } = frontmatter;

  return (
    <Interview
      subtitle={SUBTITLE.TEAM_INTERIVIEW}
      title={TITLE.TEAM_INTERIVIEW}
      {...{ interviews }}
    />
  );
};

const TeamInterviewQuery = graphql`
  query TeamInterviewQuery {
    mdx(frontmatter: { templateKey: { eq: "team_interviews" } }) {
      frontmatter {
        interviews {
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

export default TeamInterview;
