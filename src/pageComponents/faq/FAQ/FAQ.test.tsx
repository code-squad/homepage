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
import { TITLE } from "assets/static/phrases";
// Libs
import { TestProvider, getQueryResultData, removeLineFeed } from "lib/testUtils";

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
    const { getByText, getAllByLabelText } = renderFAQ();
    const lists = getQueryResultData(FAQResult, "lists");

    const arrowDownImages = getAllByLabelText("arrow-down");
    expect(arrowDownImages.length).toEqual(lists.length);

    lists.forEach(({ title, content, editDate }: FAQType) => {
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
});
