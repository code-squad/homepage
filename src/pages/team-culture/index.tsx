import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { TeamIntroduce, TeamCulture, TeamInterview, Welfare } from "pageComponents/team-culture";

const TeamCulturePage = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <TeamIntroduce />
        <TeamCulture />
        <TeamInterview />
        <Welfare />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default TeamCulturePage;
