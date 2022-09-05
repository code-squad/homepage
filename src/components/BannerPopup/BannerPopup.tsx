import React from "react";
import styled from "styled-components";
// Typography
import { Typography } from "typography";
// Assets
import icons from "assets/img/icons";

interface IBannerPopup {
  title: string;
  description: string;
  to: string;
  onCloseButtonClicked: () => void;
}

const BannerPopup: React.FC<IBannerPopup> = ({ title, description, to, onCloseButtonClicked }) => {
  return (
    <BannerPopupWrapper>
      <ContentWrapper href={to} target="_blank" rel="noopener noreferrer nofollow">
        <Typography type="MBold">{title}</Typography>
        {description && <Typography type="XSBold">{description}</Typography>}
      </ContentWrapper>
      <CloseButton onClick={onCloseButtonClicked}>
        <ButtonIcon src={icons.close} />
      </CloseButton>
    </BannerPopupWrapper>
  );
};

const BannerPopupWrapper = styled.div`
  width: 100vw;
  min-width: 36rem;
  min-height: 8rem;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
  }
`;

const ContentWrapper = styled.a`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme: { color } }) => color.white};
  text-decoration: none;
  & > *:not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

const CloseButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
  @media ${({ theme }) => theme.device.mobile} {
    right: 2.8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    right: 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    right: 8rem;
  }
`;

const ButtonIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  filter: invert(79%) sepia(29%) saturate(7%) hue-rotate(104deg) brightness(94%) contrast(91%);
`;

export default BannerPopup;
