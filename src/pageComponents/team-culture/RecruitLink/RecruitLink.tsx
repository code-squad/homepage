import React from "react";
// Components
import { BackgroundLink } from "components/";
// Assets
import { TITLE } from "assets/static/phrases";

const RecruitLink: React.FC = () => {
  return (
    <div style={{ marginTop: "16rem" }}>
      <BackgroundLink title={TITLE.CODESQUAD_RECRUIT_NEWS} to="/recruit" />
    </div>
  );
};

export default RecruitLink;
