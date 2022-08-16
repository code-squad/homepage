import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
// Typography
import { SBody, MBold } from "typography";

interface ICourse {
  title: string;
  dueDate: string;
  img: string;
  path: string;
}

const Course: React.FC<ICourse> = ({ title, dueDate, img, path }) => {
  return (
    <CourseWrapper aria-label={`course-card-${title}`} to={path}>
      <CourseImg src={img} alt={`course-img-${title}`} />
      <CourseInfoWrapper>
        <TitleWrapper>
          <MBold>{title}</MBold>
        </TitleWrapper>
        <DueDateWrapper>
          <SBody>{dueDate}</SBody>
        </DueDateWrapper>
      </CourseInfoWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled(Link)`
  width: 21.8rem;
  height: 5rem;
  display: flex;
  text-decoration: none;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
  &:hover {
    cursor: pointer;
    & > *:last-child {
      & > *:first-child {
        height: 2.5rem;
        line-height: 2.5rem;
        border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey1};
      }
      & > *:last-child {
        height: 2.3rem;
        line-height: 2.3rem;
        border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey1};
      }
    }
  }
`;

const CourseImg = styled.img`
  width: 5rem;
  height: 5rem;
`;

const CourseInfoWrapper = styled.div`
  width: 21.8rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  width: fit-content;
`;

const DueDateWrapper = styled.div`
  width: fit-content;
`;

export default Course;
