import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { NotFound } from "pageComponents/notFound";

const NotFoundPage: React.FC = () => {
  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <NotFound />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default NotFoundPage;
