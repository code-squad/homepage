import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import {
  Welcome,
  CourseList,
  Feature,
  Culture,
  RecruitLink,
  Master,
  GraduateReview,
  Article,
  Banner,
  Place,
} from "pageComponents/main";
import { strainMdxInfo } from "lib/utils";

const MainPage: React.FC = () => {
  const { title } = strainMdxInfo(useStaticQuery(BannerQuery));

  const showPopup = Boolean(localStorage.getItem("showPopup"));

  const [bannerStatus, setBannerStatus] = React.useState(title && !showPopup);

  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar {...{ bannerStatus }} />
        <Banner {...{ bannerStatus, setBannerStatus }} />
        <Welcome />
        <CourseList />
        <Feature />
        <Culture />
        <RecruitLink />
        <Master />
        <GraduateReview />
        <Article />
        <Place />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export const BannerQuery = graphql`
  query BannerQuery {
    mdx(frontmatter: { templateKey: { eq: "main_banner" } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;

export default MainPage;
