import React from "react";
import styled from "styled-components";
// Typography
import { XSBody } from "typography/";
// Static
import { LINK, MESSAGE } from "assets/static/phrases";
import { INTERNAL, EXTERNAL } from "assets/static/urls";
import { Link } from "gatsby";

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
              <InternalLink to={INTERNAL.PRIVACY_POLICY}>{LINK.PRIVACY_POLICY}</InternalLink>
              <XSBody as="span"> | </XSBody>
              <InternalLink to={INTERNAL.REFUND_POLICY}>{LINK.REFUND_POLICY}</InternalLink>
            </div>
          </CompanyInfomationWrapper>
        </CompanyWrapper>
        <MenuListWrapper>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.COMPANY_NAME}</XSBody>
            </li>
            <li>
              <InternalLink to={INTERNAL.TEAM_CULTURE}>{LINK.TEAM_CULTURE}</InternalLink>
            </li>
            <li>
              <InternalLink to={INTERNAL.RECRUIT}>{LINK.RECRUIT}</InternalLink>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.CURRICULUM}</XSBody>
            </li>
            <li>
              <InternalLink to={INTERNAL.MASTERS}>{LINK.MASTERS}</InternalLink>
            </li>
            <li>
              <InternalLink to={INTERNAL.CODE_TOGETHER}>{LINK.CODE_TOGETHER}</InternalLink>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <InternalLink $bold to={INTERNAL.FAQ}>
                {LINK.FAQ}
              </InternalLink>
            </li>
          </MenuList>
          <MenuList>
            <li>
              <XSBody bold>{MESSAGE.SOCIAL_MEDIA}</XSBody>
            </li>
            <li>
              <ExternalLink href={EXTERNAL.BLOG} target="_blank">
                {LINK.BLOG}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={EXTERNAL.YOUTUBE} target="_blank">
                {LINK.YOUTUBE}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={EXTERNAL.FACEBOOK} target="_blank">
                {LINK.FACEBOOK}
              </ExternalLink>
            </li>
          </MenuList>
        </MenuListWrapper>
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  min-width: 144rem;
  min-height: 25rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme: { color } }) => color.greyScale.black};
`;

const ContentWrapper = styled.div`
  min-width: 128rem;
  padding: 5.6rem 8rem 8rem 8rem;
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

const InternalLink = styled(Link)<{ $bold?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.white};
  font-weight: ${({ $bold, theme: { fontWeight } }) =>
    $bold ? fontWeight.medium : fontWeight.regular};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const ExternalLink = styled.a`
  color: ${({ theme: { color } }) => color.greyScale.white};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
