import styled from "styled-components";

const LDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.lg};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.md};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SDisplay = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.display.sm};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.display.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

const XLBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xl};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xl};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const LBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.lg};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.md};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const XSBody = styled.p`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

export { LDisplay, MDisplay, SDisplay, XLBody, LBody, MBody, SBody, XSBody };
