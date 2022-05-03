import React from "react";
import styled from "styled-components";
// Type
import { IMButtonProps } from "./MButton.type";
// Icons
import plus from "assets/images/icons/plus.svg";
import arrowRight from "assets/images/icons/arrow-right.svg";
// Typography
import { XSBody } from "typography/";

const MButton: React.FC<IMButtonProps> = ({ children, accent, disabled, onClick }) => {
  return (
    <MButtonWrapper {...{ accent, disabled, onClick }}>
      <ButtonIcon src={plus} {...{ disabled }} />
      <XSBody>{children}</XSBody>
      <ButtonIcon src={arrowRight} {...{ disabled }} />
    </MButtonWrapper>
  );
};

const MButtonWrapper = styled.button<{ accent?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 0.7rem 1.6rem;
  border: 0.1rem solid;
  border-radius: 30px;
  color: ${({ theme: { color } }) => color.greyScale.grey1};
  background-color: ${({ theme: { color } }) => color.greyScale.white};
  border-color: ${({ accent, theme: { color } }) =>
    accent ? color.greyScale.black : color.greyScale.grey3};
  &:hover {
    cursor: pointer;
    color: ${({ theme: { color } }) => color.greyScale.black};
    background-color: ${({ theme: { color } }) => color.primary.green4};
    border-color: ${({ theme: { color } }) => color.greyScale.black};
  }
  &:disabled {
    cursor: auto;
    color: ${({ theme: { color } }) => color.greyScale.grey3};
    background-color: ${({ theme: { color } }) => color.greyScale.white};
    border-color: ${({ theme: { color } }) => color.greyScale.grey3};
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
