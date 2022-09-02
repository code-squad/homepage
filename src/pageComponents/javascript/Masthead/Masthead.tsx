import React from "react";
import { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { CourseInfo } from "components";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Masthead: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const { color } = useTheme();
  const { title, description, targets, courseInfos } = strainMdxInfo(
    useStaticQuery(JavaScriptMastheadQuery)
  );

  let backgroundImage = headers.desktopPattern1;
  if (isMobile) backgroundImage = headers.mobilePattern1;
  if (isTablet) backgroundImage = headers.tabletPattern1;

  return (
    <CourseInfo
      {...{ title, description, targets, courseInfos, backgroundImage }}
      backgroundColor={color.primary.green4}
      process={TITLE.CODE_TOGETHER_COURSE}
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
