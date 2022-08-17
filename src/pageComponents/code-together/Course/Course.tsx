import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CourseType } from "@type/Course";
// Components
import { EButton, TitleSet } from "components";
import { CourseCard } from "./CourseCard";
// Assets
import thumbnail from "assets/img/illusts/thumbnail";
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const Course: React.FC = () => {
  const data = useStaticQuery(CodeTogetherCourseQuery);
  const { courses }: { courses: CourseType[] } = strainMdxInfo(data);

  const [courseCount, setCourseCount] = React.useState(courses.length > 9 ? 9 : courses.length);

  const handleMoreButtonClick = () => {
    if (courseCount + 9 <= courses.length) {
      setCourseCount(courseCount + 9);
      return;
    }

    setCourseCount(courses.length);
  };

  return (
    <CourseWrapper id="course">
      <TitleWrapper>
        <TitleSet subtitle={SUBTITLE.CODE_TOGETHER_COURSE} title={TITLE.COURSE} bigSubtitle />
      </TitleWrapper>
      <CourseListWrapper>
        <CourseList>
          {courses
            .slice(0, courseCount)
            .map(({ master, title, dueDate, cost, tags, img, path }) => (
              <li key={img}>
                <CourseCard
                  {...{ master, title, dueDate, cost, tags, path, img: thumbnail[img] }}
                />
              </li>
            ))}
        </CourseList>
        {courses.length > 9 && (
          <MoreButtonWrapper>
            <EButton
              children={TITLE.MORE}
              disabled={courseCount === courses.length}
              onClick={handleMoreButtonClick}
            />
          </MoreButtonWrapper>
        )}
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 18rem;
`;

const TitleWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
`;

const CourseListWrapper = styled.div`
  width: 100%;
  margin-top: 4rem;
  padding: 8rem 0 16rem 0;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
`;

const CourseList = styled.ul`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  display: flex;
  flex-flow: row wrap;
  & > *:not(:nth-child(3n)) {
    margin-right: 17.1rem;
  }
  & > *:not(:nth-last-child(-n + 3)) {
    margin-bottom: 8rem;
  }
`;

const MoreButtonWrapper = styled.div`
  width: 100%;
  margin-top: 6.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CodeTogetherCourseQuery = graphql`
  query CodeTogetherCourseQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_courses" } }) {
      frontmatter {
        courses {
          master
          title
          dueDate
          cost
          img
          path
          tags
        }
      }
    }
  }
`;

export default Course;
