import React from "react";
import styled from "styled-components";

const TeamGlobalNavigationBar = ({ currentPage }: { currentPage?: string }) => {
  const rootUrl = "https://codesquad.kr/";
  const targetPageUrls = ["team-culture", "recruit"];
  const targetPageTitles = ["팀 문화", "채용소식"];

  return (
    <TeamGlobalNavigationBarWrapper>
      <ContentWrapper>
        <TeamSigniture />
        <ButtonList>
          {targetPageUrls.map((targetPageUrl: string, index: number) => (
            <li key={targetPageUrl}>
              <Button
                currentPage={currentPage === targetPageUrls[index]}
                href={rootUrl + targetPageUrl}
              >
                {targetPageTitles[index]}
              </Button>
            </li>
          ))}
        </ButtonList>
      </ContentWrapper>
    </TeamGlobalNavigationBarWrapper>
  );
};

const TeamGlobalNavigationBarWrapper = styled.nav`
  width: 100%;
  min-width: 144rem;
  position: fixed;
  display: flex;
  justify-content: center;
  z-index: 10;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const ContentWrapper = styled.div`
  min-width: 126rem;
  min-height: 8rem;
  padding: 0 8rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TeamSigniture = styled.img`
  min-width: 20.2rem;
  min-height: 3rem;
`;

const ButtonList = styled.ul`
  min-width: 12.5rem;
  min-height: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.a<{ currentPage?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.black};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  font-weight: ${({ currentPage, theme: { fontWeight } }) =>
    currentPage ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.sm};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  text-decoration: ${({ currentPage }) => (currentPage ? "underline" : "none")};
`;

export default TeamGlobalNavigationBar;
