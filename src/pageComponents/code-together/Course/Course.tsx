import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { CourseType } from "@type/Course";
// Components
import { MButton, TitleSet, CourseCard } from "components";
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
          {courses.slice(0, courseCount).map(({ category, title, cost, tags, img, path }) => (
            <li key={`${title}-${img}`}>
              <CourseCard {...{ category, title, cost, tags, path, img: thumbnail[img] }} />
            </li>
          ))}
        </CourseList>
        {courses.length > 9 && (
          <MoreButtonWrapper>
            <MButton
              children={TITLE.MORE}
              disabled={courseCount === courses.length}
              onClick={handleMoreButtonClick}
              type="left"
            />
          </MoreButtonWrapper>
        )}
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18rem;
`;

const TitleWrapper = styled.div`
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
  }
`;

const CourseListWrapper = styled.div`
  width: 100%;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 4.8rem 0 5.6rem 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4.8rem 0 13.6rem 0;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 8rem 0 16rem 0;
  }
`;

const CourseList = styled.ul`
  margin: 0 auto 6.4rem auto;
  display: flex;
  flex-flow: row wrap;
  & > *:nth-child(2n - 1) {
    margin-right: 2.4rem;
  }
  & > *:not(:nth-last-child(-n + 3)) {
    margin-bottom: 8rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    margin-bottom: 3.2rem;
    padding: 0 2.4rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    padding: 0 8rem;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    & > *:not(:last-child) {
      margin-bottom: 4rem;
    }
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
          category
          title
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
