import React from "react";
import { Helmet } from "react-helmet";
// Assets
import seo from "assets/img/seo";

const GlobalHeader: React.FC<{ title: string; description: string; url: string }> = ({
  title,
  description,
  url,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo["codesquad"]} />
      <meta property="og:url" content={`https://codesquad.kr${url}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
    </Helmet>
  );
};

export default GlobalHeader;
