import React from "react";
import styled from "styled-components";
import { MDXRenderer } from "gatsby-plugin-mdx";
// Gloabl
import Layout from "lib/context/Layout";
// Assets
import icons from "assets/img/icons";
// Typography
import { LBody, MBody, XSBody } from "typography";

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
        <Category>
          <MBody bold>{category}</MBody>
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
  width: ${({ short }) => (short ? "96.6rem" : "106.2rem")};
  display: flex;
  flex-direction: column;
  &:hover ${LBody} {
    font-weight: ${({ theme: { fontWeight } }) => fontWeight.bold};
  }
`;

const BoardWrapper = styled.div<{ open?: boolean }>`
  display: flex;
  padding-top: 4rem;
  justify-content: space-between;
  height: 7.1rem;
  transition: border 0.5s;
  border-bottom: 0.1rem solid
    ${({ open, theme: { color } }) => (open ? color.greyScale.grey2 : color.greyScale.black20)};
  cursor: pointer;
`;
const Category = styled.div`
  width: 14.5rem;
  margin-right: 2.4rem;
  color: ${({ theme: { color } }) => color.greyScale.grey2};
`;
const Title = styled.div<{ short?: boolean; open?: boolean }>`
  width: ${({ short }) => (short ? "74.9rem" : "84.5rem")};
  margin-right: 2.4rem;
  & > p {
    font-weight: ${({ open, theme: { fontWeight } }) =>
      open ? fontWeight.bold : fontWeight.regular};
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
    ${({ theme: { color } }) => color.greyScale.black20};
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
