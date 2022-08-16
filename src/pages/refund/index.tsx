import React from "react";
// Theme
import GlobalTheme from "lib/context/GlobalTheme";
import GlobalHeader from "lib/context/GlobalHeader";
import theme from "../../styles/theme";
// Components
import { Footer, HomeGlobalNavigationBar } from "components";
import { RefundPolicy } from "pageComponents/refund";
// Assets
import { SEO_TITLE, SEO_DESCRIPTION } from "assets/static/seo";
import { INTERNAL } from "assets/static/urls";

const RefundPage: React.FC = () => {
  const { color } = theme;
  return (
    <GlobalTheme>
      <GlobalHeader
        title={SEO_TITLE.REFUND}
        description={SEO_DESCRIPTION.REFUND}
        url={INTERNAL.REFUND_POLICY}
      />
      <main style={{ overflowX: "hidden", backgroundColor: color.surface.offWhite1 }}>
        <HomeGlobalNavigationBar />
        <RefundPolicy />
        <Footer />
      </main>
    </GlobalTheme>
  );
};

export default RefundPage;
