import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Theme
import theme from "styles/theme";

const SButton: React.FC<{ children?: string; disabled?: boolean; onClick?: () => void }> = ({
  children,
  disabled,
  onClick,
}) => {
  const { color } = theme;

  return (
    <SButtonWrapper {...{ disabled, onClick }}>
      <XSBody fontColor={disabled ? color.greyScale.white20 : color.greyScale.white}>
        {children}
      </XSBody>
    </SButtonWrapper>
  );
};

const SButtonWrapper = styled.button`
  color: ${({ theme: { color } }) => color.greyScale.white};
  height: 3.2rem;
  padding: 0 0.8rem;
  border-width: 0;
  border-radius: 0.8rem;
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
    & > p {
      opacity: 0.2;
    }
  }
`;

export default SButton;
