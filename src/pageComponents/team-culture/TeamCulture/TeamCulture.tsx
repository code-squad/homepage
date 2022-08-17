import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { TeamCultureType } from "@type/TeamCulture";
// Typography
import { HLBold, MBold, MBody } from "typography";
// Components
import { TitleSet } from "components/";
// Assets
import features from "assets/img/illusts/feature";
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
      <TeamCultureContentWrapper>
        {cultures.map(({ title, image, cultureFeatures }) => (
          <TeamCultureContent key={title}>
            <CultureImg src={features[image]} alt={`team-culture-icon-${title}`} />
            <TitleWrapper>
              <HLBold>{title}</HLBold>
            </TitleWrapper>
            {cultureFeatures.map(({ subtitle, description }) => (
              <TeamCultureContentList key={subtitle}>
                <TeamCultureContentListItem key={subtitle}>
                  <MBold style={{ marginBottom: "0.8rem", color: color.blackAndWhite.black }}>
                    {subtitle}
                  </MBold>
                  <MBody style={{ color: color.greyScale.grey1 }}>{description}</MBody>
                </TeamCultureContentListItem>
              </TeamCultureContentList>
            ))}
          </TeamCultureContent>
        ))}
      </TeamCultureContentWrapper>
    </TeamCultureWrapper>
  );
};

const TeamCultureWrapper = styled.div`
  width: 106.2rem;
  padding: 8rem 18.9rem 18rem 18.9rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  & > *:not(:last-child) {
    margin-bottom: 8rem;
  }
`;

const TeamCultureContentWrapper = styled.div`
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-right: 8rem;
  }
`;

const TeamCultureContent = styled.div`
  width: 30.2rem;
  display: flex;
  flex-direction: column;
`;

const CultureImg = styled.img`
  width: 16rem;
  height: 16rem;
`;

const TitleWrapper = styled.div`
  color: ${({ theme: { color } }) => color.primary.green2};
  margin: 2.4rem 0 0.8rem 0;
`;

const TeamCultureContentList = styled.ul`
  width: 84.4rem;
  margin-top: 2.4rem;
`;

const TeamCultureContentListItem = styled.li`
  width: 30rem;
  display: flex;
  flex-direction: column;
`;

const TeamCultureQuery = graphql`
  query TeamCultureQuery {
    mdx(frontmatter: { templateKey: { eq: "team_cultures" } }) {
      frontmatter {
        cultures {
          title
          image
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
