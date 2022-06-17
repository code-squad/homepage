import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
// Typography
import { XSBody } from "typography/";
// Assets
import { LINK, MESSAGE } from "assets/static/phrases";
import { INTERNAL, EXTERNAL } from "assets/static/urls";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <ContentWrapper>
        <div>
          <XSBody bold style={{ paddingBottom: "1.6rem" }}>
            {MESSAGE.COMPANY_NAME}
          </XSBody>
          <CompanyInfomationWrapper>
            <div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_CEO_NAME}</XSBody>
              </div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_REGISTRATION_NUMBER}</XSBody>
                <XSBody as="span"> | </XSBody>
                <XSBody as="span">{MESSAGE.COMPANY_MAIL_ORDER_SALES_REGISTRATION_NUMBER}</XSBody>
              </div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_ADDRESS}</XSBody>
                <XSBody as="span"> | </XSBody>
                <XSBody as="span">{MESSAGE.COMPANY_TEL_NUMBER}</XSBody>
              </div>
              <div>
                <XSBody as="span">{MESSAGE.COMPANY_EMAIL}</XSBody>
                <XSBody as="span"> | </XSBody>
                <ExternalLink
                  href={`mailto:${EXTERNAL.EMAIL}`}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  underline
                >
                  {MESSAGE.COMPANY_EMAIL_ADDRESS}
                </ExternalLink>
              </div>
            </div>
          </CompanyInfomationWrapper>
          <div>
            <InternalLink $bold to={INTERNAL.REFUND_POLICY}>
              {LINK.REFUND_POLICY}
            </InternalLink>
          </div>
        </div>
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
              <ExternalLink href={EXTERNAL.BLOG} target="_blank" rel="noopener noreferrer nofollow">
                {LINK.BLOG}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={EXTERNAL.YOUTUBE}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                {LINK.YOUTUBE}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink
                href={EXTERNAL.FACEBOOK}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
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
  height: 25rem;
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

const CompanyInfomationWrapper = styled.div`
  padding-bottom: 0.8rem;
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
  & > *:not(:last-child) {
    margin-bottom: 1.6rem;
  }
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

const ExternalLink = styled.a<{ underline?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.white};
  text-decoration: none;
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
  }
`;

export default Footer;
