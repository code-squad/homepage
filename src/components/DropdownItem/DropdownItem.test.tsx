import React from "react";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { DropdownItem } from ".";
// lib
import { TestProvider } from "lib/testUtils";

describe("<DropdownItem>", () => {
  const props = {
    category: "교육과정",
    title: "코드스쿼드는 온라인 수업만 진행하나요?",
    content: "마스터즈 코스는 온오프라인 공간을 모두 활용해 학습하는 것을 지향합니다.",
    editDate: "2019-05-04",
  };
  const renderDropDownItem = () =>
    render(
      <TestProvider>
        <DropdownItem {...props} />
      </TestProvider>
    );
  it("카테고리 내용이 보여진다.", async () => {
    const { getByText } = renderDropDownItem();
    const { category } = props;

    getByText(category);
  });
  it("제목이 보여진다.", async () => {
    const { getByText } = renderDropDownItem();
    const { title } = props;

    getByText(title);
  });
  it("아래 방향의 화살표가 보여진다.", async () => {
    const { getByLabelText } = renderDropDownItem();

    getByLabelText("arrow-down");
  });
  it("아이템을 클릭하면 응답 내용이 보여진다.", async () => {
    const { getByText } = renderDropDownItem();
    const { title, content } = props;

    const titleEle = getByText(title);
    fireEvent.click(titleEle);

    getByText(content);
  });
  it("아이템을 클릭하면 위 방향의 화살표가 보여진다.", async () => {
    const { getByText, getByLabelText } = renderDropDownItem();
    const { title } = props;

    const titleEle = getByText(title);
    fireEvent.click(titleEle);

    getByLabelText("arrow-up");
  });
  it("응답내용이 언제 수정되었는지 보여진다.", async () => {
    const { getByText } = renderDropDownItem();

    const { title, editDate } = props;
    const titleEle = getByText(title);
    fireEvent.click(titleEle);

    getByText(`최종 업데이트: ${editDate}`);
  });
  describe("<DrondownItem link>", () => {
    const linkProps = {
      category: "교육과정",
      title: "코드스쿼드는 온라인 수업만 진행하나요?",
      link: "https://www.naver.com",
    };
    const renderDropDownLinkItem = () =>
      render(
        <TestProvider>
          <DropdownItem {...linkProps} />
        </TestProvider>
      );
    it("링크가 추가되어있다면 오른쪽 화살표 아이콘이 보여진다.", async () => {
      const { getByLabelText } = renderDropDownLinkItem();

      getByLabelText("arrow-right");
    });
    it("클릭하면 props로 받은 해당 링크의 새 창이 띄워진다.", async () => {
      window.open = jest.fn();
      const { getByText } = renderDropDownLinkItem();

      const titleEle = getByText(linkProps.title);
      fireEvent.click(titleEle);
      expect(window.open).toHaveBeenCalledWith("https://www.naver.com");
    });
  });
});
