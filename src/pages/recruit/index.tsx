import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { JobPosition } from "pageComponents/recruit";

const RecruitPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <JobPosition />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RecruitPage;
