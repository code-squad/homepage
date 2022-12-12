import React from "react";
import { graphql, PageProps } from "gatsby";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { HomeGlobalNavigationBar, Footer, FAQ } from "components/";
import {
  Masthead,
  Registration,
  DetailCurriculum,
  TimeTable,
  GraduateReview,
} from "pageComponents/javascript";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

export default ({ data }: PageProps) => {
  console.log(data);

  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.JAVASCRIPT}
        description={SEO_DESCRIPTION.JAVASCRIPT}
        url={INTERNAL.JAVASCRIPT}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <Registration />
        <DetailCurriculum />
        <TimeTable />
        <GraduateReview />
        <FAQ course="javascript" />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export const codeTogetherQuery = graphql`
  query codeTogetherQuery(
    $deatilCurriculum: String
    $graduateReview: String
    $masthead: String
    $registration: String
    $timetable: String
  ) {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { glob: $deatilCurriculum } } }
    ) {
      edges {
        node {
          frontmatter {
            tabName
            index
            subjectList {
              details
              name
            }
            masterInfoList {
              picture
              introduce
              name
              nutshell
              position
            }
          }
        }
      }
    }
    graduateReveiw: mdx(frontmatter: { templateKey: { eq: $graduateReview } }) {
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
    masthead: mdx(frontmatter: { templateKey: { eq: $masthead } }) {
      frontmatter {
        title
        description
        targets
        courseInfos {
          title
          content
          img
        }
      }
    }
    registration: mdx(frontmatter: { templateKey: { eq: $registration } }) {
      frontmatter {
        registrations {
          title
          description
          caption
          path
        }
      }
    }
    timeTable: mdx(frontmatter: { templateKey: { eq: $timetable } }) {
      body
      frontmatter {
        planList {
          name
          description
          color
        }
        tags {
          name
          color
        }
      }
    }
  }
`;
