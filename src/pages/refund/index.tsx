import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { RefundPolicy } from "pageComponents/refund";

const RefundPage: React.FC = () => {
  return (
    <GlobalTheme>
      <GlobalHeader />
      <main style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <RefundPolicy />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RefundPage;
