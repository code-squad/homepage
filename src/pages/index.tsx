import React from "react";
import { graphql } from "gatsby";
// Type
import { CultureType } from "../@type/Culture";
import { FeatureType } from "../@type/Feature";
import { MasterType } from "@type/Master";
import { ArticleType } from "@type/Article";
// Theme
import GlobalTheme from "../lib/context/GlobalTheme";
import theme from "styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar, Recruit } from "components";
import {
  Introduce,
  Course,
  Feature,
  Culture,
  RecruitLink,
  Master,
  Article,
} from "pageComponents/main";
// Libs
import { getDataFromMdx } from "lib/utils";

const MainPage = ({ data }: any) => {
  const cultures: CultureType[] = getDataFromMdx(data.culture);
  const [feature]: FeatureType[] = getDataFromMdx(data.feature);
  const masters: MasterType[] = getDataFromMdx(data.master);
  const articles: ArticleType[] = getDataFromMdx(data.media);

  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Introduce />
        <Course />
        <Feature {...{ feature }} />
        <Culture {...{ cultures }} />
        <RecruitLink />
        <Master {...{ masters }} />
        <Article {...{ articles }} />
        <Recruit backgroundColor={theme.color.primary.green4} />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export const query = graphql`
  query {
    feature: allMdx(filter: { frontmatter: { templateKey: { eq: "main_feature" } } }) {
      nodes {
        frontmatter {
          title
          subtitle
          description
          image
        }
      }
    }
    culture: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_culture" } } }
    ) {
      nodes {
        frontmatter {
          title
          subtitle
          description
          image
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
    media: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_media" } } }
    ) {
      nodes {
        frontmatter {
          category
          title
          link
        }
      }
    }
  }
`;

export default MainPage;
