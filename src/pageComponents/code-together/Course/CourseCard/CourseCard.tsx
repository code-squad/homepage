import React from "react";
import styled from "styled-components";
// Typography
import { LBody, SBody, XLBody } from "typography/";

interface IImageCard {
  master: string;
  title: string;
  dueDate: string;
  price: string;
  tags: string[];
  img: string;
}

const CourseCard: React.FC<IImageCard> = ({ master, title, dueDate, price, tags, img }) => {
  return (
    <CourseCardWrapper aria-label="course-card">
      <CourseCardImg src={img} />
      <CourseMaster>
        <SBody bold>{master}</SBody>
      </CourseMaster>
      <CourseTitle>
        <LBody bold>{title}</LBody>
      </CourseTitle>
      <CourseDueDate>
        <SBody>{dueDate}</SBody>
      </CourseDueDate>
      <CoursePrice>
        <SBody bold>{price}</SBody>
      </CoursePrice>
      <CourseTagList>
        {tags.map((tag) => (
          <CourseTagItem key={tag}>
            <SBody>{tag}</SBody>
          </CourseTagItem>
        ))}
      </CourseTagList>
    </CourseCardWrapper>
  );
};

const CourseCardWrapper = styled.div<{ medium?: boolean }>`
  width: 24rem;
  height: 41.6rem;
`;

const CourseCardImg = styled.img`
  width: 24rem;
  height: 24rem;
`;

const CourseMaster = styled.div`
  margin-top: 2.4rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const CourseTitle = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

const CourseDueDate = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const CoursePrice = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

const CourseTagList = styled.ul`
  display: flex;
  margin-top: 1.6rem;
  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

const CourseTagItem = styled.div`
  width: 4.2rem;
  height: 2.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  border-radius: 99.9rem;
`;

export default CourseCard;
