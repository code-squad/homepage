import React from "react";
import { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { CourseInfo } from "components";
// Assets
import headers from "assets/img/illusts/header";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { color } = useTheme();
  const { title, description, targets, courseInfos } = strainMdxInfo(
    useStaticQuery(JavaScriptMastheadQuery)
  );

  return (
    <CourseInfo
      {...{ title, description, targets, courseInfos }}
      backgroundImage={headers.desktopPattern1}
      backgroundColor={color.primary.green4}
    />
  );
};

const JavaScriptMastheadQuery = graphql`
  query JavaScriptMastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_javascript_masthead" } }) {
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
  }
`;

export default Masthead;
