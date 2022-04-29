import React from "react";
import styled from "styled-components";
// Global-Components
import { SButton } from "components/";

const HomeGlobalNavigationBar = ({ currentPage }: { currentPage?: string }) => {
  const rootUrl = "https://codesquad.kr/";
  const targetPageUrls = ["masters", "code-together", "faq"];
  const targetPageTitles = ["마스터즈 코스", "코드투게더", "자주 묻는 질문"];

  const handleSubscribeBtnClick = () => {
    window.open("https://codesquad.kr", "_blank");
  };

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
            <SButton onClick={handleSubscribeBtnClick}>소식받아보기</SButton>
          </li>
        </ButtonList>
      </ContentWrapper>
    </HomeGlobalNavigationBarWrapper>
  );
};

const HomeGlobalNavigationBarWrapper = styled.nav`
  width: 100%;
  min-width: 144rem;
  min-height: 8rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const ContentWrapper = styled.div`
  width: 126rem;
  padding: 0 8rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HomeSigniture = styled.img`
  min-width: 15.5rem;
  min-height: 3rem;
`;

const ButtonList = styled.ul`
  min-width: 42.4rem;
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
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default HomeGlobalNavigationBar;
