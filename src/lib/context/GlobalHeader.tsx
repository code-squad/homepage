import React from "react";
import { Helmet } from "react-helmet";
// Assets
import seo from "assets/img/seo";

const GlobalHeader: React.FC<{ title: string; description: string; url: string }> = ({
  title,
  description,
  url,
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="viewport" content="width=1440" />
    <meta property="og:type" content="website" />
    <meta name="og:image" content={seo["codesquad"]} />
    <meta name="og:url" content={`https://codesquad.kr${url}`} />
    <meta name="title" content={title} />
    <meta name="description" content={description} />
    <meta name="og:title" content={title} />
    <meta name="og:description" content={description} />
  </Helmet>
);

export default GlobalHeader;
