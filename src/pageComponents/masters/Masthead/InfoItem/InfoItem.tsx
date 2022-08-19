import React from "react";
import styled from "styled-components";
// Type
import icons from "assets/img/icons";
// Typography
import { LBody, SBody } from "typography";

interface IInfoItemProps {
  title: string;
  content: string;
  icon: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({ icon, title, content }) => {
  return (
    <InfoItemWrapper>
      <img src={icon} alt={`course-info-img-${title}`} />
      <LBody>{title + (content ? "/" : "")}</LBody>
      <SBody>{content}</SBody>
    </InfoItemWrapper>
  );
};

const InfoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

export default InfoItem;
