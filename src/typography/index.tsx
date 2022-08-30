import React from "react";
import styled from "styled-components";
import { CSSProperties } from "styled-components";

const LDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.lg};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.md};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.sm};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

const HLBold = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.xl};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.xl};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SHLBold = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.lg};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MBold = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.md};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SBold = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.sm};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const XSBold = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.bold.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.medium};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.bold.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

const XLBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xl};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xl};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const LBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.lg};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.md};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const XSBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

const typographys = {
  LDisplay,
  MDisplay,
  SDisplay,
  HLBold,
  SHLBold,
  MBold,
  SBold,
  XSBold,
  XLBody,
  LBody,
  MBody,
  SBody,
  XSBody,
};

interface ITypography {
  type: keyof typeof typographys;
  children: React.ReactNode;
  style?: CSSProperties;
}

const Typography: React.FC<ITypography> = ({ type, style, children }) => {
  const TargetTypography = typographys[type];
  return <TargetTypography {...{ style }}>{children}</TargetTypography>;
};

export {
  LDisplay,
  MDisplay,
  SDisplay,
  HLBold,
  SHLBold,
  MBold,
  SBold,
  XSBold,
  XLBody,
  LBody,
  MBody,
  SBody,
  XSBody,
  Typography,
};
