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
    </CourseWrapper>
  );
};

const CourseWrapper = styled.ul`
  min-width: 144rem;
  padding-top: 8rem;
  padding-bottom: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export default CourseList;
