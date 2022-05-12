import React from "react";
import { graphql, PageProps } from "gatsby";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Typography
import { XSBody } from "typography/";
// Components
// Assets

// Libs
import { HomeGlobalNavigationBar } from "components/";
import { Masthead } from "pageComponents/masters/Masthead";
import { EducationFeatures } from "pageComponents/masters/EducationFeatures";
import { DetailCurriculum } from "pageComponents/masters/DetailCurriculum";

const MatsersPage: React.FC<PageProps> = ({ data }) => {
  return (
    <GlobalTheme>
      <main>
        <HomeGlobalNavigationBar />
        <Masthead />
        <EducationFeatures />
        <DetailCurriculum />
      </main>
    </GlobalTheme>
  );
};

export default MatsersPage;
