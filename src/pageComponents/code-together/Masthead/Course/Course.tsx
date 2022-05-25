import React from "react";
import styled from "styled-components";
// Typography
import { SBody, MBody } from "typography";

interface ICourse {
  title: string;
  dueDate: string;
  img: string;
}

const Course: React.FC<ICourse> = ({ title, dueDate, img }) => {
  return (
    <CourseWrapper>
      <CourseImg src={img} alt={`course-img-${title}`} />
      <CourseInfoWrapper>
        <MBody>{title}</MBody>
        <SBody>{dueDate}</SBody>
      </CourseInfoWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  width: 21.8rem;
  height: 5rem;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 0.8rem;
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

export default Course;
