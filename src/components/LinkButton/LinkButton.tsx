import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Assets
import icons from "assets/img/icons";
// Typography
import { LBody, MBody, XSBody } from "typography/";

interface ILinkButton {
  description: string;
  title: string;
  to: string;
  caption: string;
  short?: boolean;
  icon?: string;
}

const LinkButton: React.FC<ILinkButton> = ({ description, title, to, icon, caption }) => {
  return (
    <LinkButtonWrapper
      {...{ to, icon, caption }}
      as={caption ? "a" : Link}
      href={caption && to}
      target={caption && "_blank"}
    >
      <TextWrapper {...{ caption }}>
        <Description>
          <MBody bold>{description}</MBody>
        </Description>
        <Title>
          <LBody bold>{title}</LBody>
          <img aria-label="arrow-right" src={icons.chevronRight} width="24px" height="24px" />
        </Title>
        {caption ? (
          <Caption>
            <XSBody bold>{caption}</XSBody>
          </Caption>
        ) : null}
      </TextWrapper>
      {icon ? <img alt="link-icon" src={icon} width="80px" height="80px" /> : null}
    </LinkButtonWrapper>
  );
};

const LinkButtonWrapper = styled(Link)<{ icon?: string; caption?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ icon }) => (icon ? "43.5rem" : "106.2rem")};
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
  padding: ${({ caption, icon }) => (caption ? "2.7rem 4rem" : icon ? "3.2rem 4rem" : "4rem")};
  text-decoration: unset;
  &:hover {
    cursor: pointer;
    border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.black};
  }
`;

const TextWrapper = styled.div<{ caption?: string }>`
  max-width: 50rem;
  height: ${({ caption }) => (caption ? "8rem" : "5.4rem")};
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

export default LinkButton;
