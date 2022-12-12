import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RegistrationType } from "@type/Registration";
// Components
import { Registration } from "components";

const CodeTogetherRegistration: React.FC<{ registrations: RegistrationType[] }> = ({
  registrations,
}) => {
  return <Registration {...{ registrations }} />;
};

export default CodeTogetherRegistration;
