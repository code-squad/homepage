import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Components
import { InfoItem } from "./InfoItem";
// Assets
import icons from "assets/img/icons";
import { TITLE } from "assets/static/phrases";
// Libs
import { useResponsive } from "lib/hooks";

interface ICourseDetailInfo {
  title: string;
  content: string;
  img: keyof typeof icons;
}

interface ICourseInfo {
  backgroundImage: string;
  backgroundColor: string;
  title: string;
  process?: string;
  description: string;
  targets: string[];
  courseInfos: ICourseDetailInfo[];
  subCourse?: boolean;
}

const CourseInfo: React.FC<ICourseInfo> = ({
  backgroundImage,
  backgroundColor,
  title,
  process,
  description,
  targets,
  courseInfos,
  subCourse,
}) => {
  const { isMobile } = useResponsive();

  return (
    <CourseInfoWrapper {...{ backgroundImage, backgroundColor }}>
      <ContentWrapper>
        <TitleWrapper>
          {process && <Typography type={isMobile ? "MBold" : "SHLBold"}>{process}</Typography>}
          <Typography type={isMobile ? "SDisplay" : "LDisplay"}>{title}</Typography>
        </TitleWrapper>
        <InfoWrapper subCourse>
          {subCourse ? (
            <>
              <TargetWrapper>
                <Typography
                  type={isMobile ? "SBody" : "MBody"}
                  style={{ whiteSpace: "pre-line", marginBottom: "2.4rem" }}
                >
                  {description}
                </Typography>
                <TargetTitle>
                  <img alt={`member-img`} src={icons.member} style={{ marginRight: ".8rem" }} />
                  <Typography type="MBold">{TITLE.EDUCATION_TARGET}</Typography>
                </TargetTitle>
                <TargetItemWrapper>
                  {targets.map((target: string) => (
                    <li key={target}>
                      <Typography
                        type={isMobile ? "XSBody" : "MBody"}
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                        }}
                      >
                        {target}
                      </Typography>
                    </li>
                  ))}
                </TargetItemWrapper>
              </TargetWrapper>
              <InfoItemWrapper>
                {courseInfos.map(({ title, content, img }) => (
                  <InfoItem key={title} icon={icons[img]} {...{ title, content }} />
                ))}
              </InfoItemWrapper>
            </>
          ) : (
            <>
              <InfoItemWrapper>
                <Typography
                  type={isMobile ? "SBody" : "MBody"}
                  style={{ whiteSpace: "pre-line", marginBottom: "1.6rem" }}
                >
                  {description}
                </Typography>
                {courseInfos.map(({ title, content, img }) => (
                  <InfoItem key={title} icon={icons[img]} {...{ title, content }} />
                ))}
              </InfoItemWrapper>
              <TargetWrapper>
                <TargetTitle>
                  <img alt={`member-img`} src={icons.member} style={{ marginRight: ".8rem" }} />
                  <Typography type="MBold">{TITLE.EDUCATION_TARGET}</Typography>
                </TargetTitle>
                <TargetItemWrapper>
                  {targets.map((target: string) => (
                    <li key={target}>
                      <Typography
                        type={isMobile ? "XSBody" : "MBody"}
                        style={{
                          display: "inline",
                          verticalAlign: "middle",
                        }}
                      >
                        {target}
                      </Typography>
                    </li>
                  ))}
                </TargetItemWrapper>
              </TargetWrapper>
            </>
          )}
        </InfoWrapper>
      </ContentWrapper>
    </CourseInfoWrapper>
  );
};

const CourseInfoWrapper = styled.div<{ backgroundImage: string; backgroundColor: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: top right;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 31.2rem;
    padding: 14.2rem 2.4rem 4.4rem 2.4rem;
    background-size: contain;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 60.8rem;
    padding: 16rem 8rem 5.6rem 8rem;
    background-size: cover;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    min-width: 106.2rem;
    height: 56rem;
  }
`;

const ContentWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.desktop} {
    position: absolute;
    bottom: 8rem;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 1.6rem;
    & > *:not(:last-child) {
      margin-bottom: 0;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-bottom: 1.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 106.2rem;
    & > *:last-child {
      width: 50%;
    }
  }
`;

const InfoWrapper = styled.div<{ subCourse: boolean }>`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: space-between;
    min-width: 106.2rem;
    margin-top: ${({ subCourse }) => (subCourse ? "2.4rem" : "4rem")};
  }
`;

const TargetTitle = styled.h4`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    margin: 1.6rem 0 0.8rem 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin: 1.6rem 0 0.8rem 0;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    margin-bottom: 0.8rem;
  }
`;
const TargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: calc(100% / 2);
`;

const TargetItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  list-style-position: outside;
  margin-left: 2rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const InfoItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: "wrap";
  width: calc(100% / 2);
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
  max-width: 45rem;
`;

export default CourseInfo;
