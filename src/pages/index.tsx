import React from "react";
import { graphql } from "gatsby";
// Type
import { CultureType } from "@type/Culture";
import { FeatureType } from "@type/Feature";
import { MasterType } from "@type/Master";
import { ArticleType } from "@type/Article";
import { InterviewType } from "@type/Interview";
import { PlaceType } from "@type/Place";
// Theme
import GlobalTheme from "../lib/context/GlobalTheme";
import theme from "styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar, Recruit, Interview } from "components";
import {
  Introduce,
  CourseList,
  Feature,
  Culture,
  RecruitLink,
  Master,
  Article,
  Place,
} from "pageComponents/main";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { getDataFromMdx } from "lib/utils";

const MainPage = ({ data }: any) => {
  const cultures: CultureType[] = getDataFromMdx(data.culture);
  const [feature]: FeatureType[] = getDataFromMdx(data.feature);
  const masters: MasterType[] = getDataFromMdx(data.master);
  const articles: ArticleType[] = getDataFromMdx(data.article);
  const interviews: InterviewType[] = getDataFromMdx(data.interview);

  const places: any = getDataFromMdx(data.places)[0].places;

  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Introduce />
        <CourseList />
        <Feature {...{ feature }} />
        <Culture {...{ cultures }} />
        <RecruitLink />
        <Master {...{ masters }} />
        <Interview
          subtitle={SUBTITLE.GRADUATE_INTERVIEW}
          title={TITLE.GRADUATE_INTERVIEW}
          {...{ interviews }}
        />
        <Article {...{ articles }} />
        <Place {...{ places }} />
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
    interview: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "main_interview" } } }
    ) {
      nodes {
        frontmatter {
          writerPhoto
          nutshell
          content
          writer
          writerInfo
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
    places: allMdx(
      sort: { order: ASC, fields: [frontmatter___index] }
      filter: { frontmatter: { templateKey: { eq: "masters_places" } } }
    ) {
      nodes {
        frontmatter {
          places {
            image
          }
        }
      }
    }
  }
`;

export default MainPage;
