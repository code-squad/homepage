import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Theme
import theme from "styles/theme";

const SButton = ({
  children,
  disabled,
  onClick,
}: {
  children?: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const { color } = theme;

  return (
    <ButtonWrapper {...{ disabled, onClick }}>
      <XSBody
        fontColor={disabled ? color.greyScale.white20 : color.greyScale.white}
        opacity={disabled ? "0.2" : "1"}
      >
        {children}
      </XSBody>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.button`
  color: ${({ theme: { color } }) => color.greyScale.white};
  height: 32px;
  padding: 0 8px;
  border-width: 0px;
  border-radius: 8px;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
  border-color: ${({ theme: { color } }) => color.greyScale.black};
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme: { color } }) => color.greyScale.grey1};
    border-color: ${({ theme: { color } }) => color.greyScale.grey1};
  }
  &:disabled {
    cursor: auto;
    background-color: ${({ theme: { color } }) => color.greyScale.grey2};
    border-color: ${({ theme: { color } }) => color.greyScale.grey2};
  }
`;

export default SButton;
