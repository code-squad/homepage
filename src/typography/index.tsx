import styled from "styled-components";

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

const XLBody = styled.p<{ bold?: boolean }>`
  font-size: ${({ bold, theme: { fontSize } }) => (bold ? "2.6rem" : fontSize.body.xl)};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ bold, theme: { lineHeight } }) => (bold ? "3.8rem" : lineHeight.body.xl)};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const LBody = styled.p<{ bold?: boolean }>`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.lg};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.lg};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const MBody = styled.p<{ bold?: boolean }>`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.md};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.md};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const SBody = styled.p<{ bold?: boolean }>`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;
const XSBody = styled.p<{ bold?: boolean; fontColor?: string }>`
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  color: ${({ fontColor, theme: { color } }) => fontColor || color.greyScale.black};
`;

export { LDisplay, MDisplay, SDisplay, XLBody, LBody, MBody, SBody, XSBody };
