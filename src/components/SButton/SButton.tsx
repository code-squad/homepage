import React from "react";
import styled, { useTheme } from "styled-components";
import Link from "gatsby-link";

export interface ISButtonProps {
  type: "Black" | "Green" | "Orange";
  children?: string;
  to: string;
}

const SButton: React.FC<ISButtonProps> = ({ type, children, to }) => {
  const {
    color: {
      black,
      primary: { green2, orange2 },
    },
  } = useTheme();

  let backgroundColor = "";
  if (type === "Black") backgroundColor = black;
  if (type === "Green") backgroundColor = green2;
  if (type === "Orange") backgroundColor = orange2;

  return <SButtonWrapper {...{ to, backgroundColor }}>{children}</SButtonWrapper>;
};

const SButtonWrapper = styled(Link)<{ backgroundColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4.8rem;
  height: 2.4rem;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  border-width: 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-decoration: none;
  cursor: pointer;
  pointer-events: auto;
  &:active {
    background-color: ${({ theme: { color } }) => color.greyScale.grey1};
    border-color: ${({ theme: { color } }) => color.greyScale.grey1};
  }
`;

export default SButton;
