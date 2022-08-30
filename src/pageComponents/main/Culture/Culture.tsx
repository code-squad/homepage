import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import "swiper/swiper.min.css";
// Type
import { CultureType } from "@type/Culture";
// Typography
import { HLBold, SHLBold, MBold, MBody } from "typography";
// Components
import { RectangleNavigation, TitleSet } from "components/";
// Assets
import features from "assets/img/illusts/feature";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo, getSplittedPhrase } from "lib/utils";
import { useResponsive } from "lib/hooks";

const Culture: React.FC = () => {
  const { isMobile } = useResponsive();

  const { cultures }: { cultures: CultureType[] } = strainMdxInfo(useStaticQuery(CultureQuery));

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const swiperRef = React.useRef<SwiperClass | null>(null);

  const handleIndexChanged = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <CultureWrapper>
      <TitleWrapper>
        <TitleSet subtitle={SUBTITLE.CULTURE} title={TITLE.CULTURE} />
      </TitleWrapper>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={isMobile ? 0 : 40}
        allowTouchMove={isMobile ? true : false}
        onActiveIndexChange={({ activeIndex }) => setCurrentIndex(activeIndex)}
        style={{ width: "100%" }}
      >
        {cultures.map(({ title, image, subtitle, description }) => (
          <SwiperSlide key={title}>
            <CultureContent key={title}>
              <CultureImg src={features[image]} alt="culture-icon" />
              <CultureTitleWrapper>
                <MBold>{subtitle}</MBold>
                {isMobile ? <SHLBold>{title}</SHLBold> : <HLBold>{title}</HLBold>}
              </CultureTitleWrapper>
              <DescriptionList>
                {getSplittedPhrase(description).map((descriptionItem: string) => (
                  <DescriptionItem key={descriptionItem}>
                    <MBody>{descriptionItem}</MBody>
                  </DescriptionItem>
                ))}
              </DescriptionList>
            </CultureContent>
          </SwiperSlide>
        ))}
      </Swiper>
      {isMobile && (
        <RectangleNavigationWrapper>
          <RectangleNavigation count={3} index={currentIndex} onIndexChanged={handleIndexChanged} />
        </RectangleNavigationWrapper>
      )}
    </CultureWrapper>
  );
};

const CultureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 8rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 8rem;
    margin: 0 auto;
    align-items: space-between;
    & > *:not(:last-child) {
      margin-bottom: 5.6rem;
    }
  }
`;

const TitleWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
`;

const ContentWrapper = styled.ul<{ currentIndex: number }>`
  position: relative;
  display: flex;
  white-space: pre-line;
  @media ${({ theme }) => theme.device.mobile} {
    width: 300vw;
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > *:not(:last-child) {
      margin-right: 4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:not(:last-child) {
      margin-right: 7.8rem;
    }
  }
  transition: left 0.5s;
  left: -${({ currentIndex }) => currentIndex * 100}vw;
`;

const CultureContent = styled.li`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
    width: 100%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 100%;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 30.2rem;
  }
`;

const CultureImg = styled.img`
  @media ${({ theme }) => theme.device.mobile} {
    width: 100%;
    height: 21rem;
    background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 8rem;
    height: 8rem;
    background-color: transparent;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 8rem;
    height: 8rem;
    background-color: transparent;
  }
`;

const CultureTitleWrapper = styled.div`
  color: ${({ theme: { color } }) => color.black};
  & > *:not(:last-child) {
    padding-bottom: 0.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
`;

const DescriptionList = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 17.6rem;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 30.2rem;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;

const DescriptionItem = styled.li`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;

const RectangleNavigationWrapper = styled.div`
  display: flex;
  justify-content: center;
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
