import React from "react";
import styled from "styled-components";
// Type
import { CultureType } from "@type/Culture";
// Theme
import theme from "styles/theme";
// Typography
import { LBody, MBody, SDisplay, XLBody } from "typography";
// Assets
import icons from "assets/images/icons";
import { SUBTITLE, TITLE } from "assets/static/phrases";

interface ICulture {
  cultures: CultureType[];
}

const Culture: React.FC<ICulture> = ({ cultures }) => {
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
            <MBody style={{ color: theme.color.greyScale.grey2 }}>{culture.description}</MBody>
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
  width: 144rem;
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

export default Culture;