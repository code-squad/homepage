import React from "react";
import { Helmet } from "react-helmet";

const GlobalHeader: React.FC<{ title?: string }> = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="viewport" content="width=1440" />
  </Helmet>
);

export default GlobalHeader;
