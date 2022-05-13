import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { Interview } from "components/Interview";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const GraduateReview: React.FC = () => {
  const data = useStaticQuery(ReviewQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { interviews }: { interviews: InterviewType[] } = frontmatter;

  return (
    <Interview
      subtitle={SUBTITLE.GRADUATE_INTERVIEW}
      title={TITLE.GRADUATE_INTERVIEW}
      {...{ interviews }}
    />
  );
};

const ReviewQuery = graphql`
  query ReviewQuery {
    mdx(frontmatter: { templateKey: { eq: "main_reviews" } }) {
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

export default GraduateReview;
