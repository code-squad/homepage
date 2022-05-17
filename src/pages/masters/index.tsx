import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { HomeGlobalNavigationBar } from "components/";
import { Masthead } from "pageComponents/masters/Masthead";
import { EducationFeatures } from "pageComponents/masters/EducationFeatures";
import { DetailCurriculum } from "pageComponents/masters/DetailCurriculum";
import { InterviewSliderWrapper } from "pageComponents/masters/InterviewSliderWrapper";
import { CourseSchedule } from "pageComponents/masters/CourseSchedule";
import { FAQ } from "pageComponents/masters/FAQ";
import { Recruit } from "pageComponents/masters/Recruit";
import { Footer } from "components/Footer";

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
