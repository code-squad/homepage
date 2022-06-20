import React from "react";
import styled from "styled-components";
// Typography
import { MBody } from "typography";
// Assets

interface IInfoItemProps {
  src: string;
  label: string;
  content: string;
}

const InfoItem: React.FC<IInfoItemProps> = ({ src, label, content }) => {
  return (
    <InfoItemWrapper>
      <InfoLabel>
        <img src={src} style={{ marginRight: ".8rem" }} />
        <MBody bold>{label}</MBody>
      </InfoLabel>
      <MBody style={{ whiteSpace: "pre-line" }}>{content}</MBody>
    </InfoItemWrapper>
  );
};

const InfoItemWrapper = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.6rem;
`;
const InfoLabel = styled.label`
  display: flex;
  align-items: center;
  width: 12rem;
  margin-right: 1.6rem;
`;

export default InfoItem;
