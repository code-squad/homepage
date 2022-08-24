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
      <TitleSet subtitle={TITLE.VIEW_COURSES}></TitleSet>
      <CourseListWrapper>
        <LinkButton
          to={INTERNAL.MASTERS}
          title={LINK.MASTERS}
          description={LINK_DESCRIPTION.MASTERS}
          icon={thumbnails.mediumMastersCourse}
        />
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
  width: 106.2rem;
  padding: 0 18.9rem;
  margin 0 auto;
  margin-top: 8rem;
  margin-bottom: 18rem;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 3.2rem;
  }
`;

const CourseListWrapper = styled.ul`
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export default CourseList;
