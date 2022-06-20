import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import theme from "../../styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { RefundPolicy } from "pageComponents/refund";

const RefundPage: React.FC = () => {
  const { color } = theme;
  return (
    <GlobalTheme>
      <main style={{ overflowX: "hidden", backgroundColor: color.greyScale.offWhite }}>
        <HomeGlobalNavigationBar />
        <RefundPolicy />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RefundPage;
