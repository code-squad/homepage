import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { HomeGlobalNavigationBar, Footer } from "components/";
import { Masthead, Feature, StudyFeature, Course } from "pageComponents/code-together";

const CodeTogetherPage: React.FC = () => {
  const courseRef = React.useRef(null);

  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <Masthead {...{ courseRef }} />
        <Feature />
        <StudyFeature />
        <Course {...{ courseRef }} />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default CodeTogetherPage;
