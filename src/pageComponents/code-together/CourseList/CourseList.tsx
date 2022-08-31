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
      <TitleSet title={TITLE.SCHEDULED_COURSE}></TitleSet>
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
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 18rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
  }
`;

const CourseListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
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
