import React from "react";
import { Helmet } from "react-helmet";

const GlobalHeader: React.FC<{ title?: string }> = ({ title }) => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <title>{title}</title>
  </Helmet>
);

export default GlobalHeader;
