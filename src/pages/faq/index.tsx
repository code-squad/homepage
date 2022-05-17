import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import theme from "styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { FAQ } from "pageComponents/faq";
// Assets
import images from "assets/images";

const FAQPage = () => {
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
