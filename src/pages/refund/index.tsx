import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { RefundPolicy } from "pageComponents/refund";

const RefundPage: React.FC = () => {
  return (
    <GlobalTheme>
      <div style={{ overflowX: "hidden" }}>
        <HomeGlobalNavigationBar />
        <RefundPolicy />
        <Footer />
      </div>
    </GlobalTheme>
  );
};

export default RefundPage;
