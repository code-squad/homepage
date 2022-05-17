import React from "react";
// Theme
import GlobalTheme from "../lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import {
  Welcome,
  CourseList,
  Feature,
  Culture,
  RecruitLink,
  Master,
  GraduateReview,
  Article,
  Place,
} from "pageComponents/main";

const MainPage = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Welcome />
        <CourseList />
        <Feature />
        <Culture />
        <RecruitLink />
        <Master />
        <GraduateReview />
        <Article />
        <Place />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default MainPage;
