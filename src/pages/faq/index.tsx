import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { FAQ } from "pageComponents/faq";

const FAQPage: React.FC = () => {
  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <FAQ />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default FAQPage;
