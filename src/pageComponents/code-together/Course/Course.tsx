import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CourseType } from "@type/Course";
// Typography
import { MBody } from "typography";
// Components
import { TitleSet } from "components";
import { CourseCard } from "./CourseCard";
// Assets
import icons from "assets/img/icons";
import { SUBTITLE, TITLE, DESCRIPTION } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Course: React.FC = ({}) => {
  const data = useStaticQuery(CodeTogetherCourseQuery);
  const { courses }: { courses: CourseType[] } = strainMdxInfo(data);

  return (
    <CourseWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER_COURSE} title={TITLE.COURSE} />
      <CourseListWrapper>
        <CourseList>
          {courses.map(({ master, title, dueDate, price, tags, img }) => (
            <li key={img}>
              <CourseCard {...{ master, title, dueDate, price, tags }} img={icons[img]} />
            </li>
          ))}
        </CourseList>
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
  margin-top: 16rem;
`;

const CourseListWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
`;

const CourseList = styled.ul`
  padding: 8rem 18.9rem;
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
`;

const CodeTogetherCourseQuery = graphql`
  query CodeTogetherCourseQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_courses" } }) {
      frontmatter {
        courses {
          index
          master
          title
          dueDate
          price
          img
          tags
        }
      }
    }
  }
`;

export default Course;
