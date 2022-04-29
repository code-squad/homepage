import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Theme
import theme from "styles/theme";

const Footer = () => {
  const { color } = theme;

  return (
    <FooterWrapper>
      <ContentWrapper>
        <CompanyWrapper>
          <div>
            <XSBody bold fontColor={color.greyScale.white}>
              코드스쿼드
            </XSBody>
          </div>
          <CompanyInfomationWrapper>
            <div>
              <XSBody fontColor={color.greyScale.white}>
                대표자:김정 | 사업자번호:676-88-00504
              </XSBody>
              <XSBody fontColor={color.greyScale.white}>
                주소:강남구 역삼동 836-24 역삼빌딩 4층 | 전화:070-4117-1005
              </XSBody>
              <XSBody fontColor={color.greyScale.white}>yoda@codesquad.kr</XSBody>
            </div>
            <div>
              <XSBody bold fontColor={color.greyScale.white}>
                개인정보 취급방침 | 환불규정
              </XSBody>
            </div>
          </CompanyInfomationWrapper>
        </CompanyWrapper>
        <MenuListWrapper>
          <MenuList>
            <XSBody bold fontColor={color.greyScale.white}>
              코드스쿼드
            </XSBody>
          </MenuList>
          <MenuList>
            <XSBody bold fontColor={color.greyScale.white}>
              교육과정
            </XSBody>
            <Button href="https://codesquad.kr/masters">마스터즈 코스</Button>
            <Button href="https://codesquad.kr/code-together">코드투게더</Button>
          </MenuList>
          <MenuList>
            <Button bold href="https://codesquad.kr/faq">
              자주 묻는 질문
            </Button>
          </MenuList>
          <MenuList>
            <XSBody bold fontColor={color.greyScale.white}>
              소셜 미디어
            </XSBody>
            <Button href="https://codesquad-yoda.medium.com/" target="_blank">
              블로그
            </Button>
            <Button href="https://www.youtube.com/channel/UC8OU76dfIn8jvWmXt8roMZg" target="_blank">
              유튜브
            </Button>
            <Button href="https://www.facebook.com/codesquad.kr/" target="_blank">
              페이스북
            </Button>
          </MenuList>
        </MenuListWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.nav`
  width: 100%;
  min-width: 1440px;
  min-height: 250px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
`;

const ContentWrapper = styled.div`
  min-width: 1260px;
  min-height: 250px;
  padding: 0 80px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyWrapper = styled.div`
  width: 316px;
  height: 114px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyInfomationWrapper = styled.div`
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuListWrapper = styled.div`
  width: 409px;
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.div`
  width: 85px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
`;

const Button = styled.a<{ bold?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ bold, theme: { fontWeight } }) =>
    bold ? fontWeight.medium : fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
