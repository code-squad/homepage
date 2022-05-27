import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RegistrationType } from "@type/Registration";
// Components
import { Registration } from "components";
// Libs
import { strainMdxInfo } from "lib/utils";

const JavascriptRegistration: React.FC = () => {
  const data = useStaticQuery(JavascriptRegistrationQuery);
  const { registrations }: { registrations: RegistrationType[] } = strainMdxInfo(data);

  return <Registration {...{ registrations }} />;
};

const JavascriptRegistrationQuery = graphql`
  query JavascriptRegistrationQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_javascript_registrations" } }) {
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

export default JavascriptRegistration;
