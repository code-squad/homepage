import React from "react";
import styled from "styled-components";
// Typography
import { MBold } from "typography";
// Assets
import icons from "assets/img/icons";

export interface IEButtonProps {
  children?: string;
  accent?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const EButton: React.FC<IEButtonProps> = ({ children, accent, disabled, onClick }) => {
  return (
    <EButtonWrapper {...{ accent, disabled, onClick }}>
      <ButtonIcon src={icons.plus} {...{ disabled }} />
      <MBold>{children}</MBold>
    </EButtonWrapper>
  );
};

const EButtonWrapper = styled.button<{ accent?: boolean; disabled?: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2.4rem;
  color: ${({ accent, disabled, theme: { color } }) =>
    disabled ? color.greyScale.grey4 : accent ? color.blackAndWhite.white : color.greyScale.grey1};
  border: 0.1rem solid;
  border-radius: 3rem;
  border-color: ${({ accent, disabled, theme: { color } }) =>
    disabled ? color.greyScale.grey4 : accent ? color.blackAndWhite.black : color.greyScale.grey3};
  background-color: ${({ disabled, accent, theme: { color } }) =>
    disabled
      ? color.blackAndWhite.white
      : accent
      ? color.blackAndWhite.black
      : color.blackAndWhite.white};
  text-decoration: none;
  text-align: center;
  cursor: ${({ disabled }) => (disabled ? "unset" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
  &:hover {
    color: ${({ disabled, theme: { color } }) =>
      disabled ? color.greyScale.grey4 : color.blackAndWhite.black};
    background-color: ${({ disabled, theme: { color } }) =>
      disabled ? color.blackAndWhite.white : color.primary.green4};
    border-color: ${({ disabled, theme: { color } }) =>
      disabled ? color.greyScale.grey4 : color.blackAndWhite.black};
  }
  &:disabled {
    cursor: auto;
  }
`;

const ButtonIcon = styled.img<{ accent?: boolean; disabled?: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  filter: ${({ accent, disabled }) =>
    disabled
      ? "invert(87%) sepia(1%) saturate(45%) hue-rotate(314deg) brightness(105%) contrast(85%)"
      : accent
      ? "invert(99%) sepia(99%) saturate(0%) hue-rotate(346deg) brightness(107%) contrast(101%)"
      : "none"};
  ${EButtonWrapper}:hover & {
    filter: ${({ accent, disabled }) =>
      disabled
        ? "invert(85%) sepia(0%) saturate(0%) hue-rotate(69deg) brightness(100%) contrast(100%)"
        : accent
        ? "none"
        : "invert(8%) sepia(4%) saturate(11%) hue-rotate(79deg) brightness(104%) contrast(94%)"}
`;

export default EButton;
