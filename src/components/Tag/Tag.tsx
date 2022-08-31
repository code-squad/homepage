import React from "react";
import styled, { useTheme } from "styled-components";
import { Typography } from "typography";

export interface ITagProps {
  type: "Black" | "Green" | "Orange";
  text?: string;
}

const Tag: React.FC<ITagProps> = ({ type, text }) => {
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

  return (
    <TagWrapper {...{ backgroundColor }}>
      <Typography type="XSBody">{text}</Typography>
    </TagWrapper>
  );
};

const TagWrapper = styled.button<{ backgroundColor?: string }>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
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

export default Tag;
