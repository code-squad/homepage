import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { HomeGlobalNavigationBar, Footer, FAQ } from "components/";
import { Masthead, Registration, DetailCurriculum, TimeTable } from "pageComponents/pre-course";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const PreCoursePage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.PRE_COURSE}
        description={SEO_DESCRIPTION.PRE_COURSE}
        url={INTERNAL.PRE_COURSE}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <Registration />
        <DetailCurriculum />
        <TimeTable />
        <FAQ course="pre-course" />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default PreCoursePage;
