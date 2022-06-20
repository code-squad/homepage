import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "./TimeTable.css";
// Type
import { PlanType, TagType } from "@type/TimeTable";
// Typography
import { XSBody } from "typography";
// Components
import { TitleSet } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfoBody } from "lib/utils";

const TimeTable: React.FC = () => {
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
                <XSBody>{name}</XSBody>
              </TagWrapper>
            ))}
          </TagList>
          <PlanList>
            {planList.map(({ name, description, color }) => (
              <PlanListWrapper key={name}>
                <PlanLabel {...{ color }}>
                  <XSBody>{name}</XSBody>
                </PlanLabel>
                <XSBody>{description}</XSBody>
              </PlanListWrapper>
            ))}
          </PlanList>
        </DescriptionWrapper>
      </PlanWrapper>
    </TimeTableWrapper>
  );
};

const TimeTableWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-top: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  overflow-x: hidden;
  & > *:not(:last-child) {
    margin-bottom: 4rem;
  }
`;

const PlanList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 30rem;
`;

const PlanLabel = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 99rem;
  padding: 0.3rem 1.6rem;
  margin-bottom: 0.8rem;
  margin-top: 2.4rem;
`;

const PlanWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  margin-left: 8rem;
  flex-direction: column;
`;
const PlanListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const TagColor = styled.div<{ background: string }>`
  background-color: ${({ background }) => background};
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;
const TagList = styled.ul`
  display: flex;
  margin-bottom: 3rem;
`;
const TagWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-right: 1.6rem;
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
