import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { Interview } from "components/Interview";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const TeamInterview: React.FC = () => {
  const data = useStaticQuery(TeamInterviewQuery);
  const { interviews }: { interviews: InterviewType[] } = strainMdxInfo(data);
  const { isMobile } = useResponsive();

  return (
    <Interview
      subtitle={SUBTITLE.TEAM_INTERIVIEW}
      title={TITLE.TEAM_INTERIVIEW}
      style={{ marginBottom: isMobile ? "12rem" : "18rem" }}
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
