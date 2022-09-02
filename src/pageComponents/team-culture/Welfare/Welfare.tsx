import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { WelfareType } from "@type/Welfare";
// Components
import { ImageCard, TitleSet } from "components";
// Assets
import features from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Welfare: React.FC = ({}) => {
  const data = useStaticQuery(WelfareQuery);
  const { welfares }: { welfares: WelfareType[] } = strainMdxInfo(data);
  const { isMobile } = useResponsive();

  return (
    <WelfareWraper>
      <TitleSet subtitle={SUBTITLE.WELFARE} title={TITLE.WELFARE} />
      <WelfareListWrapper>
        <WelfareList>
          {welfares.map(({ title, content, img }) => (
            <WelfareItem key={title}>
              <ImageCard
                description={content}
                title={title}
                img={features[img]}
                vertical={isMobile}
              />
            </WelfareItem>
          ))}
        </WelfareList>
      </WelfareListWrapper>
    </WelfareWraper>
  );
};

const WelfareWraper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    margin-top: 8rem;
    margin-bottom: 8rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 16rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 16rem;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;

const WelfareListWrapper = styled.ul`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    flex-direction: column;
  }
`;

const WelfareList = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    display: flex;
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0 7.9rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    & > *:not(:nth-child(3n)) {
      margin-right: 7.8rem;
    }
  }
`;

const WelfareItem = styled.li`
  display: inline-flex;
  @media ${({ theme }) => theme.device.mobile} {
    margin-top: 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 8rem;
  }
`;

const WelfareQuery = graphql`
  query WelfareQuery {
    mdx(frontmatter: { templateKey: { eq: "team_welfares" } }) {
      frontmatter {
        welfares {
          title
          content
          img
        }
      }
    }
  }
`;

export default Welfare;
