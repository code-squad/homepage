import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RegistrationType } from "@type/Registration";
// Components
import { Registration } from "components";
// Libs
import { strainMdxInfo } from "lib/utils";

const MastersRegistration: React.FC = () => {
  const data = useStaticQuery(MastersRegistrationQuery);
  const { registrations }: { registrations: RegistrationType[] } = strainMdxInfo(data);

  return <Registration {...{ registrations }} />;
};

const MastersRegistrationQuery = graphql`
  query MastersRegistration {
    mdx(frontmatter: { templateKey: { eq: "masters_registrations" } }) {
      frontmatter {
        registrations {
          title
          description
          caption
          path
        }
      }
    }
  }
`;

export default MastersRegistration;
