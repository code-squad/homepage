import React from "react";
import styled from "styled-components";
import { useStaticQuery } from "gatsby";
// Type
import { IBannerProps } from "./Banner.type";
// Query
import { BannerQuery } from "pages/index";
// Components
import { BannerPopup } from "components";
// Utils
import { strainMdxInfo } from "lib/utils";

const Banner: React.FC<IBannerProps> = ({ bannerStatus, setBannerStatus }) => {
  const { title, description } = strainMdxInfo(useStaticQuery(BannerQuery));

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

export default Banner;
