import React from "react";
import styled from "styled-components";
// Assets
import { TITLE } from "assets/static/phrases";

const NotFound: React.FC = () => {
  return (
    <NotFoundWrapper>
      <NotFoundMessage>{TITLE.NOT_FOUND}</NotFoundMessage>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 29rem);
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${({ theme }) => theme.device.mobile} {
    height: calc(100vh - 30.4rem);
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.tablet} {
    height: calc(100vh - 29.8rem);
    margin: 0 auto;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    min-width: 144rem;
  }
`;

const NotFoundMessage = styled.span`
  font-size: 30rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: 37.8rem;
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 10rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 20rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 30rem;
  }
`;

export default NotFound;
