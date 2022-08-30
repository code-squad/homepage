import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Components
import { InfoItem } from "./InfoItem";
// Assets
import header from "assets/img/illusts/header";
import icons from "assets/img/icons";
import { TITLE } from "assets/static/phrases";

interface ICourseInfo {
  backgroundImage: string;
  backgroundColor: string;
  title: string;
  description: string;
  targets: string[];
  courseInfos: [
    {
      title: string;
      content: string;
      img: keyof typeof icons;
    }
  ];
}

const CourseInfo: React.FC<ICourseInfo> = ({
  backgroundImage,
  backgroundColor,
  title,
  description,
  targets,
  courseInfos,
}) => {
  return (
    <CourseInfoWrapper {...{ backgroundImage, backgroundColor }}>
      <ContentWrapper>
        <TitleWrapper>
          <Typography type="LDisplay">{title}</Typography>
        </TitleWrapper>
        <InfoWrapper>
          <InfoItemWrapper>
            <Typography type="MBody" style={{ whiteSpace: "pre-line", marginBottom: "1.6rem" }}>
              {description}
            </Typography>
            {courseInfos.map(({ title, content, img }) => (
              <InfoItem key={title} icon={icons[img]} {...{ title, content }} />
            ))}
          </InfoItemWrapper>
          <TargetWrapper>
            <TargetTitle>
              <img src={icons.member} style={{ marginRight: ".8rem" }} />
              <Typography type="MBold">{TITLE.EDUCATION_TARGET}</Typography>
            </TargetTitle>
            <TargetItemWrapper>
              {targets.map((target: string) => (
                <li key={target}>
                  <Typography
                    type="MBody"
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
        </InfoWrapper>
      </ContentWrapper>
    </CourseInfoWrapper>
  );
};

const CourseInfoWrapper = styled.div<{ backgroundImage: string; backgroundColor: string }>`
  position: relative;
  width: 100%;
  min-width: 144rem;
  height: 56rem;
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: top right;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  position: absolute;
  bottom: 8rem;
`;

const TitleWrapper = styled.div`
  min-width: 106.2rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  & > *:last-child {
    width: 50%;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 106.2rem;
  margin-top: 4rem;
`;

const TargetTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const TargetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const TargetItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: disc;
  list-style-position: inside;
  margin-left: 1rem;
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

const InfoItemWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: "wrap";
  & > *:not(:last-child) {
    margin-bottom: 0.8rem;
  }
`;

export default CourseInfo;
