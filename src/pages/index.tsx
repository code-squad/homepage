import React from "react";
// API-Calls
import { graphql } from "gatsby";
import GlobalTheme from "../lib/context/GlobalTheme";
import { XLBody, LBody, MBody, SBody, XSBody, LDisplay, MDisplay, SDisplay } from "typography/";
import { CultureType } from "../@type/Culture";

const IndexPage = ({ data }: any) => {
  const { culture } = data;
  const cultures: CultureType[] = culture.nodes.map(({ frontmatter }: any) => frontmatter);

  return (
    <GlobalTheme>
      <main>
        <title>Home Page</title>
        <XLBody>고품질 교육 전담팀, 코드스쿼드</XLBody>
        <LBody>고품질 교육 전담팀, 코드스쿼드</LBody>
        <MBody>고품질 교육 전담팀, 코드스쿼드</MBody>
        <SBody>고품질 교육 전담팀, 코드스쿼드</SBody>
        <XSBody>고품질 교육 전담팀, 코드스쿼드</XSBody>
        <LDisplay>고품질 교육 전담팀, 코드스쿼드</LDisplay>
        <MDisplay>고품질 교육 전담팀, 코드스쿼드</MDisplay>
        <SDisplay>고품질 교육 전담팀, 코드스쿼드</SDisplay>
      </main>
    </GlobalTheme>
  );
};

export const query = graphql`
  query {
    culture: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_culture" } } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          content
        }
      }
    }
    master: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_master" } } }
    ) {
      nodes {
        frontmatter {
          field
          name
          description
          introduce
          careers
        }
      }
    }
  }
`;

export default IndexPage;
