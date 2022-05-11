import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { MBody, SDisplay } from "typography";
import { INTERNAL } from "assets/static/urls";
import { LINK, LINK_DESCRIPTION } from "assets/static/phrases";

export interface IRecruit {
  backgroundColor?: string;
}

const Recruite: React.FC<IRecruit> = ({ backgroundColor }) => {
  return (
    <RecruitWrapper {...{ backgroundColor }}>
      <MBody bold>{LINK_DESCRIPTION.CONFIRM_RECRUIT}</MBody>
      <RecruitLink to={INTERNAL.RECRUIT}>
        <SDisplay>{LINK.CONFIRM_RECRUIT}</SDisplay>
      </RecruitLink>
    </RecruitWrapper>
  );
};

const RecruitWrapper = styled.div<{ backgroundColor?: string }>`
  min-width: 144rem;
  height: 30.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  background-color: ${({ backgroundColor, theme: { color } }) =>
    backgroundColor || color.secondary.blue3};
`;

const RecruitLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

export default Recruite;
