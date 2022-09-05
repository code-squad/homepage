import React from "react";
import styled from "styled-components";
// Type
import { RegistrationType } from "@type/Registration";
// Components
import { LinkButton } from "components";

const Registration: React.FC<{ registrations: RegistrationType[] }> = ({ registrations }) => {
  return (
    <RegistrationWrapper>
      {registrations.map(({ title, description, caption, path }) => (
        <LinkButton key={title} {...{ title, description, caption }} to={path} />
      ))}
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-top: 8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    justify-content: center;
    padding: 0 8rem;
    padding-top: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-top: 8rem;
    margin: 0 auto;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
`;

export default Registration;
