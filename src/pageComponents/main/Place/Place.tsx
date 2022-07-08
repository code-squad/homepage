import React from "react";
import styled, { useTheme } from "styled-components";
// Typography
import { MBody } from "typography";
// Components
import { TitleSet } from "components";
// Assets
import icons from "assets/img/icons";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";

const Place: React.FC = () => {
  const { color } = useTheme();
  const { place1, place2, place3, place4, place5, place6, place7 } = picture;

  const imgList = [place1, place2, place3, place4, place5, place6, place7];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleArrowLeftClick = () => {
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 1 <= imgList.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <PlaceWrapper>
      <ArrowNavigationWrapper>
        <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
          <img src={icons.chevronLeft} alt="arrow-left" />
        </ArrowButton>
        <ArrowButton disabled={currentIndex === imgList.length - 1} onClick={handleArrowRightClick}>
          <img src={icons.chevronRight} alt="arrow-right" />
        </ArrowButton>
      </ArrowNavigationWrapper>
      <TitleSet subtitle={SUBTITLE.PLACE} title={TITLE.PLACE} />
      <MBody style={{ color: color.greyScale.grey2 }}>{DESCRIPTION.PLACE}</MBody>
      <PlaceListWrapper>
        <PlaceList {...{ currentIndex }}>
          {imgList.map((image, i) => (
            <li key={`${image}-${i}`}>
              <PlaceImage src={image} alt="codesquad-place" />
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
  position: relative;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }
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
  border-radius: 0.8rem;
`;

export default Place;
