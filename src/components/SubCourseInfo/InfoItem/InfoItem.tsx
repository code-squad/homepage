import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Components
import { Tag } from "components/Tag";

interface IInfoItemProps {
  title: string;
  content: string;
  icon: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({ icon, title, content }) => {
  return icon ? (
    <InfoItemWrapper>
      <img src={icon} alt={`course-info-img-${title}`} />
      <Typography type="LBody" style={{ minWidth: "fit-content" }}>
        {title + (content ? "/" : "")}
      </Typography>
      <Typography type="SBody">{content}</Typography>
    </InfoItemWrapper>
  ) : (
    <TagWrapper>
      <Tag type="Black" text={title} />
    </TagWrapper>
  );
};

const InfoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-right: 0.4rem;
  }
`;
const TagWrapper = styled.li`
  &:not(:first-child) {
    margin-top: 1.6rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    &:not(:first-child) {
      margin-top: 2.4rem;
    }
  }
`;

export default InfoItem;
