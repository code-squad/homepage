import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
// Typography
import { MBody, MDisplay } from "typography";
// Assets
import headEmoji from "assets/images/icons/head-emoji.svg";
import calander from "assets/images/icons/calander.svg";
import coin from "assets/images/icons/coin.svg";
import book from "assets/images/icons/book.svg";

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
      <MBody>{content}</MBody>
    </InfoItemWrapper>
  );
};

const InfoItemWrapper = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;
const InfoLabel = styled.label`
  display: flex;
  align-items: center;
  width: 12rem;
  margin-right: 1.6rem;
`;

export default InfoItem;
