import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RegistrationType } from "@type/Registration";
// Assets
import { LinkType2Button } from "components/LinkType2Button";
// Libs
import { strainMdxInfo } from "lib/utils";

const Registration: React.FC = () => {
  const data = useStaticQuery(JavascriptRegistrationQuery);
  const { registrations }: { registrations: RegistrationType[] } = strainMdxInfo(data);

  return (
    <RegistrationWrapper>
      {registrations.map(({ title, description, caption, path }) => (
        <LinkType2Button key={title} {...{ title, description, caption }} to={path} />
      ))}
    </RegistrationWrapper>
  );
};

const RegistrationWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-top: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

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

export default Registration;
