import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { FAQ } from "pageComponents/faq";

const FAQPage: React.FC = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <FAQ />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default FAQPage;
