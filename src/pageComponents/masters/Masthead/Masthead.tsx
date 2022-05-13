import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Typography
import { MBody, MDisplay } from "typography";
// Components
import { InfoItem } from "./InfoItem";
// Assets
import headEmoji from "assets/images/icons/head-emoji.svg";
import calander from "assets/images/icons/calander.svg";
import coin from "assets/images/icons/coin.svg";
import book from "assets/images/icons/book.svg";
import mastersBig from "assets/images/icons/masters-big.svg";

const Masthead: React.FC = ({}) => {
  const data = useStaticQuery(MastHeadQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { title, description, targets, trainingDuration, cost, subject } = frontmatter;

  return (
    <MastheadWrapper icon={mastersBig}>
      <TitleWrapper>
        <MDisplay>{title}</MDisplay>
        <Description>
          <MBody>{description}</MBody>
        </Description>
      </TitleWrapper>
      <CourseInfoWrapper>
        <TargetWrapper>
          <TargetTitle>
            <img src={headEmoji} style={{ marginRight: ".8rem" }} />
            <MBody bold>교육 과정 대상자</MBody>
          </TargetTitle>
          {targets.map((target: string) => (
            <TargetItem key={target}>
              <MBody>{target}</MBody>
            </TargetItem>
          ))}
        </TargetWrapper>
        <ul>
          <InfoItem src={calander} label="교육기간" content={trainingDuration} />
          <InfoItem src={coin} label="비용" content={cost} />
          <InfoItem src={book} label="클래스(택1)" content={subject} />
        </ul>
      </CourseInfoWrapper>
    </MastheadWrapper>
  );
};

const MastheadWrapper = styled.div<{ icon: string }>`
  width: 100%;
  min-width: 144rem;
  padding: 16rem 0 7.2rem 0;
  display: flex;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-position: right 16rem top 8rem;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  min-width: 107rem;
  display: flex;
  flex-direction: column;
`;
const Description = styled.div`
  margin-top: 2.4rem;
  width: 50%;
`;

const CourseInfoWrapper = styled.div`
  display: flex;
  min-width: 107rem;
  justify-content: space-between;
  margin-top: 4rem;
`;

const TargetTitle = styled.h4`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;
const TargetWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  list-style: disc;
`;
const TargetItem = styled.li`
  &:before {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
  }
  margin-top: 0.8rem;
  margin-left: 2.4rem;
`;

const MastHeadQuery = graphql`
  query MastHeadQuery {
    mdx(frontmatter: { templateKey: { eq: "masters_masthead" } }) {
      frontmatter {
        title
        description
        targets
        trainingDuration
        cost
        subject
      }
    }
  }
`;

export default Masthead;
