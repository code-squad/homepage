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
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-top: 8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

export default Registration;
