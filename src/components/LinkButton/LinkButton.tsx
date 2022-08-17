import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Assets
import icons from "assets/img/icons";
// Typography
import { SHLBold, MBold, XSBold } from "typography/";

interface ILinkButton {
  description: string;
  title: string;
  to: string;
  caption?: string;
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
      rel={caption ? "noopener noreferrer nofollow" : undefined}
    >
      <TextWrapper {...{ caption }}>
        {description ? (
          <Description>
            <MBold>{description}</MBold>
          </Description>
        ) : null}
        <Title>
          <SHLBold>{title}</SHLBold>
          <img aria-label="arrow-right" src={icons.chevronRight} width="24px" height="24px" />
        </Title>
        {caption ? (
          <Caption>
            <XSBold>{caption}</XSBold>
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
  width: ${({ icon }) => (icon ? "43.5rem" : "98.2rem")};
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  padding: ${({ caption, icon }) => (caption ? "3.9rem 4rem" : icon ? "3.2rem 4rem" : "4rem")};
  text-decoration: unset;
  &:hover {
    cursor: pointer;
    border: 0.2rem solid ${({ theme: { color } }) => color.blackAndWhite.black};
  }
`;

const TextWrapper = styled.div<{ caption?: string }>`
  max-width: 50rem;
  height: ${({ caption }) => (caption ? "5.6rem" : "5.4rem")};
`;

const Description = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
`;
const Caption = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

export default LinkButton;
