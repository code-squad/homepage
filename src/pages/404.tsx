import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { NotFound } from "pageComponents/notFound";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const NotFoundPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.NOT_FOUND}
        description={SEO_DESCRIPTION.NOT_FOUND}
        url={INTERNAL.NOT_FOUND}
      />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <NotFound />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default NotFoundPage;
