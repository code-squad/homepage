import React from "react";
import { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Components
import { CourseInfo } from "components";
// Assets
import header from "assets/img/illusts/header";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { color } = useTheme();
  const { title, description, targets, courseInfos } = strainMdxInfo(useStaticQuery(MastheadQuery));

  return (
    <CourseInfo
      {...{ title, description, targets, courseInfos }}
      backgroundImage={header.pattern3}
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
