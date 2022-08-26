import React from "react";
import styled from "styled-components";
// Components
import { LinkButton } from "components";
// Assets
import { LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const RecruitLink: React.FC = () => {
  return (
    <RecruitLinkWrapper>
      <LinkButton
        to={INTERNAL.RECRUIT}
        title={LINK.CONFIRM_RECRUIT}
        description={LINK_DESCRIPTION.CONFIRM_RECRUIT}
      />
    </RecruitLinkWrapper>
  );
};

const RecruitLinkWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 12rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 18rem;
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 18rem;
    margin: 0 auto;
  }
`;

export default RecruitLink;
