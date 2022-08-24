import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { LDisplay, MBody, MBold } from "typography";
// Components
import { InfoItem } from "./InfoItem";
// Assets
import header from "assets/img/illusts/header";
import icons from "assets/img/icons";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { title, description, targets, courseInfos } = strainMdxInfo(useStaticQuery(MastheadQuery));

  return (
    <MastheadWrapper>
      <ContentWrapper>
        <TitleWrapper>
          <LDisplay>{title}</LDisplay>
        </TitleWrapper>
        <CourseInfoWrapper>
          <InfoItemWrapper>
            <MBody style={{ whiteSpace: "pre-line", marginBottom: "1.6rem" }}>{description}</MBody>
            {courseInfos.map(
              ({
                title,
                content,
                img,
              }: {
                title: string;
                content: string;
                img: keyof typeof icons;
              }) => (
                <InfoItem key={title} icon={icons[img]} {...{ title, content }} />
              )
            )}
          </InfoItemWrapper>
          <TargetWrapper>
            <TargetTitle>
              <img src={icons.member} style={{ marginRight: ".8rem" }} />
              <MBold>{TITLE.EDUCATION_TARGET}</MBold>
            </TargetTitle>
            <TargetItemWrapper>
              {targets.map((target: string) => (
                <li key={target}>
                  <MBody
                    style={{
                      display: "inline",
                      verticalAlign: "middle",
                    }}
                  >
                    {target}
                  </MBody>
                </li>
              ))}
            </TargetItemWrapper>
          </TargetWrapper>
        </CourseInfoWrapper>
      </ContentWrapper>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div`
  position: relative;
  width: 100%;
  min-width: 144rem;
  height: 56rem;
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  background-color: ${({ theme: { color } }) => color.primary.green4};
  background-image: ${`url(${header.pattern3})`};
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

const CourseInfoWrapper = styled.div`
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

const MastheadQuery = graphql`
  query MastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_masthead" } }) {
      frontmatter {
        title
        description
        targets
        courseInfos {
          title
          content
          img
        }
      }
    }
  }
`;

export default Masthead;
