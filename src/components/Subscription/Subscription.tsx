import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import { MBody, SDisplay } from "typography";
import { INTERNAL } from "assets/static/urls";
import { LINK, LINK_DESCRIPTION } from "assets/static/phrases";

export interface ISubscription {
  backgroundColor?: string;
}

const Subscription: React.FC<ISubscription> = ({ backgroundColor }) => {
  return (
    <SubscriptionWrapper {...{ backgroundColor }}>
      <MBody bold>{LINK_DESCRIPTION.RECEIVE_SUBSCRIPTION}</MBody>
      <SubscriptionLink to={INTERNAL.SUBSCRIPTION}>
        <SDisplay>{LINK.RECEIVE_SUBSCRIPTION}</SDisplay>
      </SubscriptionLink>
    </SubscriptionWrapper>
  );
};

const SubscriptionWrapper = styled.div<{ backgroundColor?: string }>`
  min-width: 144rem;
  height: 30.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor, theme: { color } }) =>
    backgroundColor || color.secondary.blue3};
`;

const SubscriptionLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { color } }) => color.greyScale.black};
  margin-top: 0.8rem;
`;

export default Subscription;
