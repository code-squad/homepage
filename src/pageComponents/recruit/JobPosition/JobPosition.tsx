import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { JobPositionType } from "@type/JobPosition";
// Typography
import { LDisplay } from "typography";
// Components
import { DropdownItem, TagNavigationBar } from "components";
// Assets
import { TITLE } from "assets/static/phrases";
import { strainAllMdxInfo } from "lib/utils";
import strainAllMdxInfoBody from "lib/utils/strainAllMdxInfoBody";

const JobPosition: React.FC = () => {
  const jobPositionData = useStaticQuery(JobPositionQuery);
  const jobPositionInfoList: JobPositionType[] = strainAllMdxInfoBody(jobPositionData);

  const categories = new Set<string>(["전체"]);
  jobPositionInfoList.forEach((jobPosition) => categories.add(jobPosition.category));

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [jobPositionList, setJobPositionList] =
    React.useState<JobPositionType[]>(jobPositionInfoList);

  React.useEffect(() => {
    if (currentIndex === 0) {
      setJobPositionList(jobPositionList);
      return;
    }

    const category = Array.from(categories)[currentIndex];
    const filteredLists = jobPositionInfoList.filter(
      (jobPosition) => jobPosition.category === category
    );
    setJobPositionList(filteredLists);
  }, [currentIndex]);

  return (
    <JobPositionWrapper>
      <Background />
      <JobPositionContentWrapper>
        <LDisplay style={{ paddingTop: "16rem", paddingBottom: "3.2rem" }}>{TITLE.APPLY}</LDisplay>
        <TagNavigationBar titles={Array.from(categories)} onIndexChanged={setCurrentIndex} />
        <DropdownItemWrapper>
          {jobPositionList.map(({ category, title, body, editDate }) => (
            <DropdownItem key={title} short {...{ category, title, body, editDate }} />
          ))}
        </DropdownItemWrapper>
      </JobPositionContentWrapper>
    </JobPositionWrapper>
  );
};

const Background = styled.div`
  position: absolute;
  z-index: -1;
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  height: 56rem;
  width: 100%;
  min-width: 144rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &::after {
    content: "";
    display: block;
    width: 28rem;
    height: 28rem;
    background-color: #b2dee6;
    position: relative;
    left: 32rem;
    transform: rotate(45deg);
  }
`;

const JobPositionWrapper = styled.div`
  width: 100%;
  padding-bottom: 16rem;
  color: ${({ theme: { color } }) => color.greyScale.black};
  white-space: pre-line;
  text-align: start;
`;

const JobPositionContentWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
`;

const DropdownItemWrapper = styled.ul`
  margin-top: 4.7rem;
  padding: 0.8rem 4.8rem 4.8rem 4.8rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const JobPositionQuery = graphql`
  query JobPositionQuery {
    allMdx(
      sort: { order: ASC, fields: [frontmatter___editDate] }
      filter: { frontmatter: { templateKey: { glob: "recruit_jobPositions_*" } } }
    ) {
      edges {
        node {
          body
          frontmatter {
            category
            title
            content
            editDate
          }
        }
      }
    }
  }
`;

export default JobPosition;
