import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { JobPosition } from "pageComponents/recruit";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const RecruitPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.RECRUIT}
        description={SEO_DESCRIPTION.RECRUIT}
        url={INTERNAL.RECRUIT}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <JobPosition />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RecruitPage;
