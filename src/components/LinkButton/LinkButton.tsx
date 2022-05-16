import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Icons
import rightArrow from "assets/images/icons/arrow-right.svg";
// Typography
import { LBody, MBody } from "typography/";

interface ILinkButton {
  description: string;
  title: string;
  to: string;
  short?: boolean;
  icon?: string;
}

const LinkButton: React.FC<ILinkButton> = ({ description, title, to, icon }) => {
  return (
    <LinkButtonWrapper {...{ to }} icon={icon}>
      <TextWrapper>
        <Description>
          <MBody bold>{description}</MBody>
        </Description>
        <Title>
          <LBody bold>{title}</LBody>
          <img aria-label="arrow-right" src={rightArrow} width="24px" height="24px" />
        </Title>
      </TextWrapper>
      {icon ? <img alt="link-icon" src={icon} width="80px" height="80px" /> : null}
    </LinkButtonWrapper>
  );
};

const LinkButtonWrapper = styled(Link)<{ icon?: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ icon }) => (icon ? "43.5rem" : "89.8rem")};
  height: ${({ icon }) => (icon ? "6.4rem" : "5.4rem")};
  border-radius: 0.8rem;
  border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.greyScale.offWhite};
  padding: 4rem;
  text-decoration: unset;
  transition: border 0.3s;
  &:hover {
    border: 0.2rem solid ${({ theme: { color } }) => color.greyScale.black};
  }
`;

const TextWrapper = styled.div`
  max-width: 50rem;
  height: 5.4rem;
`;

const Description = styled.div`
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme: { color } }) => color.greyScale.black};
`;

export default LinkButton;
