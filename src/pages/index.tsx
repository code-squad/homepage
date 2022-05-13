import React from "react";
import { graphql } from "gatsby";
// Type
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
  const articles: ArticleType[] = getDataFromMdx(data.article);

  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Welcome />
        <CourseList />
        <Feature />
        <Culture />
        <RecruitLink />
        <Master />
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
