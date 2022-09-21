import React from "react";
import { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { CourseInfo } from "components";
// Assets
import headers from "assets/img/illusts/header";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Masthead: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const { color } = useTheme();
  const { title, description, targets, courseInfos } = strainMdxInfo(
    useStaticQuery(PreCourseMastheadQuery)
  );

  let backgroundImage = headers.desktopPattern1;
  if (isMobile) backgroundImage = headers.mobilePattern1;
  if (isTablet) backgroundImage = headers.tabletPattern1;

  return (
    <CourseInfo
      {...{ title, description, targets, courseInfos, backgroundImage }}
      backgroundColor={color.primary.green4}
    />
  );
};

const PreCourseMastheadQuery = graphql`
  query PreCourseMastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "preCourse_masthead" } }) {
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
