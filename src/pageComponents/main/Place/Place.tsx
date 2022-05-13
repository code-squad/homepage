import React from "react";
import styled from "styled-components";
// Type
import { PlaceType } from "@type/Place";
// Typography
import { LBody, SDisplay } from "typography";
// Assets
import arrowLeft from "assets/images/icons/arrow-left.svg";
import arrowRight from "assets/images/icons/arrow-right.svg";
import places from "assets/images/places";

interface IPlace {
  places: PlaceType[];
}

const Place: React.FC<IPlace> = ({ places: placeList }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 1 <= placeList.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <PlaceWrapper>
      <TitleWrapper>
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
        <LBody>오프라인 교육장</LBody>
        <SDisplay>오프라인 교육장</SDisplay>
      </TitleWrapper>
      <PlaceListWrapper>
        <PlaceList {...{ currentIndex }}>
          {placeList.map((place) => (
            <li>
              <PlaceImage src={places[place.image]} />
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
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 5.6rem;
  overflow-x: hidden;
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
  position: absolute;
  margin-left: 98.6rem;
  margin-top: 8.1rem;
  display: flex;
  gap: 1.6rem;
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

const TitleWrapper = styled.div`
  width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  position: relative;
`;

const PlaceListWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  overflow-x: hidden;
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

export default Place;
