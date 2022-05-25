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
        <MBody bold>지금 모집 중인 과정</MBody>
      </CourseAdmissionTitleWrapper>
      <CourseAdmissionsList>
        {scheduledCourses.map(({ title, dueDate, img }: ScheduledCourse) => (
          <Course key={img} {...{ title, dueDate }} img={icons[img]} />
        ))}
      </CourseAdmissionsList>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div<{ icon: string }>`
  width: 100%;
  min-width: 144rem;
  padding: 16rem 0 7.2rem 0;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-position: right 16rem top 8rem;
`;

const TitleWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
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
  padding: 0 18.9rem;
  margin-top: 3.2rem;
`;

const CourseAdmissionsList = styled.ul`
  width: 106.2rem;
  padding: 0 18.9rem;
  display: flex;
  margin-top: 4rem;
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
        }
      }
    }
  }
`;

export default Masthead;
