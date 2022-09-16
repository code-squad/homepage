import React from "react";
import { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { SubCourseInfo } from "components";
// Assets
import header from "assets/img/illusts/header";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Masthead: React.FC = () => {
  const { isMobile, isTablet } = useResponsive();
  const { color } = useTheme();
  const { title, description, targets, courseInfos } = strainMdxInfo(useStaticQuery(MastheadQuery));

  let backgroundImage = header.desktopPattern1;
  if (isMobile) backgroundImage = header.mobilePattern1;
  if (isTablet) backgroundImage = header.tabletPattern1;

  return (
    <SubCourseInfo
      {...{ title, description, targets, courseInfos, backgroundImage }}
      backgroundColor={color.primary.green4}
    />
  );
};

const MastheadQuery = graphql`
  query MastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_masthead" } }) {
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
