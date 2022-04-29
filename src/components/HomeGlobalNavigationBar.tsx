import React from "react";
import styled from "styled-components";
// Global-Components
import { SButton } from "components/";

const HomeGlobalNavigationBar = ({ currentPage }: { currentPage?: string }) => {
  const rootUrl = "https://codesquad.kr/";
  const targetPageUrls = ["masters", "code-together", "faq"];
  const targetPageTitles = ["마스터즈 코스", "코드투게더", "자주 묻는 질문"];

  return (
    <HomeGlobalNavigationBarWrapper>
      <ContentWrapper>
        <HomeSigniture />
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
          <li>
            <SButton>소식받아보기</SButton>
          </li>
        </ButtonList>
      </ContentWrapper>
    </HomeGlobalNavigationBarWrapper>
  );
};

const HomeGlobalNavigationBarWrapper = styled.nav`
  width: 100%;
  min-width: 1440px;
  min-height: 80px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const ContentWrapper = styled.div`
  width: 1260px;
  padding: 0 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeSigniture = styled.img`
  min-width: 155px;
  min-height: 30px;
`;

const ButtonList = styled.ul`
  min-width: 424px;
  min-height: 32px;
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
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default HomeGlobalNavigationBar;
