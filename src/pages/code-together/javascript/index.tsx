import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { HomeGlobalNavigationBar, Footer, FAQ } from "components/";
import {
  Masthead,
  Registration,
  DetailCurriculum,
  TimeTable,
  GraduateReview,
} from "pageComponents/javascript";

const JavascriptPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <Registration />
        <DetailCurriculum />
        <TimeTable />
        <GraduateReview />
        <FAQ course="javascript" />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default JavascriptPage;
