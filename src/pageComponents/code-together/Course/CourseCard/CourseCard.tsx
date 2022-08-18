import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
// Typography
import { LBody, SBody } from "typography/";

interface IImageCard {
  master: string;
  title: string;
  dueDate: string;
  cost: string;
  tags: string[];
  img: string;
  path: string;
}

const CourseCard: React.FC<IImageCard> = ({ master, title, dueDate, cost, tags, img, path }) => {
  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return (
    <CourseCardWrapper
      aria-label={`course-card-${title}`}
      to={path}
      target={path.match(urlRegex) ? "_blank" : undefined}
      rel={path.match(urlRegex) ? "noopener noreferrer nofollow" : undefined}
    >
      <CardImg src={img} />
      <MasterWrapper>
        <SBody bold>{master}</SBody>
      </MasterWrapper>
      <TitleWrapper>
        <LBody bold>{title}</LBody>
      </TitleWrapper>
      <DueDateWrapper>
        <SBody>{dueDate}</SBody>
      </DueDateWrapper>
      <CostWrapper>
        <SBody bold>{cost}</SBody>
      </CostWrapper>
      <TagList>
        {tags.map((tag) => (
          <CourseTagItem key={tag}>
            <SBody>{tag}</SBody>
          </CourseTagItem>
        ))}
      </TagList>
    </CourseCardWrapper>
  );
};

const CourseCardWrapper = styled(Link)<{ medium?: boolean }>`
  width: 24rem;
  height: 41.6rem;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    & > *:nth-child(2) {
      height: 2.3rem;
      line-height: 2.3rem;
      border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey1};
    }
    & > *:nth-child(3) {
      height: 2.9rem;
      line-height: 2.9rem;
      border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.black};
    }
    & > *:nth-child(4) {
      height: 2.3rem;
      line-height: 2.3rem;
      border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey1};
    }
    & > *:nth-child(5) {
      height: 2.3rem;
      line-height: 2.3rem;
      border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.black};
    }
  }
`;

const CardImg = styled.img`
  width: 23.8rem;
  height: 23.8rem;
`;

const MasterWrapper = styled.div`
  width: fit-content;
  margin-top: 2.4rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const TitleWrapper = styled.div`
  width: fit-content;
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

const DueDateWrapper = styled.div`
  width: fit-content;
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

const CostWrapper = styled.div`
  width: fit-content;
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

const TagList = styled.ul`
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
