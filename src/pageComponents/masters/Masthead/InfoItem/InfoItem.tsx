import React from "react";
import styled from "styled-components";
// Typography
import { MBody } from "typography";

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
      <InfoContent>
        <MBody>{content}</MBody>
      </InfoContent>
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
const InfoContent = styled.div`
  width: 28.3rem;
`;

export default InfoItem;
