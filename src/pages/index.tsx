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
import { getDocument, strainMdxInfo } from "lib/utils";

const MainPage: React.FC = () => {
  const { title } = strainMdxInfo(useStaticQuery(BannerQuery));
  const document = getDocument();
  const bannerCookie = Boolean(document && document.cookie.match("ignoreBanner"));

  const [bannerStatus, setBannerStatus] = React.useState(title && !bannerCookie);

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
