import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RegistrationType } from "@type/Registration";
// Components
import { Registration } from "components";
// Libs
import { strainMdxInfo } from "lib/utils";

const PreCourseRegistration: React.FC = () => {
  const data = useStaticQuery(PreCourseRegistrationQuery);
  const { registrations }: { registrations: RegistrationType[] } = strainMdxInfo(data);

  return <Registration {...{ registrations }} />;
};

const PreCourseRegistrationQuery = graphql`
  query PreCourseRegistrationQuery {
    mdx(frontmatter: { templateKey: { eq: "preCourse_registrations" } }) {
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

export default PreCourseRegistration;
