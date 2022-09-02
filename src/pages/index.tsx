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
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";
// Libs
import { strainMdxInfo } from "lib/utils";

const MainPage: React.FC = () => {
  const { title } = strainMdxInfo(useStaticQuery(BannerQuery));

  const [bannerStatus, setBannerStatus] = React.useState(false);

  React.useEffect(() => {
    const localStorage = window.localStorage;
    const maxAge = localStorage?.getItem("maxAge");
    const maxAgeExpired = maxAge !== null && Number(maxAge) < Date.now();

    if (title && maxAgeExpired) {
      localStorage?.removeItem("maxAge");
      setBannerStatus(true);
    }
  }, []);

  return (
    <GlobalTheme>
      <GlobalHeader title={SEO_TITLE.MAIN} description={SEO_DESCRIPTION.MAIN} url={INTERNAL.MAIN} />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar {...{ bannerStatus }} />
        {bannerStatus && <Banner {...{ bannerStatus, setBannerStatus }} />}
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
      }
    }
  }
`;

export default MainPage;
