import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { HomeGlobalNavigationBar, Footer } from "components/";
import {
  Masthead,
  EducationFeatures,
  DetailCurriculum,
  InterviewSliderWrapper,
  CourseSchedule,
  FAQ,
} from "pageComponents/masters";

const MatsersPage: React.FC = () => {
  return (
    <GlobalTheme>
      <main>
        <HomeGlobalNavigationBar />
        <Masthead />
        <EducationFeatures />
        <DetailCurriculum />
        <InterviewSliderWrapper />
        <CourseSchedule />
        <FAQ />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default MatsersPage;
