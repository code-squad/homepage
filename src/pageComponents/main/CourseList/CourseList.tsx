import React from "react";
import styled from "styled-components";
// Components
import { LinkButton } from "components";
// Assets
import thumbnails from "assets/img/illusts/thumbnail";
import { LINK_DESCRIPTION, LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";

const CourseList: React.FC = () => {
  return (
    <CourseWrapper>
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
    </CourseWrapper>
  );
};

const CourseWrapper = styled.ul`
  min-width: 144rem;
  margin-top: 8rem;
  margin-bottom: 15rem;
  display: flex;
  justify-content: center;
  & > *:not(:last-child) {
    margin-right: 2.4rem;
  }
`;

export default CourseList;
