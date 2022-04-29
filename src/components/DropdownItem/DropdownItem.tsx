import React from "react";
import styled from "styled-components";
// Assets
import upArrow from "assets/images/icons/arrow-up.svg";
import rightArrow from "assets/images/icons/arrow-right.svg";
import { LBody, MBody, XSBody } from "typography";
// Components

interface IDropdownItem {
  category: string;
  title: string;
  content?: string;
  editDate?: string;
  to?: string;
}

const DropdownItem: React.FC<IDropdownItem> = ({ category, title, content, editDate, to }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <DropdownWrapper>
      <BoardWrapper {...{ open }} onClick={() => setOpen(!open)}>
        <Category>
          <MBody bold>{category}</MBody>
        </Category>
        <Title>
          <LBody>{title}</LBody>
        </Title>
        <ArrowWrapper {...{ open }}>
          <img src={upArrow} width="24px" height="24px" />
        </ArrowWrapper>
      </BoardWrapper>

      {!to ? (
        <ContentWrapper {...{ open }}>
          <Content>
            <MBody>{content}</MBody>
          </Content>
          <EditDate>
            <XSBody>{editDate}</XSBody>
          </EditDate>
        </ContentWrapper>
      ) : null}
    </DropdownWrapper>
  );
};

const BoardWrapper = styled.div<{ open?: boolean }>`
  display: flex;
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

const Title = styled.div`
  width: 84.5rem;
  margin-right: 2.4rem;
  &:hover: {
    font-weight: 700;
  }
`;

const ArrowWrapper = styled.div<{ open?: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "")};
  transition: transform 0.5s;
`;
const DropdownWrapper = styled.div`
  width: 106.2rem;
  display: flex;
  flex-direction: column;
`;
const ContentWrapper = styled.div<{ open?: boolean }>`
  overflow: hidden;
  transition: max-height 0.5s;
  max-height: ${({ open }) => (open ? "25rem;" : "0")};
  padding-left: 16.9rem;
  border-bottom: 0.1rem solid ${({ theme: { color } }) => color.greyScale.black20};
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
