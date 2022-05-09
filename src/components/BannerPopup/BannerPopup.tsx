import React from "react";
import styled from "styled-components";
// Typography
import { MBody, XSBody } from "typography";
// Assets
import close from "assets/images/icons/close.svg";

interface IBannerPopup {
  title: string;
  description: string;
  onCloseButtonClicked: () => void;
}

const BannerPopup: React.FC<IBannerPopup> = ({ title, description, onCloseButtonClicked }) => {
  return (
    <BannerPopupWrapper>
      <ContentWrapper>
        <MBody bold>{title}</MBody>
        <XSBody bold>{description}</XSBody>
      </ContentWrapper>
      <CloseButton onClick={onCloseButtonClicked}>
        <ButtonIcon src={close} />
      </CloseButton>
    </BannerPopupWrapper>
  );
};

const BannerPopupWrapper = styled.div`
  width: 100%;
  min-width: 144rem;
  min-height: 8rem;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
  color: ${({ theme: { color } }) => color.greyScale.white};
`;

const CloseButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  right: 8rem;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border: 0;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;

const ButtonIcon = styled.img`
  width: 1.002rem;
  height: 1.002rem;
  filter: invert(79%) sepia(29%) saturate(7%) hue-rotate(104deg) brightness(94%) contrast(91%);
`;

export default BannerPopup;
