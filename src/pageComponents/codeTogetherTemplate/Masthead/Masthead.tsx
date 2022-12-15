import React from "react";
import { useTheme } from "styled-components";
import { type MastheadType } from "@type/Masthead";
// Components
import { CourseInfo } from "components";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Lib
import { useResponsive } from "lib/hooks";

const Masthead: React.FC<{ mastheadInfo: MastheadType }> = ({ mastheadInfo }) => {
  const { color } = useTheme();
  const { isMobile, isTablet } = useResponsive();

  const { title, description, targets, courseInfos } = mastheadInfo;

  let backgroundImage = headers.desktopPattern1;
  if (isMobile) backgroundImage = headers.mobilePattern1;
  if (isTablet) backgroundImage = headers.tabletPattern1;

  return (
    <CourseInfo
      {...{ title, description, targets, courseInfos, backgroundImage }}
      backgroundColor={color.primary.green4}
      process={TITLE.CODE_TOGETHER_COURSE}
    />
  );
};

export default Masthead;
