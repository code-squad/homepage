import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { TeamCultureType } from "@type/TeamCulture";
// Typography
import { Typography } from "typography";
// Components
import { TitleSet } from "components/";
// Assets
import features from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const TeamCulture: React.FC = () => {
  const { isMobile } = useResponsive();
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
            <CultureTitleWrapper>
              <Typography type={isMobile ? "SHLBold" : "HLBold"}>{title}</Typography>
            </CultureTitleWrapper>
            {cultureFeatures.map(({ subtitle, description }) => (
              <TeamCultureContentList key={subtitle}>
                <TeamCultureContentListItem key={subtitle}>
                  <Typography type="MBold" style={{ marginBottom: "0.8rem", color: color.black }}>
                    {subtitle}
                  </Typography>
                  <Typography type="MBody" style={{ color: color.greyScale.grey1 }}>
                    {description}
                  </Typography>
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
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    padding: 8rem 2.4rem 12rem 2.4rem;
    box-sizing: border-box;
    & > *:not(:last-child) {
      margin-bottom: 4.8rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    padding: 8rem 8rem 18rem 8rem;
    box-sizing: border-box;
    & > *:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 8rem 18.9rem 18rem 18.9rem;
    margin: 0 auto;
    align-items: space-between;
    & > *:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

const TeamCultureContentWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 4.8rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
    & > *:not(:last-child) {
      margin-right: 7.9rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    white-space: pre-line;
    & > *:not(:last-child) {
      margin-right: 7.8rem;
    }
  }
`;

const TeamCultureContent = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 30.2rem;
  }
`;

const CultureImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 13rem;
    height: 13rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 8rem;
    height: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 16rem;
    height: 16rem;
  }
`;

const CultureTitleWrapper = styled.div`
  color: ${({ theme: { color } }) => color.primary.green2};
  margin: 2.4rem 0 0.8rem 0;
`;

const TeamCultureContentList = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 2.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 84.4rem;
    margin-top: 2.4rem;
  }
`;

const TeamCultureContentListItem = styled.li`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 30rem;
  }
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
