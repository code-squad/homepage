import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { FAQType } from "@type/FAQ";
// Testing-Component
import { FAQ } from ".";
// Mocks
import { FAQResult } from "./FAQ.test.mock";
// Assets
import { TITLE, CATEGORTY_TPL } from "assets/static/phrases";
// Libs
import { TestProvider, removeLineFeed } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";
import { fireEvent } from "@storybook/testing-library";

describe("<FAQ>", () => {
  const renderFAQ = () =>
    render(
      <TestProvider>
        <FAQ />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...FAQResult }));
  it("제목이 보여진다.", async () => {
    const { getByText } = renderFAQ();

    getByText(removeLineFeed(TITLE.FAQ));
  });
  it("카테고리, 질문, 대답, 최종 업데이트 날짜가 보여진다.", async () => {
    const { getByText, getAllByText } = renderFAQ();
    const course = "masters";
    const { lists } = strainMdxInfo(FAQResult);
    const filteredLists = lists.filter((list: FAQType) => list.course === course);

    filteredLists.forEach(({ title, content, editDate }: FAQType) => {
      getAllByText(CATEGORTY_TPL[course]);
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
  it("다른 과정 제목을 클릭하면 해당 과정에 내용들이 보여진다.", async () => {
    const { getByText, getAllByText } = renderFAQ();
    const course = "javascript";
    const { lists } = strainMdxInfo(FAQResult);
    const filteredLists = lists.filter((list: FAQType) => list.course === course);

    const jsFAQBtn = getByText(`${CATEGORTY_TPL[course]}`);
    fireEvent.click(jsFAQBtn);
    filteredLists.forEach(({ title, content, editDate }: FAQType) => {
      getAllByText(CATEGORTY_TPL[course]);
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
  it("기타를 클릭하면 과정 외의 내용들이 보여진다.", async () => {
    const { getByText, getAllByText } = renderFAQ();
    const { lists } = strainMdxInfo(FAQResult);
    const filteredLists = lists.filter((list: FAQType) => !list.course);

    const jsFAQBtn = getByText(`기타`);
    fireEvent.click(jsFAQBtn);
    filteredLists.forEach(({ title, content, editDate }: FAQType) => {
      getAllByText("기타");
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
});
