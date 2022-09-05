import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { IBannerProps } from "./Banner.type";
// Components
import { BannerPopup } from "components";
// Utils
import { strainMdxInfo } from "lib/utils";

const Banner: React.FC<IBannerProps> = ({ setBannerStatus }) => {
  const { title, description, to } = strainMdxInfo(useStaticQuery(BannerContentQuery));

  const closeHandler = () => {
    const oneDaySec = 86400000;
    const localStorage = typeof window !== "undefined" ? window.localStorage : null;

    localStorage?.setItem("maxAge", `${Date.now() + oneDaySec}`);

    setBannerStatus(false);
  };

  return (
    <BannerWrapper>
      <BannerPopup {...{ title, description, to, onCloseButtonClicked: closeHandler }} />
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const BannerContentQuery = graphql`
  query BannerContentQuery {
    mdx(frontmatter: { templateKey: { eq: "main_banner" } }) {
      frontmatter {
        title
        description
        to
      }
    }
  }
`;

export default Banner;
