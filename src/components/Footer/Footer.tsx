import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Static
import { LINK, MESSAGE } from "assets/static/phrases";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <CompanyWrapper>
          <div>
            <XSBody bold>{MESSAGE.COMPANY_NAME}</XSBody>
          </div>
          <CompanyInfomationWrapper>
            <div>
              <XSBody>{`${MESSAGE.COMPANY_CEO_NAME} | ${MESSAGE.COMPANY_REGISTRATION_NUMBER}`}</XSBody>
              <XSBody>{`${MESSAGE.COMPANY_ADDRESS} | ${MESSAGE.COMPANY_TEL_NUMBER}`}</XSBody>
              <XSBody>{MESSAGE.COMPANY_EMAIL_ADDRESS}</XSBody>
            </div>
            <div>
              <XSBody bold>{`${LINK.PRIVACY_POLICY} | ${LINK.REFUND_POLICY}`}</XSBody>
            </div>
          </CompanyInfomationWrapper>
        </CompanyWrapper>
        <MenuListWrapper>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.COMPANY_NAME}</XSBody>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.CURRICULUM}</XSBody>
            </li>
            <li>
              <Button href="https://codesquad.kr/masters">{LINK.MASTERS}</Button>
            </li>
            <li>
              <Button href="https://codesquad.kr/code-together">{LINK.CODE_TOGETHER}</Button>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <Button bold href="https://codesquad.kr/faq">
                {LINK.FAQ}
              </Button>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.SOCIAL_MEDIA}</XSBody>
            </li>
            <li>
              <Button href="https://codesquad-yoda.medium.com/" target="_blank">
                {LINK.BLOG}
              </Button>
            </li>
            <li>
              <Button
                href="https://www.youtube.com/channel/UC8OU76dfIn8jvWmXt8roMZg"
                target="_blank"
              >
                {LINK.YOUTUBE}
              </Button>
            </li>
            <li>
              <Button href="https://www.facebook.com/codesquad.kr/" target="_blank">
                {LINK.FACEBOOK}
              </Button>
            </li>
          </MenuList>
        </MenuListWrapper>
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
  color: ${({ theme: { color } }) => color.greyScale.white};
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

const MenuListWrapper = styled.div`
  width: 40.9rem;
  display: flex;
  justify-content: space-between;
`;

const MenuList = styled.ul`
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
