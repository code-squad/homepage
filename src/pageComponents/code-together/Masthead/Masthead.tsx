import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { ScheduledCourse } from "@type/ScheduledCourse";
// Typography
import { MBody, MDisplay } from "typography";
// Components
import { Course } from "./Course";
// Assets
import icons from "assets/img/icons";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const Masthead: React.FC = () => {
  const { title, description, scheduledCourses } = strainMdxInfo(useStaticQuery(MastheadQuery));

  return (
    <MastheadWrapper icon={icons.codetogetherBig}>
      <TitleWrapper>
        <MDisplay>{title}</MDisplay>
        <MBody>{description}</MBody>
      </TitleWrapper>
      <CourseAdmissionTitleWrapper>
        <MBody bold>{TITLE.SCHEDULED_COURSE}</MBody>
        <MoveButtonWrapper>
          <MBody bold>{TITLE.VIEW_ENTIRE_COURSE}</MBody>
        </MoveButtonWrapper>
      </CourseAdmissionTitleWrapper>
      <CourseAdmissionsList>
        {scheduledCourses.map(({ title, dueDate, img, path }: ScheduledCourse) => (
          <li key={img}>
            <Course {...{ title, dueDate, path }} img={icons[img]} />
          </li>
        ))}
      </CourseAdmissionsList>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div<{ icon: string }>`
  width: 100%;
  min-width: 144rem;
  padding: 16rem 0 6.2rem 0;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-position: right 16rem top 8rem;
`;

const TitleWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  & > *:last-child {
    width: 50%;
  }
`;

const CourseAdmissionTitleWrapper = styled.div`
  width: 106.2rem;
  margin: 0 auto;
  margin-top: 5.8rem;
  display: flex;
  justify-content: space-between;
`;

const MoveButtonWrapper = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

const CourseAdmissionsList = styled.ul`
  width: 106.2rem;
  display: flex;
  margin: 2.4rem auto 0 auto;
  & > *:not(:last-child) {
    margin-right: 6.333rem;
  }
`;

const MastheadQuery = graphql`
  query CodeTogetherMastheadQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_masthead" } }) {
      frontmatter {
        title
        description
        scheduledCourses {
          title
          dueDate
          img
          path
        }
      }
    }
  }
`;

export default Masthead;
