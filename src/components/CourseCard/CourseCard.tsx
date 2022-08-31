import { Link } from "gatsby";
import React from "react";
import styled, { useTheme } from "styled-components";
// Typography
import { Typography } from "typography/";
// Components
import { Tag } from "components";
// Lib
import { useResponsive } from "lib/hooks";

interface ICourseCard {
  category: string;
  title: string;
  cost: string;
  tags: string[];
  img: string;
  path: string;
}

const CourseCard: React.FC<ICourseCard> = ({ category, title, cost, tags, img, path }) => {
  const {
    color: { greyScale },
  } = useTheme();
  const { isMobile } = useResponsive();

  const urlRegex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;

  return (
    <CourseCardWrapper
      aria-label={`course-card-${title}`}
      as={path.match(urlRegex) ? "a" : Link}
      to={path}
      href={path}
      target={path.match(urlRegex) ? "_blank" : undefined}
      rel={path.match(urlRegex) ? "noopener noreferrer nofollow" : undefined}
    >
      <CardImg alt={`card-img-${title}`} src={img} />
      <CourseInfoWrapper>
        <Typography style={{ color: greyScale.grey1 }} type={isMobile ? "XSBody" : "SBold"}>
          {category}
        </Typography>
        <Typography type={isMobile ? "MBold" : "HLBold"}>{title}</Typography>
        <Typography type={isMobile ? "MBold" : "SHLBold"}>{cost}</Typography>
        <TagList>
          {tags.map((tagText) => (
            <Tag type="Black" key={tagText} text={tagText} />
          ))}
        </TagList>
      </CourseInfoWrapper>
    </CourseCardWrapper>
  );
};

const CourseCardWrapper = styled(Link)<{ medium?: boolean }>`
  text-decoration: none;
  display: flex;
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    width: 31.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 51.9rem;
  }
`;

const CourseInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 2rem 0 2rem 1.6rem;
    & > *:nth-child(2) {
      margin-bottom: 0.4rem;
    }
    & > *:nth-child(3) {
      margin-bottom: 0.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0.5rem 0 0.5rem 2.4rem;
    & > *:nth-child(2) {
      margin-bottom: 0.4rem;
    }
    & > *:nth-child(3) {
      margin-bottom: 0.4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding: 3.45rem 0 3.45rem 2.4rem;
  }
`;

const CardImg = styled.img`
  @media ${({ theme }) => theme.device.tablet} {
    width: 13.4rem;
    height: 13.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 19.3rem;
    height: 19.3rem;
  }
`;

const TagList = styled.ul`
  display: flex;
  margin-top: 1.6rem;
  & > *:not(:last-child) {
    margin-right: 0.8rem;
  }
  color: ${({ theme: { color } }) => color.black};
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
