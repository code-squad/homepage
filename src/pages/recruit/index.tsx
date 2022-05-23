import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, TeamGlobalNavigationBar } from "components";
import { JobPosition } from "pageComponents/recruit";

const RecruitPage: React.FC = () => {
  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden" }}>
        <TeamGlobalNavigationBar />
        <JobPosition />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RecruitPage;
