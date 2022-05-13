import React from "react";
import styled from "styled-components";
// Type
import { FeatureType } from "@type/Feature";
// Theme
import theme from "styles/theme";
// Typography
import { LBody, MBody, SDisplay, XLBody } from "typography";
// Assets
import images from "assets/images";
import { SUBTITLE, TITLE } from "assets/static/phrases";

const Feature: React.FC<{ feature: FeatureType }> = ({ feature }) => {
  const { title, subtitle, description, image } = feature;

  return (
    <FeatureWrapper>
      <TitleWrapper>
        <LBody>{SUBTITLE.FEATURE}</LBody>
        <SDisplay>{TITLE.FEATURE}</SDisplay>
      </TitleWrapper>
      <ContentWrapper>
        <Content>
          <div>
            <XLBody bold>{title}</XLBody>
            <MBody bold style={{ color: `${theme.color.greyScale.grey2}` }}>
              {subtitle}
            </MBody>
          </div>
          <MBody style={{ color: theme.color.greyScale.grey2 }}>{`${description}`}</MBody>
        </Content>
        <FeatureImg src={images[image]} />
      </ContentWrapper>
    </FeatureWrapper>
  );
};

const FeatureWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 16rem;
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
  gap: 13.2rem;
  white-space: pre-line;
`;

const Content = styled.div`
  width: 41.1rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const FeatureImg = styled.img`
  width: 51.9rem;
  height: 44rem;
`;

export default Feature;
