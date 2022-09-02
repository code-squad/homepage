import React from "react";
// Components
import { BackgroundLink } from "components/";
// Assets
import { TITLE } from "assets/static/phrases";
// Lib
import { useResponsive } from "lib/hooks";

const RecruitLink: React.FC = () => {
  const { isMobile } = useResponsive();

  const { MOBILE_CODESQUAD_RECRUIT_NEWS, CODESQUAD_RECRUIT_NEWS } = TITLE;
  const recruitNewsStr = isMobile ? MOBILE_CODESQUAD_RECRUIT_NEWS : CODESQUAD_RECRUIT_NEWS;

  return (
    <div style={{ marginTop: "16rem" }}>
      <BackgroundLink title={recruitNewsStr} to="/recruit" />
    </div>
  );
};

export default RecruitLink;
