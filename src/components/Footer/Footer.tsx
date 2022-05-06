import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Static
import { BUTTON, LINK, MESSAGE } from "assets/static/phrases";
import { INTERNAL, EXTERNAL } from "assets/static/urls";
import { Link } from "gatsby";

const Footer: React.FC = () => {
  const handlePrivacyPolicyClick = () => {};
  const handleRefundPolicyClick = () => {};

  return (
    <FooterWrapper>
      <ContentWrapper>
        <CompanyWrapper>
          <div>
            <XSBody bold>{MESSAGE.COMPANY_NAME}</XSBody>
          </div>
          <CompanyInfomationWrapper>
            <div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_CEO_NAME}</XSBody>
                <XSBody as="span"> | </XSBody>
                <XSBody as="span">{MESSAGE.COMPANY_REGISTRATION_NUMBER}</XSBody>
              </div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_ADDRESS}</XSBody>
                <XSBody as="span"> | </XSBody>
                <XSBody as="span">{MESSAGE.COMPANY_TEL_NUMBER}</XSBody>
                <XSBody>{MESSAGE.COMPANY_EMAIL_ADDRESS}</XSBody>
              </div>
            </div>
            <div>
              <PopupButton>{BUTTON.PRIVACY_POLICY}</PopupButton>
              <XSBody as="span"> | </XSBody>
              <PopupButton>{BUTTON.REFUND_POLICY}</PopupButton>
            </div>
          </CompanyInfomationWrapper>
        </CompanyWrapper>
        <MenuListWrapper>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.COMPANY_NAME}</XSBody>
            </li>
            <li>
              <InternalLinkButton to={INTERNAL.TEAM_CULTURE}>
                {LINK.TEAM_CULTURE}
              </InternalLinkButton>
            </li>
            <li>
              <InternalLinkButton to={INTERNAL.RECRUIT}>{LINK.RECRUIT}</InternalLinkButton>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.CURRICULUM}</XSBody>
            </li>
            <li>
              <InternalLinkButton to={INTERNAL.MASTERS}>{LINK.MASTERS}</InternalLinkButton>
            </li>
            <li>
              <InternalLinkButton to={INTERNAL.CODE_TOGETHER}>
                {LINK.CODE_TOGETHER}
              </InternalLinkButton>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <InternalLinkButton $bold to={INTERNAL.FAQ}>
                {LINK.FAQ}
              </InternalLinkButton>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.SOCIAL_MEDIA}</XSBody>
            </li>
            <li>
              <ExternalLinkButton href={EXTERNAL.BLOG} target="_blank">
                {LINK.BLOG}
              </ExternalLinkButton>
            </li>
            <li>
              <ExternalLinkButton href={EXTERNAL.YOUTUBE} target="_blank">
                {LINK.YOUTUBE}
              </ExternalLinkButton>
            </li>
            <li>
              <ExternalLinkButton href={EXTERNAL.FACEBOOK} target="_blank">
                {LINK.FACEBOOK}
              </ExternalLinkButton>
            </li>
          </MenuList>
        </MenuListWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
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
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
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

const PopupButton = styled.button`
  padding: 0;
  color: ${({ theme: { color } }) => color.greyScale.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  background-color: transparent;
  border: 0;
  cursor: pointer;
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

const InternalLinkButton = styled(Link)<{ $bold?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.white};
  font-weight: ${({ $bold, theme: { fontWeight } }) =>
    $bold ? fontWeight.medium : fontWeight.regular};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLinkButton = styled.a`
  color: ${({ theme: { color } }) => color.greyScale.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
