import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Assets
import icons from "assets/img/icons";
// Typography
import { Typography } from "typography/";
// Libs
import { useResponsive } from "lib/hooks";

interface ILinkButton {
  description?: string;
  title: string;
  to: string;
  caption?: string;
  short?: boolean;
  icon?: string;
  external?: boolean;
}

const LinkButton: React.FC<ILinkButton> = ({ description, title, to, icon, caption, external }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <LinkButtonWrapper
      {...{ to, icon, caption }}
      as={caption || external ? "a" : Link}
      href={caption || external ? to : undefined}
      target={caption || external ? "_blank" : undefined}
      rel={caption || external ? "noopener noreferrer nofollow" : undefined}
    >
      <div>
        {description ? (
          <Description>
            <Typography type={isMobile ? "XSBold" : "MBold"}>{description}</Typography>
          </Description>
        ) : null}
        <Title>
          <Typography type={isMobile ? "MBold" : "SHLBold"}>{title}</Typography>
          <img aria-label="arrow-right" src={icons.chevronRight} width="24px" height="24px" />
        </Title>
        {caption ? (
          <Caption>
            <Typography type="XSBold">{caption}</Typography>
          </Caption>
        ) : null}
      </div>
      {(isTablet || isDesktop) && icon ? (
        <img alt="link-icon" src={icon} width="54px" height="54px" />
      ) : null}
    </LinkButtonWrapper>
  );
};

const LinkButtonWrapper = styled(Link)<{ icon?: string; caption?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  text-decoration: unset;
  &:hover {
    cursor: pointer;
    border: 0.2rem solid ${({ theme: { color } }) => color.black};
    background-color: ${({ theme: { color } }) => color.primary.green4};
  }
  @media ${({ theme }) => theme.device.mobile} {
    flex: 1;
    padding: 1.6rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: ${({ icon }) => (icon ? "43.5rem" : "98.2rem")};
    padding: ${({ caption }) => (caption ? "3.9rem 4rem" : "3rem 4rem")};
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: ${({ icon }) => (icon ? "43.5rem" : "98.2rem")};
    padding: ${({ caption }) => (caption ? "3.9rem 4rem" : "3rem 4rem")};
  }
`;

const Description = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  @media ${({ theme }) => theme.device.mobile} {
    margin-bottom: 0.8rem;
  }
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.black};
`;
const Caption = styled.div`
  margin-top: 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
`;

export default LinkButton;
