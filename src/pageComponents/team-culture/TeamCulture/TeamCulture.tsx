import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { TeamCultureType } from "@type/TeamCulture";
// Typography
import { LBody, MBody, XLBody } from "typography";
// Assets
import { TitleSet } from "components/";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const TeamCulture: React.FC = () => {
  const { color } = useTheme();

  const data = useStaticQuery(TeamCultureQuery);
  const { cultures }: { cultures: TeamCultureType[] } = strainMdxInfo(data);

  return (
    <TeamCultureWrapper>
      <TitleSet title={TITLE.CODESQUAD_TEAM_CULTURE} subtitle={SUBTITLE.CODESQUAD_TEAM_CULTURE} />
      <TeamCultureList>
        {cultures.map(({ title, cultureFeatures }) => (
          <TeamCultureListItem key={title}>
            <TeamCultureTitle>
              <XLBody bold>{title}</XLBody>
            </TeamCultureTitle>
            <TeamCultureContentList>
              {cultureFeatures.map(({ subtitle, description }) => (
                <TeamCultureContentListItem key={subtitle}>
                  <LBody bold>{subtitle}</LBody>
                  <MBody style={{ color: color.greyScale.grey2 }}>{description}</MBody>
                </TeamCultureContentListItem>
              ))}
            </TeamCultureContentList>
          </TeamCultureListItem>
        ))}
      </TeamCultureList>
    </TeamCultureWrapper>
  );
};

const TeamCultureWrapper = styled.div`
  width: 106.2rem;
  padding: 16rem 18.9rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  color: ${({ theme: { color } }) => color.greyScale.black};
  & > *:not(:last-child) {
    margin-bottom: 5.6rem;
  }
`;

const TeamCultureList = styled.ul`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    padding-bottom: 4rem;
    margin-bottom: 4rem;
    border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  }
`;

const TeamCultureListItem = styled.li`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const TeamCultureTitle = styled.div`
  width: 19.3rem;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

const TeamCultureContentList = styled.ul`
  width: 84.4rem;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 13.5rem;
  }
`;

const TeamCultureContentListItem = styled.li`
  width: 30rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
`;

const TeamCultureQuery = graphql`
  query TeamCultureQuery {
    mdx(frontmatter: { templateKey: { eq: "team_cultures" } }) {
      frontmatter {
        cultures {
          title
          cultureFeatures {
            subtitle
            description
          }
        }
      }
    }
  }
`;

export default TeamCulture;
