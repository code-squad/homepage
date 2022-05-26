import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { Interview } from "components/Interview";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const GraduateReview: React.FC = () => {
  const data = useStaticQuery(JavascriptReviewQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { interviews }: { interviews: InterviewType[] } = frontmatter;

  return (
    <div style={{ marginTop: "16rem" }}>
      <Interview
        subtitle={SUBTITLE.JAVASCRIPT}
        title={TITLE.STUDENT_INTERVIEW}
        {...{ interviews }}
      />
    </div>
  );
};

const JavascriptReviewQuery = graphql`
  query JavascriptReviewQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_javascript_reviews" } }) {
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
