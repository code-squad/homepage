import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CourseListType } from "@type/Course";
// Components
import { LinkButton, TitleSet } from "components";
// Assets
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const CourseList: React.FC = () => {
  const data = useStaticQuery(CodeTogetherCourseListQuery);
  const { courses }: { courses: CourseListType[] } = strainMdxInfo(data);

  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

  return (
    <CourseWrapper>
      <TitleSet title={TITLE.SCHEDULED_COURSE} />
      <CourseListWrapper>
        {courses.map(({ title, path, description }) => (
          <LinkButton
            key={title}
            to={path}
            external={urlRegex.test(path)}
            {...{ title, description }}
          />
        ))}
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 8rem auto 18rem auto;
  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    margin: 8rem 0 12rem 0;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
  }
`;

const CourseListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
`;

const CodeTogetherCourseListQuery = graphql`
  query CodeTogetherCourseListQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_courses_list" } }) {
      frontmatter {
        courses {
          title
          description
          path
        }
      }
    }
  }
`;

export default CourseList;
