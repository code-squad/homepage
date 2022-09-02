import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";

interface IInfoItemProps {
  title: string;
  content: string;
  icon: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({ icon, title, content }) => {
  return (
    <InfoItemWrapper>
      <img src={icon} alt={`course-info-img-${title}`} />
      <Typography type="LBody" style={{ minWidth: "fit-content" }}>
        {title + (content ? "/" : "")}
      </Typography>
      <Typography type="SBody">{content}</Typography>
    </InfoItemWrapper>
  );
};

const InfoItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;

export default InfoItem;
