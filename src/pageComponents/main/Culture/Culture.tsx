import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CultureType } from "@type/Culture";
// Theme
import theme from "styles/theme";
// Typography
import { MBody, XLBody } from "typography";
// Components
import { SectionTitleRefac } from "components/";
// Assets
import icons from "assets/images/icons";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const Culture: React.FC = () => {
  const data = useStaticQuery(CultureQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { cultures }: { cultures: CultureType[] } = frontmatter;

  return (
    <CultureWrapper>
      <SectionTitleRefac subTitle={SUBTITLE.CULTURE} title={TITLE.CULTURE} />
      <ContentWrapper>
        {cultures.map((culture) => (
          <CultureContent key={culture.title}>
            <CultureImg src={icons[culture.image]} alt="culture-icon" />
            <div>
              <MBody style={{ paddingBottom: "0.4rem" }}>{culture.subtitle}</MBody>
              <XLBody>{culture.title}</XLBody>
            </div>
            <DescriptionWrapper>
              {culture.description.split("\n\n").map((descriptionItem: string) => (
                <li key={descriptionItem}>
                  <MBody style={{ color: theme.color.greyScale.grey2 }}>{descriptionItem}</MBody>
                </li>
              ))}
            </DescriptionWrapper>
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

const DescriptionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
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
