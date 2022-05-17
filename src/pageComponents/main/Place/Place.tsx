import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { PlaceType } from "@type/Place";
// Theme
import theme from "styles/theme";
// Typography
import { MBody } from "typography";
// Assets
import arrowLeft from "assets/images/icons/arrow-left.svg";
import arrowRight from "assets/images/icons/arrow-right.svg";
import places from "assets/images/places";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
import { SectionTitleRefac } from "components";

const Place: React.FC = () => {
  const data = useStaticQuery(PlaceQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { places: placeList }: { places: PlaceType[] } = frontmatter;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 1 <= placeList.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <PlaceWrapper>
      <ArrowNavigationWrapper>
        <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
          <img src={arrowLeft} />
        </ArrowButton>
        <ArrowButton
          disabled={currentIndex === placeList.length - 1}
          onClick={handleArrowRightClick}
        >
          <img src={arrowRight} />
        </ArrowButton>
      </ArrowNavigationWrapper>
      <SectionTitleRefac subTitle={SUBTITLE.PLACE} title={TITLE.PLACE} />
      <MBody style={{ color: theme.color.greyScale.grey2, padding: "4rem 0" }}>
        {DESCRIPTION.PLACE}
      </MBody>
      <PlaceListWrapper>
        <PlaceList {...{ currentIndex }}>
          {placeList.map(({ image }) => (
            <li key={image}>
              <PlaceImage src={places[image]} />
            </li>
          ))}
        </PlaceList>
      </PlaceListWrapper>
    </PlaceWrapper>
  );
};

const PlaceWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  overflow-x: hidden;
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
  position: absolute;
  margin-left: 98.6rem;
  margin-top: 13.8rem;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 1.6rem;
  }
`;

const ArrowButton = styled.button`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 0;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: auto;
    filter: invert(50%) sepia(7%) saturate(6%) hue-rotate(351deg) brightness(92%) contrast(89%);
  }
`;

const PlaceListWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  overflow: hidden;
`;

const PlaceList = styled.ul<{ currentIndex: number }>`
  display: flex;
  position: relative;
  display: flex;
  transition: left 0.5s;
  left: -${({ currentIndex }) => currentIndex * 106.2}rem;
`;

const PlaceImage = styled.img`
  width: 106.2rem;
  height: 50rem;
`;

const PlaceQuery = graphql`
  query PlaceQuery {
    mdx(frontmatter: { templateKey: { eq: "main_places" } }) {
      frontmatter {
        places {
          image
        }
      }
    }
  }
`;

export default Place;
