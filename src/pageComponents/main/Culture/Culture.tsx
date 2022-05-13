import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CultureType } from "@type/Culture";
// Theme
import theme from "styles/theme";
// Typography
import { LBody, MBody, SDisplay, XLBody } from "typography";
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
      <TitleWrapper>
        <LBody>{SUBTITLE.CULTURE}</LBody>
        <SDisplay>{TITLE.CULTURE}</SDisplay>
      </TitleWrapper>
      <ContentWrapper>
        {cultures.map((culture) => (
          <CultureContent key={culture.title}>
            <CultureImg src={icons[culture.image]} />
            <div>
              <MBody style={{ paddingBottom: "0.4rem" }}>{culture.subtitle}</MBody>
              <XLBody>{culture.title}</XLBody>
            </div>
            <DescriptionWrapper>
              {culture.descriptions.map((description) => (
                <li>
                  <MBody style={{ color: theme.color.greyScale.grey2 }}>{description}</MBody>
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
  gap: 5.6rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 7.8rem;
  white-space: pre-line;
`;

const CultureContent = styled.div`
  width: 30.2rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
`;

const CultureImg = styled.img`
  width: 8rem;
  height: 8rem;
`;

const DescriptionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const CultureQuery = graphql`
  query CultureQuery {
    mdx(frontmatter: { templateKey: { eq: "main_cultures" } }) {
      frontmatter {
        cultures {
          image
          title
          subtitle
          descriptions
        }
      }
    }
  }
`;

export default Culture;
