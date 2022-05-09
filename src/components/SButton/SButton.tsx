import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

export interface ISButtonProps {
  children?: string;
  disabled?: boolean;
  to: string;
}

const SButton: React.FC<ISButtonProps> = ({ children, disabled, to }) => {
  return <SButtonWrapper {...{ disabled, to }}>{children}</SButtonWrapper>;
};

const SButtonWrapper = styled(Link)`
  display: block;
  height: 3.2rem;
  padding: 0 0.8rem;
  color: ${({ theme: { color } }) => color.greyScale.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: 3.2rem;
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  border-color: ${({ theme: { color } }) => color.greyScale.black};
  border-width: 0;
  border-radius: 0.8rem;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
  &:active {
    background-color: ${({ theme: { color } }) => color.greyScale.grey1};
    border-color: ${({ theme: { color } }) => color.greyScale.grey1};
  }
  &:disabled {
    cursor: auto;
    color: ${({ theme: { color } }) => color.greyScale.white20};
    background-color: ${({ theme: { color } }) => color.greyScale.grey2};
    border-color: ${({ theme: { color } }) => color.greyScale.grey2};
  }
`;

export default SButton;
