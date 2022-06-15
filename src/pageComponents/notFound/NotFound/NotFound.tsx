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
  height: calc(100vh - 25rem);
  min-width: 144rem;
  min-height: 53.9rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NotFoundMessage = styled.span`
  font-size: 30rem;
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  line-height: 37.8rem;
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
`;

export default NotFound;
