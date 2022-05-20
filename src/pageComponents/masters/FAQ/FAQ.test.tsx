import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { FAQType } from "@type/FAQ";
// Testing-Component
import { FAQ } from ".";
// Mock
import { FAQQueryResult } from "./FAQ.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";

describe("<FAQ>", () => {
  const renderFAQ = () =>
    render(
      <TestProvider>
        <FAQ />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => FAQQueryResult);
  const { lists }: { lists: FAQType[] } = strainMdxInfo(FAQQueryResult);
  it("컴포넌트의 제목과 부제목이 보여진다.", () => {
    const { getByText } = renderFAQ();

    getByText(TITLE.FREQUENTLY_ASKED_QUESTIONS);
    getByText(SUBTITLE.FAQ);
  });
  it("교육과정 카테고리의 FAQ만 보여진다.", async () => {
    const { getByText } = renderFAQ();

    const mastersFAQList = lists.filter((list: FAQType) => list.category === "교육과정");
    mastersFAQList.forEach(({ title }) => getByText(title));
  });
});
