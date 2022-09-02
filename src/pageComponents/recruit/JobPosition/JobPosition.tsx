import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { JobPositionType } from "@type/JobPosition";
// Typography
import { MDisplay, Typography } from "typography";
// Components
import { DropdownItem, TagNavigationBar } from "components";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE } from "assets/static/phrases";
// Utils
import { strainAllMdxInfoBody } from "lib/utils";
import { useResponsive } from "lib/hooks";

const JobPosition: React.FC = () => {
  const jobPositionData = useStaticQuery(JobPositionQuery);
  const jobPositionInfoList: JobPositionType[] = strainAllMdxInfoBody(jobPositionData);

  const { isDesktop, isMobile } = useResponsive();

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
      <JobPositionMasthead>
        <Typography
          style={{ width: isDesktop ? "106.8rem" : "unset" }}
          type={isMobile ? "SDisplay" : "MDisplay"}
        >
          {TITLE.APPLY}
        </Typography>
        <TagNavigationBar titles={Array.from(categories)} onIndexChanged={setCurrentIndex} />
      </JobPositionMasthead>
      <DropdownListWrapper>
        <DropdownList>
          {jobPositionList.map(({ category, title, body, editDate }) => (
            <DropdownItem key={title} short {...{ category, title, body, editDate }} />
          ))}
        </DropdownList>
      </DropdownListWrapper>
    </JobPositionWrapper>
  );
};

const JobPositionWrapper = styled.div`
  width: 100%;
  padding-bottom: 16rem;
  color: ${({ theme: { color } }) => color.black};
  white-space: pre-line;
  text-align: start;
  position: relative;
`;

const JobPositionMasthead = styled.div`
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.secondary.blue3};
  background-position: top right;
  background-position: center;
  background-size: cover;
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    background-image: ${`url(${headers.mobilePattern2})`};
    justify-content: flex-start;
    flex-direction: column;
    padding: 14.2rem 2.4rem 4rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${`url(${headers.tabletPattern2})`};
    min-width: 76.8rem;
    justify-content: flex-start;
    flex-direction: column;
    padding: 16rem 8rem 11.2rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
    align-items: center;
    background-image: ${`url(${headers.desktopPattern2})`};
    min-width: 144rem;
    padding: 17.9rem 0 18.5rem 0;
  }
`;

const DropdownListWrapper = styled.div`
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 60.8rem;
    top: -8rem;
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -14.5rem;
    min-width: 144rem;
  }
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.white};
  padding-top: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 2.4rem 4rem 0 4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    width: 106.8rem;
  }
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
