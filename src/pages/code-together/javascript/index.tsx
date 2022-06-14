import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
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
