import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { HomeGlobalNavigationBar, Footer } from "components/";
import { Masthead, Feature, StudyFeature, Course } from "pageComponents/code-together";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const CodeTogetherPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.CODE_TOGETHER}
        description={SEO_DESCRIPTION.CODE_TOGETHER}
        url={INTERNAL.CODE_TOGETHER}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <Feature />
        <StudyFeature />
        <Course />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default CodeTogetherPage;
