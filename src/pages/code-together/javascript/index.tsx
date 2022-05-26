import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { HomeGlobalNavigationBar, Footer } from "components/";
import {
  Masthead,
  Registration,
  DetailCurriculum,
  TimeTable,
  GraduateReview,
} from "pageComponents/javascript";
import { FAQ } from "pageComponents/masters";

const JavascriptPage: React.FC = () => {
  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <Registration />
        <DetailCurriculum />
        <TimeTable />
        <GraduateReview />
        <FAQ />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default JavascriptPage;
