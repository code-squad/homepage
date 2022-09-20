import React from "react";
import styled, { useTheme } from "styled-components";
import { Link } from "gatsby";
// Typography
import { Typography } from "typography/";
// Assets
import { LINK, MESSAGE } from "assets/static/phrases";
import { INTERNAL, EXTERNAL } from "assets/static/urls";
// Lib
import { useResponsive } from "lib/hooks";

const Footer: React.FC = () => {
  const { color } = useTheme();
  const { isDesktop } = useResponsive();

  return (
    <FooterWrapper>
      <ContentWrapper>
        <CompanyInfomationWrapper>
          <Typography type={isDesktop ? "XSBold" : "SBold"} style={{ color: color.white }}>
            {MESSAGE.COMPANY_NAME}
          </Typography>
          <div>
            <Typography type={isDesktop ? "XSBody" : "SBody"}>
              {MESSAGE.COMPANY_CEO_NAME}
            </Typography>
            <div>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {MESSAGE.COMPANY_REGISTRATION_NUMBER}
              </Typography>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {isDesktop && "|"}
              </Typography>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {MESSAGE.COMPANY_MAIL_ORDER_SALES_REGISTRATION_NUMBER}
              </Typography>
            </div>
            <div>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {MESSAGE.COMPANY_ADDRESS}
              </Typography>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {isDesktop && "|"}
              </Typography>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as={isDesktop ? "span" : "p"}>
                {MESSAGE.COMPANY_TEL_NUMBER}
              </Typography>
            </div>
            <div>
              <Typography type={isDesktop ? "XSBody" : "SBody"} as="span">
                {MESSAGE.COMPANY_EMAIL}
              </Typography>
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
          <InternalLink $bold to={INTERNAL.REFUND_POLICY}>
            {LINK.REFUND_POLICY}
          </InternalLink>
        </CompanyInfomationWrapper>
        {isDesktop && (
          <MenuListWrapper>
            <MenuList>
              <li>
                <Typography type="XSBold">{MESSAGE.COMPANY_NAME}</Typography>
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
                <Typography type="XSBold">{MESSAGE.CURRICULUM}</Typography>
              </li>
              <li>
                <InternalLink to={INTERNAL.PRE_COURSE}>{LINK.PRE_COURSE}</InternalLink>
              </li>
              <li>
                <InternalLink to={INTERNAL.MASTERS}>{LINK.MASTERS_MAX}</InternalLink>
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
                <Typography type="XSBold">{MESSAGE.SOCIAL_MEDIA}</Typography>
              </li>
              <li>
                <ExternalLink
                  href={EXTERNAL.BLOG}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
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
              <li>
                <ExternalLink
                  href={EXTERNAL.KAKAOTALK_CHANNEL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {LINK.KAKAOTALK_CHANNEL}
                </ExternalLink>
              </li>
            </MenuList>
          </MenuListWrapper>
        )}
      </ContentWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  background-color: ${({ theme: { color } }) => color.black};
  @media ${({ theme }) => theme.device.mobile} {
    align-items: center;
    width: 100%;
    height: 30.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: center;
    width: 100%;
    min-width: 144rem;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme: { color } }) => color.white};
  font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  font-weight: ${({ theme: { fontWeight } }) => fontWeight.regular};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.body.xs};
  letter-spacing: ${({ theme: { letterSpacing } }) => letterSpacing};
  @media ${({ theme }) => theme.device.mobile} {
    padding: 4rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 128rem;
    padding: 5.6rem 8rem 8rem 8rem;
  }
`;

const CompanyInfomationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme: { color } }) => color.greyScale.grey3};
  & > *:not(:last-child) {
    padding-bottom: 1.6rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
  }
  @media ${({ theme }) => theme.device.tablet} {
  }
  @media ${({ theme }) => theme.device.desktop} {
    color: ${({ theme: { color } }) => color.white};
  }
`;

const MenuListWrapper = styled.div`
  display: flex;
  @media ${({ theme }) => theme.device.desktop} {
    justify-content: space-between;
    width: 40.9rem;
  }
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
  font-weight: ${({ $bold, theme: { fontWeight } }) =>
    $bold ? fontWeight.medium : fontWeight.regular};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media ${({ theme }) => theme.device.mobile} {
    color: ${({ theme: { color } }) => color.greyScale.grey3};
    font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  }
  @media ${({ theme }) => theme.device.tablet} {
    color: ${({ theme: { color } }) => color.greyScale.grey3};
    font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  }
  @media ${({ theme }) => theme.device.desktop} {
    color: ${({ theme: { color } }) => color.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  }
`;

const ExternalLink = styled.a<{ underline?: boolean }>`
  color: ${({ theme: { color } }) => color.greyScale.grey3};
  text-decoration: none;
  text-decoration: ${({ underline }) => (underline ? "underline" : "none")};
  &:hover {
    text-decoration: underline;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: ${({ theme: { fontSize } }) => fontSize.body.sm};
  }
  @media ${({ theme }) => theme.device.desktop} {
    color: ${({ theme: { color } }) => color.white};
    font-size: ${({ theme: { fontSize } }) => fontSize.body.xs};
  }
`;

export default Footer;
