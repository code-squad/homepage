import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Type
import { FAQType } from "@type/FAQ";
// Testing-Component
import { FAQ } from ".";
// Mocks
import { FAQResult } from "./FAQ.test.mock";
// Assets
import { TITLE } from "assets/static/phrases";
// Libs
import { TestProvider, removeLineFeed } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<FAQ>", () => {
  const renderFAQ = () =>
    render(
      <TestProvider>
        <FAQ />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...FAQResult }));
  const { lists }: { lists: FAQType[] } = strainMdxInfo(FAQResult);
  it("제목이 보여진다.", async () => {
    const { getByText } = renderFAQ();

    getByText(removeLineFeed(TITLE.FAQ));
  });
  it("카테고리, 질문, 대답, 최종 업데이트 날짜가 보여진다.", async () => {
    const { getByText } = renderFAQ();
    const { lists } = strainMdxInfo(FAQResult);

    lists.forEach(({ title, content, editDate }: FAQType) => {
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
  it("특정 카테고리를 클릭하면 카테고리에 대한 내용들이 보여진다.", async () => {
    const { getByText } = renderFAQ();

    const category = getByText("#코드투게더 JS 과정");
    fireEvent.click(category);

    const jsFAQList = lists.filter((list: FAQType) => list.course === "javascript");

    jsFAQList.forEach(({ title, content, editDate }) => {
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
});
