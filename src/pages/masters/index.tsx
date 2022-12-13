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
  PreCourseLinkButton,
  InterviewSliderWrapper,
  CourseSchedule,
} from "pageComponents/masters";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const MatsersPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.MASTERS}
        description={SEO_DESCRIPTION.MASTERS}
        url={INTERNAL.MASTERS}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead />
        {/* <MastersRegistration /> */}
        <EducationFeatures />
        <DetailCurriculum />
        <PreCourseLinkButton />
        <InterviewSliderWrapper />
        <CourseSchedule />
        <FAQ course="masters" />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default MatsersPage;
