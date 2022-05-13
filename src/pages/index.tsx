import React from "react";
import { graphql } from "gatsby";
// Type
import { CultureType } from "@type/Culture";
import { FeatureType } from "@type/Feature";
import { MasterType } from "@type/Master";
import { ArticleType } from "@type/Article";
// Theme
import GlobalTheme from "../lib/context/GlobalTheme";
import theme from "styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar, Recruit } from "components";
import {
  Welcome,
  CourseList,
  Feature,
  Culture,
  RecruitLink,
  Master,
  GraduateReview,
  Article,
  Place,
} from "pageComponents/main";
// Libs
import { getDataFromMdx } from "lib/utils";

const MainPage = ({ data }: any) => {
  const cultures: CultureType[] = getDataFromMdx(data.culture);
  const [feature]: FeatureType[] = getDataFromMdx(data.feature);
  const masters: MasterType[] = getDataFromMdx(data.master);
  const articles: ArticleType[] = getDataFromMdx(data.article);

  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Welcome />
        <CourseList />
        <Feature {...{ feature }} />
        <Culture {...{ cultures }} />
        <RecruitLink />
        <Master {...{ masters }} />
        <GraduateReview />
        <Article {...{ articles }} />
        <Place />
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
          descriptions
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
    article: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_article" } } }
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
