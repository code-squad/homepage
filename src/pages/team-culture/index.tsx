import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import {
  TeamIntroduce,
  TeamCulture,
  TeamInterview,
  Welfare,
  RecruitLink,
} from "pageComponents/team-culture";

const TeamCulturePage = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <TeamIntroduce />
        <TeamCulture />
        <TeamInterview />
        <Welfare />
        <RecruitLink />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default TeamCulturePage;
