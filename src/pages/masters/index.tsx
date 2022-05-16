import React from "react";
import { graphql, PageProps } from "gatsby";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Typography
import { XSBody } from "typography/";
// Components
import { Interview } from "components/Interview";
// Assets

// Libs
import { HomeGlobalNavigationBar } from "components/";
import { Masthead } from "pageComponents/masters/Masthead";
import { EducationFeatures } from "pageComponents/masters/EducationFeatures";
import { DetailCurriculum } from "pageComponents/masters/DetailCurriculum";
import { InterviewSliderWrapper } from "pageComponents/masters/InterviewSliderWrapper";
import { CourseSchedule } from "pageComponents/masters/CourseSchedule";

const MatsersPage: React.FC<PageProps> = ({ data }) => {
  return (
    <GlobalTheme>
      <main>
        <HomeGlobalNavigationBar />
        <Masthead />
        <EducationFeatures />
        <DetailCurriculum />
        <InterviewSliderWrapper />
        <CourseSchedule />
      </main>
    </GlobalTheme>
  );
};

export default MatsersPage;
