import React from "react";
import styled, { useTheme } from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./TimeTable.css";
// Type
import { PlanType, TagType } from "@type/TimeTable";
// Typography
import { Typography } from "typography";
// Components
import { TitleSet } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfoBody } from "lib/utils";
import { useResponsive } from "lib/hooks";

const TimeTable: React.FC = () => {
  const { isMobile } = useResponsive();
  const {
    color: { greyScale },
  } = useTheme();

  const data = useStaticQuery(JavascriptTimeTableQuery);
  const { planList, tags, body }: { planList: PlanType[]; tags: TagType[]; body: string } =
    strainMdxInfoBody(data);

  React.useEffect(() => {
    tags.forEach((tag, i: number) => {
      const tdElements = document.getElementsByClassName(`tag${i}`);
      Array.from(tdElements).forEach((ele: any) => {
        ele.style.backgroundColor = tag.color;
      });
    });
  }, []);

  return (
    <TimeTableWrapper>
      <TitleSet subtitle={SUBTITLE.CODE_TOGETHER} title={TITLE.HOW_STUDY} />
      <PlanWrapper>
        <MDXRenderer>{body}</MDXRenderer>
        <DescriptionWrapper>
          <TagList>
            {tags.map(({ color, name }: TagType) => (
              <TagWrapper key={name}>
                <TagColor aria-label={`${name}-tag-color`} background={color} />
                <Typography type="XSBody">{name}</Typography>
              </TagWrapper>
            ))}
          </TagList>
          <PlanList>
            {planList.map(({ name, description, color }) => (
              <PlanListWrapper key={name}>
                <PlanLabel {...{ color }}>
                  <Typography type={isMobile ? "MBold" : "SBold"}>{name}</Typography>
                </PlanLabel>
                <Typography style={{ color: greyScale.grey1 }} type={isMobile ? "MBody" : "SBody"}>
                  {description}
                </Typography>
              </PlanListWrapper>
            ))}
          </PlanList>
        </DescriptionWrapper>
      </PlanWrapper>
    </TimeTableWrapper>
  );
};

const TimeTableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-top: 12rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-top: 18rem;
    & > *:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-top: 18rem;
    margin: 0 auto;
    align-items: space-between;
    & > *:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
`;

const PlanList = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding-right: 7.9rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 30rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
`;

const PlanLabel = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 99rem;
  padding: 0.3rem 1.6rem;
`;

const PlanWrapper = styled.div`
  display: flex;
  color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
  }
  @media ${({ theme }) => theme.device.tablet} {
    align-items: flex-start;
    & > *:not(:last-child) {
      margin-right: 8.7rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
    margin-left: 8rem;
  }
`;
const PlanListWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media ${({ theme }) => theme.device.mobile} {
    & > *:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
`;
const TagColor = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
`;
const TagList = styled.ul`
  display: flex;
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 4rem;
    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 1.6rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-bottom: 3.2rem;
    & > *:not(:last-child) {
      margin-right: 1.6rem;
    }
  }
`;
const TagWrapper = styled.li`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    & > *:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 7.1rem;
    & > *:not(:last-child) {
      margin-right: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    & > *:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
`;

const JavascriptTimeTableQuery = graphql`
  query JavascriptTimeTableQuery {
    mdx(frontmatter: { templateKey: { eq: "codeTogether_javascript_plan" } }) {
      body
      frontmatter {
        planList {
          name
          description
          color
        }
        tags {
          name
          color
        }
      }
    }
  }
`;

export default TimeTable;
