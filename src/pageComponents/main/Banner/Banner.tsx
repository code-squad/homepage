import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { IBannerProps } from "./Banner.type";
// Components
import { BannerPopup } from "components";
// Utils
import { strainMdxInfo } from "lib/utils";

const Banner: React.FC<IBannerProps> = ({ bannerStatus, setBannerStatus }) => {
  const { title, description } = strainMdxInfo(useStaticQuery(BannerContentQuery));

  const closeHandler = () => {
    const oneDaySec = 86400;

    if (document) document.cookie = `name=ignoreBanner; value=true; max-age=${oneDaySec}`;

    setBannerStatus(false);
  };

  return (
    <BannerWrapper {...{ bannerStatus }}>
      <BannerPopup {...{ title, description, onCloseButtonClicked: closeHandler }} />
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div<{ bannerStatus?: boolean }>`
  display: ${({ bannerStatus }) => (bannerStatus ? "block" : "none")};
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
      }
    }
  }
`;

export default Banner;
