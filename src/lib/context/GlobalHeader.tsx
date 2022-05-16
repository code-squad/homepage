import React from "react";
import { Helmet } from "react-helmet";

const GlobalHeader: React.FC<{ title?: string }> = ({ title }) => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <title>{title}</title>
  </Helmet>
);

export default GlobalHeader;
