import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Typography
import { MBody } from "typography";
// Assets
import arrowRight from "assets/images/icons/arrow-right.svg";
import plus from "assets/images/icons/plus.svg";

export interface IMButtonProps {
  children?: string;
  accent?: boolean;
  disabled?: boolean;
  to: string;
}

const MButton: React.FC<IMButtonProps> = ({ children, accent, disabled, to }) => {
  return (
    <MButtonWrapper $accent={accent} $disabled={disabled} {...{ to }}>
      <ButtonIcon src={plus} {...{ disabled }} />
      <MBody
        bold
        style={{
          marginLeft: "0.4rem",
          marginRight: "0.4rem",
          marginTop: "0.4rem",
        }}
      >
        {children}
      </MBody>
      <ButtonIcon src={arrowRight} {...{ disabled }} />
    </MButtonWrapper>
  );
};

const MButtonWrapper = styled(Link)<{ $accent?: boolean; $disabled?: boolean }>`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0 2.4rem;
  color: ${({ $disabled, theme: { color } }) =>
    $disabled ? color.greyScale.grey3 : color.greyScale.grey1};
  border: 0.1rem solid;
  border-radius: 3rem;
  border-color: ${({ $accent, $disabled, theme: { color } }) =>
    $disabled ? color.greyScale.grey3 : $accent ? color.greyScale.black : color.greyScale.grey3};
  background-color: ${({ theme: { color } }) => color.greyScale.white};
  text-decoration: none;
  text-align: center;
  cursor: ${({ $disabled }) => ($disabled ? "unset" : "pointer")};
  pointer-events: ${({ $disabled }) => ($disabled ? "none" : "auto")};
  &:hover {
    color: ${({ $disabled, theme: { color } }) =>
      $disabled ? color.greyScale.grey3 : color.greyScale.black};
    background-color: ${({ $disabled, theme: { color } }) =>
      $disabled ? color.greyScale.white : color.primary.green4};
    border-color: ${({ $disabled, theme: { color } }) =>
      $disabled ? color.greyScale.grey3 : color.greyScale.black};
  }
  &:disabled {
    cursor: auto;
  }
`;

const ButtonIcon = styled.img<{ disabled?: boolean }>`
  width: 1.6rem;
  height: 1.6rem;
  filter: ${({ disabled }) =>
    disabled
      ? "invert(79%) sepia(29%) saturate(7%) hue-rotate(104deg) brightness(94%) contrast(91%)"
      : "none"};
`;

// const PlusIcon = styled(plus)`
//   & > path {
//     stroke: red;
//   }
// `;

export default MButton;
