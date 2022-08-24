import React from "react";
import styled from "styled-components";
// Components
import { LinkButton, TitleSet } from "components";
// Assets
import { TITLE, LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL, EXTERNAL } from "assets/static/urls";

const CourseList: React.FC = () => {
  return (
    <CourseWrapper>
      <TitleSet subtitle={TITLE.SCHEDULED_COURSE}></TitleSet>
      <CourseListWrapper>
        <LinkButton
          to={INTERNAL.JAVASCRIPT}
          title={LINK.JAVASCRIPT}
          description={LINK_DESCRIPTION.JAVASCRIPT}
        />
        <LinkButton
          to={EXTERNAL.CLEAN_SWIFT}
          title={LINK.CLEAN_SWIFT}
          description={LINK_DESCRIPTION.CLEAN_SWIFT}
          external
        />
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.ul`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
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
