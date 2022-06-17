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
  Banner,
  Place,
} from "pageComponents/main";
import GlobalHeader from "lib/context/GlobalHeader";

const MainPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Banner />
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
      </main>
    </GlobalTheme>
  );
};

export default MainPage;
