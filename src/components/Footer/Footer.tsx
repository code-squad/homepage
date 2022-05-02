import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Theme
import theme from "styles/theme";
// Static
import { BUTTON, MESSAGE } from "assets/static/phrases";

const Footer: React.FC = () => {
  const {
    color: {
      greyScale: { white },
    },
  } = theme;

  return (
    <FooterWrapper>
      <ContentWrapper>
        <CompanyWrapper>
          <div>
            <XSBody bold fontColor={white}>
              {MESSAGE.COMPANY_NAME}
            </XSBody>
          </div>
          <CompanyInfomationWrapper>
            <div>
              <XSBody
                fontColor={white}
              >{`${MESSAGE.COMPANY_CEO_NAME} | ${MESSAGE.COMPANY_REGISTRATION_NUMBER}`}</XSBody>
              <XSBody
                fontColor={white}
              >{`${MESSAGE.COMPANY_ADDRESS} | ${MESSAGE.COMPANY_TEL_NUMBER}`}</XSBody>
              <XSBody fontColor={white}>{MESSAGE.COMPANY_EMAIL_ADDRESS}</XSBody>
            </div>
            <div>
              <XSBody bold fontColor={white}>
                {`${BUTTON.PRIVACY_POLICY} | ${BUTTON.REFUND_POLICY}`}
              </XSBody>
            </div>
          </CompanyInfomationWrapper>
        </CompanyWrapper>
        <MenuList>
          <MenuListItem>
            <XSBody bold fontColor={white}>
              {MESSAGE.COMPANY_NAME}
            </XSBody>
          </MenuListItem>
          <MenuListItem>
            <XSBody bold fontColor={white}>
              {MESSAGE.CURRICULUM}
            </XSBody>
            <Button href="https://codesquad.kr/masters">{BUTTON.MASTERS}</Button>
            <Button href="https://codesquad.kr/code-together">{BUTTON.CODE_TOGETHER}</Button>
          </MenuListItem>
          <MenuListItem>
            <Button bold href="https://codesquad.kr/faq">
              {BUTTON.FAQ}
            </Button>
          </MenuListItem>
          <MenuListItem>
            <XSBody bold fontColor={white}>
              {MESSAGE.SOCIAL_MEDIA}
            </XSBody>
            <Button href="https://codesquad-yoda.medium.com/" target="_blank">
              {BUTTON.BLOG}
            </Button>
            <Button href="https://www.youtube.com/channel/UC8OU76dfIn8jvWmXt8roMZg" target="_blank">
              {BUTTON.YOUTUBE}
            </Button>
            <Button href="https://www.facebook.com/codesquad.kr/" target="_blank">
              {BUTTON.FACEBOOK}
            </Button>
          </MenuListItem>
        </MenuList>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.nav`
  width: 100%;
  min-width: 144rem;
  min-height: 25rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
`;

const ContentWrapper = styled.div`
  min-width: 126rem;
  min-height: 25rem;
  padding: 0 8rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CompanyWrapper = styled.div`
  width: 31.6rem;
  height: 11.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CompanyInfomationWrapper = styled.div`
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuList = styled.div`
  width: 40.9rem;
  display: flex;
  justify-content: space-between;
`;

const MenuListItem = styled.div`
  width: 8.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem 0;
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
