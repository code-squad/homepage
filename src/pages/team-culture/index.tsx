import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import {
  TeamIntroduce,
  TeamCulture,
  TeamInterview,
  Welfare,
  RecruitLink,
} from "pageComponents/team-culture";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const TeamCulturePage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.TEAM_CULTURE}
        description={SEO_DESCRIPTION.TEAM_CULTURE}
        url={INTERNAL.TEAM_CULTURE}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <TeamIntroduce />
        <TeamCulture />
        <TeamInterview />
        <Welfare />
        <RecruitLink />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default TeamCulturePage;
