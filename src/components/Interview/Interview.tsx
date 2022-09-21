import React from "react";
import styled, { CSSProperties } from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/swiper.min.css";
// Type
import { InterviewType } from "@type/Interview";
// Components
import { InterviewBox, TitleSet, RectangleNavigation } from "components/";
// Assets
import avatars from "assets/img/avatars";
import icons from "assets/img/icons";
// Libs
import { useResponsive } from "lib/hooks";

interface IInterview {
  subtitle: string;
  title: string;
  interviews: InterviewType[];
  style?: CSSProperties | undefined;
}

const Interview: React.FC<IInterview> = ({ subtitle, title, interviews, style }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperClass | null>(null);

  const handleArrowLeftClick = () => {
    if (isDesktop) {
      setCurrentIndex(currentIndex - 2);
      return;
    }
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleArrowRightClick = () => {
    if (isDesktop && currentIndex + 3 === interviews.length) setCurrentIndex(currentIndex + 1);
    if (isDesktop && currentIndex + 2 <= interviews.length) setCurrentIndex(currentIndex + 2);
    if (isTablet && currentIndex + 1 < interviews.length) setCurrentIndex(currentIndex + 1);
  };

  return (
    <InterviewWrapper {...{ style }}>
      <TitleWrapper>
        <TitleSet {...{ title, subtitle }} />
        {!isMobile && (
          <ArrowNavigationWrapper>
            <ArrowButton
              disabled={currentIndex === 0 || interviews.length <= 2}
              onClick={handleArrowLeftClick}
            >
              <img src={icons.chevronLeft} alt="arrow-left" />
            </ArrowButton>
            <ArrowButton
              disabled={
                isTablet
                  ? currentIndex + 1 === interviews.length
                  : currentIndex + 2 === interviews.length || interviews.length <= 2
              }
              onClick={handleArrowRightClick}
            >
              <img src={icons.chevronRight} alt="arrow-right" />
            </ArrowButton>
          </ArrowNavigationWrapper>
        )}
      </TitleWrapper>
      {isMobile ? (
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          slidesPerView={1}
          allowTouchMove={true}
          onActiveIndexChange={({ activeIndex }) => setCurrentIndex(activeIndex)}
          style={{ width: "100%" }}
        >
          {interviews.map((interview, index) => (
            <SwiperSlide
              key={interview.nutshell}
              style={{ display: "flex", alignSelf: "stretch", height: "auto" }}
              className="mySwiper"
            >
              <InterviewBox
                {...{ ...interview }}
                writerPhoto={
                  interview.writerPhoto
                    ? avatars[interview.writerPhoto]
                    : index % 2 === 0
                    ? avatars.smallMember1
                    : avatars.smallMember2
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <InterviewList {...{ currentIndex }}>
          {interviews.map((interview, index) => (
            <li key={interview.nutshell} style={{ display: "flex", alignSelf: "stretch" }}>
              <InterviewBox
                {...{ ...interview }}
                writerPhoto={
                  interview.writerPhoto
                    ? avatars[interview.writerPhoto]
                    : index % 2 === 0
                    ? avatars.smallMember1
                    : avatars.smallMember2
                }
              />
            </li>
          ))}
        </InterviewList>
      )}
      {isMobile && (
        <RectangleNavigationWrapper>
          <RectangleNavigation count={interviews.length} index={currentIndex} />
        </RectangleNavigationWrapper>
      )}
    </InterviewWrapper>
  );
};

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 12rem;
    align-items: space-between;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 18rem;
    align-items: space-between;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-bottom: 18rem;
    align-items: space-between;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 8rem;
    margin: 0 auto;
  }
`;

const ArrowNavigationWrapper = styled.div`
  width: 7.6rem;
  height: 3rem;
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
    filter: invert(78%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(103%) contrast(89%);
  }
`;

const InterviewList = styled.ul<{ currentIndex: number }>`
  position: relative;
  display: flex;
  transition: left 0.5s;
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    left: -${({ currentIndex }) => currentIndex * 54.3}rem;
    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
    left: -${({ currentIndex }) => currentIndex * 54.3}rem;
    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
  }
`;

const RectangleNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 0.4rem;
  margin-top: 3.2rem;
`;

export default Interview;
