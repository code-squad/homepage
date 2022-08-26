import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
// Gloabl
import Layout from "lib/context/Layout";
// Assets
import icons from "assets/img/icons";
// Typography
import { MBold, LBody, MBody, XSBody } from "typography";
// Lib
import { useResponsive } from "lib/hooks";

interface IDropdownItem {
  category: string;
  title: string;
  content?: string;
  editDate?: string;
  link?: string;
  short?: boolean;
  body?: string;
}

const DropdownItem: React.FC<IDropdownItem> = ({
  category,
  title,
  content,
  editDate,
  link,
  short,
  body,
}) => {
  const { isDesktop } = useResponsive();

  const [open, setOpen] = React.useState(false);
  const isLinkBoard = Boolean(link);

  const handleCardOpen = () => {
    if (isLinkBoard) {
      window.open(link);
      return;
    }
    setOpen(!open);
  };

  return (
    <DropdownWrapper aria-label="faq" {...{ short, open }}>
      <BoardWrapper {...{ open }} onClick={handleCardOpen}>
        {!isDesktop && (
          <>
            <Category {...{ isLinkBoard }}>
              <XSBody>{category}</XSBody>
            </Category>
            <Title {...{ short, open }}>
              <MBody>{title}</MBody>
            </Title>
          </>
        )}
        {isDesktop && (
          <>
            <Category {...{ isLinkBoard }}>
              <MBold>{category}</MBold>
            </Category>
            <Title {...{ short, open }}>
              <LBody>{title}</LBody>
            </Title>
            <ArrowWrapper {...{ open }}>
              {isLinkBoard ? (
                <img aria-label="arrow-right" src={icons.chevronRight} width="24px" height="24px" />
              ) : (
                <img
                  aria-label={open ? "arrow-up" : "arrow-down"}
                  src={icons.chevronDown}
                  width="24px"
                  height="24px"
                />
              )}
            </ArrowWrapper>
          </>
        )}
      </BoardWrapper>
      {isLinkBoard ? null : (
        <ContentWrapper {...{ open }}>
          <Content>
            {body ? (
              <Layout>
                <MDXRenderer>{body}</MDXRenderer>
              </Layout>
            ) : (
              <MBody>{content}</MBody>
            )}
          </Content>
          <EditDate>
            <XSBody>{`최종 업데이트: ${editDate}`}</XSBody>
          </EditDate>
        </ContentWrapper>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled.div<{ short?: boolean }>`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 31.2rem;
    margin-top: 1.6rem;
    &:active ${MBody} {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 31.2rem;
    margin-top: 1.6rem;
    &:active ${MBody} {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: ${({ short }) => (short ? "96.6rem" : "106.2rem")};
    &:hover ${LBody} {
      font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
    }
  }
`;

const BoardWrapper = styled.div<{ open?: boolean }>`
  display: flex;
  cursor: pointer;
  border-bottom: 0.1rem solid
    ${({ open, theme: { color } }) => (open ? color.greyScale.grey2 : color.greyScale.grey4)};
  @media ${({ theme }) => theme.device.mobile} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 0.4rem;
    }
    padding-bottom: 1.2rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 0.4rem;
    }
    padding-bottom: 1.2rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    padding-top: 4rem;
    justify-content: space-between;
    height: 7.1rem;
    transition: border 0.5s;
  }
`;
const Category = styled.div<{ isLinkBoard?: boolean }>`
  color: ${({ isLinkBoard, theme: { color } }) =>
    isLinkBoard ? color.primary.green2 : color.greyScale.grey2};
  @media ${({ theme }) => theme.device.desktop} {
    width: 14.5rem;
    margin-right: 2.4rem;
  }
`;
const Title = styled.div<{ short?: boolean; open?: boolean }>`
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  & > p {
    font-weight: ${({ open, theme: { fontWeight } }) =>
      open ? fontWeight.bold : fontWeight.regular};
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: ${({ short }) => (short ? "74.9rem" : "84.5rem")};
    margin-right: 2.4rem;
  }
`;

const ArrowWrapper = styled.div<{ open?: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "")};
  transition: transform 0.5s;
`;
const ContentWrapper = styled.div<{ open?: boolean }>`
  overflow: hidden;
  transition: max-height 0.5s, border 0.5s;
  max-height: ${({ open }) => (open ? "200rem" : "0")};
  padding-left: 16.9rem;
  border-bottom: ${({ open }) => (open ? "0.1rem" : "0")} solid
    ${({ theme: { color } }) => color.surface.black20};
`;
const Content = styled.div`
  margin-top: 2rem;
`;
const EditDate = styled.div`
  margin: 2.4rem 0;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
  display: flex;
  justify-content: flex-end;
`;

export default DropdownItem;
