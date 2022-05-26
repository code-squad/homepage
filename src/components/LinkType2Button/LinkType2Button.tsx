import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Assets
import icons from "assets/img/icons";
// Typography
import { LBody, MBody, XSBody } from "typography/";

interface ILinkType2Button {
  description: string;
  title: string;
  to: string;
  caption: string;
}

const LinkType2Button: React.FC<ILinkType2Button> = ({ description, title, caption, to }) => {
  return (
    <LinkType2ButtonWrapper {...{ to }} target="_blank">
      <TextWrapper>
        <Description>
          <MBody bold>{description}</MBody>
        </Description>
        <Title>
          <LBody bold>{title}</LBody>
          <img
            aria-label="arrow-right"
            src={icons.chevronRight}
            width="24px"
            height="24px"
            style={{ margin: "auto" }}
          />
        </Title>
        <Caption>
          <XSBody bold>{caption}</XSBody>
        </Caption>
      </TextWrapper>
    </LinkType2ButtonWrapper>
  );
};

const LinkType2ButtonWrapper = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 106.2rem;
  height: 7.4rem;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
  padding: 2.7rem 4rem;
  text-decoration: unset;
  &:hover {
    cursor: pointer;
    border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.black};
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.greyScale.black};
`;
const Caption = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

export default LinkType2Button;
