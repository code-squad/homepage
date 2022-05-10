import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export interface ISButtonProps {
  children?: string;
  disabled?: boolean;
  to: string;
}

const SButton: React.FC<ISButtonProps> = ({ children, disabled, to }) => {
  return (
    <SButtonWrapper $disabled={disabled} {...{ to }}>
      {children}
    </SButtonWrapper>
  );
};

const SButtonWrapper = styled(Link)<{ $disabled?: boolean }>`
  display: inline-block;
  height: 3.2rem;
  padding: 0 0.8rem;
  color: ${({ $disabled, theme: { color } }) =>
    $disabled ? color.greyScale.white20 : color.greyScale.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: 3.2rem;
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  border-color: ${({ $disabled, theme: { color } }) =>
    $disabled ? color.greyScale.grey2 : color.greyScale.black};
  border-width: 0;
  border-radius: 0.8rem;
  background-color: ${({ $disabled, theme: { color } }) =>
    $disabled ? color.greyScale.grey2 : color.greyScale.black};
  text-decoration: none;
  cursor: pointer;
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  &:active {
    background-color: ${({ theme: { color } }) => color.greyScale.grey1};
    border-color: ${({ theme: { color } }) => color.greyScale.grey1};
  }
`;

export default SButton;
