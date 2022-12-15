import React from "react";
import styled from "styled-components";
// Components
import { LinkButton, TitleSet } from "components";
// Assets
import thumbnails from "assets/img/illusts/thumbnail";
import { TITLE, LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const CourseList: React.FC = () => {
  return (
    <CourseWrapper>
      <TitleSet title={TITLE.VIEW_COURSES}></TitleSet>
      <CourseListWrapper>
        <LinkButton
          to={INTERNAL.PRE_COURSE}
          title={LINK.PRE_COURSE}
          description={LINK_DESCRIPTION.PRE_COURSE}
          icon={thumbnails.mediumCodeTogether}
        />
        {/* <LinkButton
          to={INTERNAL.MASTERS}
          title={LINK.MASTERS_MAX}
          description={LINK_DESCRIPTION.MASTERS}
          icon={thumbnails.mediumMastersCourse}
        /> */}
        <LinkButton
          to={INTERNAL.CODE_TOGETHER}
          title={LINK.CODE_TOGETHER}
          description={LINK_DESCRIPTION.CODE_TOGETHER}
          icon={thumbnails.mediumCodeTogether}
        />
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    margin-top: 8rem;
    margin-bottom: 12rem;
    & > *:not(:last-child) {
      margin-bottom: 2.4rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 18rem;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    margin: 0 auto;
    margin-top: 8rem;
    margin-bottom: 18rem;
    & > *:not(:last-child) {
      margin-bottom: 3.2rem;
    }
  }
`;

const CourseListWrapper = styled.ul`
  @media ${({ theme }) => theme.device.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.6rem 1.6rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.1rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    justify-content: center;
    & > *:not(:last-child) {
      margin-right: 2.4rem;
    }
  }
`;

export default CourseList;
