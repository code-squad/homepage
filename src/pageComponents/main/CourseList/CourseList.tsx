import React from "react";
import styled from "styled-components";
// Components
import { LinkButton } from "components";
// Assets
import mastersIcon from "assets/images/icons/masters.svg";
import codeTogetherIcon from "assets/images/icons/code-together.svg";
import { LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const CourseList: React.FC = () => {
  return (
    <CourseWrapper>
      <CourseListWrapper>
        <LinkButton
          to={INTERNAL.MASTERS}
          title={LINK.MASTERS}
          description={LINK_DESCRIPTION.MASTERS}
          icon={mastersIcon}
        />
        <LinkButton
          to={INTERNAL.CODE_TOGETHER}
          title={LINK.CODE_TOGETHER}
          description={LINK_DESCRIPTION.CODE_TOGETHER}
          icon={codeTogetherIcon}
        />
      </CourseListWrapper>
    </CourseWrapper>
  );
};

const CourseWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
`;

const CourseListWrapper = styled.ul`
  padding-top: 8rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default CourseList;
