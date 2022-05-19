import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { TeamIntroduce, TeamInterview, Welfare } from "pageComponents/team-culture";

const TeamPage = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <TeamIntroduce />
        <TeamInterview />
        <Welfare />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default TeamPage;
