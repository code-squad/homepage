import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CultureType } from "@type/Culture";
// Typography
import { HLBold, MBold, MBody } from "typography";
// Components
import { TitleSet } from "components/";
// Assets
import features from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo, getSplittedPhrase } from "lib/utils";

const Culture: React.FC = () => {
  const { cultures }: { cultures: CultureType[] } = strainMdxInfo(useStaticQuery(CultureQuery));

  return (
    <CultureWrapper>
      <TitleSet subtitle={SUBTITLE.CULTURE} title={TITLE.CULTURE} />
      <ContentWrapper>
        {cultures.map(({ title, image, subtitle, description }) => (
          <CultureContent key={title}>
            <CultureImg src={features[image]} alt="culture-icon" />
            <TitleWrapper>
              <MBold>{subtitle}</MBold>
              <HLBold>{title}</HLBold>
            </TitleWrapper>
            <DescriptionList>
              {getSplittedPhrase(description).map((descriptionItem: string) => (
                <DescriptionItem key={descriptionItem}>
                  <MBody>{descriptionItem}</MBody>
                </DescriptionItem>
              ))}
            </DescriptionList>
          </CultureContent>
        ))}
      </ContentWrapper>
    </CultureWrapper>
  );
};

const CultureWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 8rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  & > *:not(:last-child) {
    margin-bottom: 5.6rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-right: 7.8rem;
  }
`;

const CultureContent = styled.div`
  width: 30.2rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
`;

const CultureImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const TitleWrapper = styled.div`
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  & > *:not(:last-child) {
    padding-bottom: 0.8rem;
  }
`;

const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const DescriptionItem = styled.li`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

const CultureQuery = graphql`
  query CultureQuery {
    mdx(frontmatter: { templateKey: { eq: "main_cultures" } }) {
      frontmatter {
        cultures {
          image
          title
          subtitle
          description
        }
      }
    }
  }
`;

export default Culture;
