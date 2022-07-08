import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { FAQ } from "pageComponents/faq";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const FAQPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader title={SEO_TITLE.FAQ} description={SEO_DESCRIPTION.FAQ} url={INTERNAL.FAQ} />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <FAQ />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default FAQPage;
