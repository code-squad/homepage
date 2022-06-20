import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { HomeGlobalNavigationBar, Footer, FAQ } from "components/";
import {
  Masthead,
  MastersRegistration,
  EducationFeatures,
  DetailCurriculum,
  InterviewSliderWrapper,
  CourseSchedule,
} from "pageComponents/masters";

const MatsersPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        <MastersRegistration />
        <EducationFeatures />
        <DetailCurriculum />
        <InterviewSliderWrapper />
        <CourseSchedule />
        <FAQ course="masters" />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default MatsersPage;
