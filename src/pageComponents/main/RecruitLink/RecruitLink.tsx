import React from "react";
import styled from "styled-components";
// Components
import { LinkButton } from "components";
// Assets
import { LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const RecruitLink: React.FC = () => {
  return (
    <RecruiteLinkWrapper>
      <LinkButton
        to={INTERNAL.RECRUIT}
        title={LINK.CONFIRM_RECRUIT}
        description={LINK_DESCRIPTION.CONFIRM_RECRUIT}
      />
    </RecruiteLinkWrapper>
  );
};

const RecruiteLinkWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  justify-content: center;
  padding: 0 18.9rem;
  padding-bottom: 20rem;
  margin: 0 auto;
`;

export default RecruitLink;
