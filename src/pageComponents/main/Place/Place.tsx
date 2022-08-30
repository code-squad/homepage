import React from "react";
import styled, { useTheme } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/swiper.min.css";
// Typography
import { MBody, SBody } from "typography";
// Components
import { TitleSet, RectangleNavigation } from "components";
// Assets
import icons from "assets/img/icons";
import picture from "assets/img/picture";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
// Libs
import { useResponsive } from "lib/hooks";

const Place: React.FC = () => {
  const { color } = useTheme();
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const { place1, place2, place3, place4, place5, place6, place7 } = picture;
  const imgList = [place1, place2, place3, place4, place5, place6, place7];

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperClass | null>(null);

  const handleArrowLeftClick = () => {
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleArrowRightClick = () => {
    if (currentIndex + 1 <= imgList.length) setCurrentIndex(currentIndex + 1);
    if (swiperRef.current) swiperRef.current.slideNext();
  };

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <PlaceWrapper>
      {(isTablet || isDesktop) && (
        <ArrowNavigationWrapper>
          <ArrowButton disabled={currentIndex === 0} onClick={handleArrowLeftClick}>
            <img src={icons.chevronLeft} alt="arrow-left" />
          </ArrowButton>
          <ArrowButton
            disabled={currentIndex === imgList.length - 1}
            onClick={handleArrowRightClick}
          >
            <img src={icons.chevronRight} alt="arrow-right" />
          </ArrowButton>
        </ArrowNavigationWrapper>
      )}
      <PlaceIntroduceWrapper>
        <TitleSet subtitle={SUBTITLE.PLACE} title={TITLE.PLACE} />
        {isMobile ? (
          <SBody style={{ color: color.greyScale.grey2 }}>{DESCRIPTION.PLACE}</SBody>
        ) : (
          <MBody style={{ color: color.greyScale.grey2 }}>{DESCRIPTION.PLACE}</MBody>
        )}
      </PlaceIntroduceWrapper>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        style={{ width: "100%" }}
        allowTouchMove={isMobile ? true : false}
        onActiveIndexChange={({ activeIndex }) => setCurrentIndex(activeIndex)}
      >
        {imgList.map((image) => (
          <SwiperSlide key={image}>
            <PlaceImage src={image} alt="codesquad-place" />
          </SwiperSlide>
        ))}
      </Swiper>
      {isMobile && (
        <RectangleNavigationWrapper>
          <RectangleNavigation count={7} index={currentIndex} onIndexChanged={handleIndexChanged} />
        </RectangleNavigationWrapper>
      )}
    </PlaceWrapper>
  );
};

const PlaceWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 36rem;
    padding: 0 8rem;
    padding-bottom: 8rem;
    & > *:not(:last-child) {
      margin-bottom: 5.6rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 16rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-bottom: 5.6rem;
    }
  }
`;

const ArrowNavigationWrapper = styled.div`
  @media ${({ theme }) => theme.device.tablet} {
    width: 7.6rem;
    height: 3rem;
    position: absolute;

    top: 6.5rem;
    right: 7.5rem;
    display: flex;
    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 7.6rem;
    height: 3rem;
    position: absolute;
    margin-left: 98.6rem;
    margin-top: 12.2rem;
    display: flex;
    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
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
    filter: invert(78%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(103%) contrast(89%);
  }
`;

const PlaceIntroduceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
`;

const PlaceImage = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100vw;
    min-width: 36rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    border-radius: 0.8rem;
  }
`;

const RectangleNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 0.4rem;
  margin-top: 3.2rem;
  margin-bottom: 8rem;
`;

export default Place;
