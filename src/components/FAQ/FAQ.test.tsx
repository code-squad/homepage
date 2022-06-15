import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { FAQType } from "@type/FAQ";
// Testing-Component
import { FAQ } from ".";
// Mock
import { FAQQueryResult, FAQQueryResult_ForMoreButtonTest } from "./FAQ.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";
import { fireEvent } from "@storybook/testing-library";

describe("<FAQ>", () => {
  const renderFAQ = (course?: "masters" | "javascript") =>
    render(
      <TestProvider>
        <FAQ {...{ course }} />
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
  it("각 과정에 해당되는 내용의 FAQ만 보여진다.", async () => {
    const courses = ["masters", "javascript"];

    courses.forEach((course) => {
      const { getByText } = renderFAQ(course as "masters" | "javascript");

      const faqList = lists.filter((list: FAQType) => list.course === course);
      faqList.forEach(({ title }) => getByText(title));
    });
  });
  it("FAQ의 갯수가 5개 이하이면 더보기 버튼은 보여지지 않는다.", async () => {
    const { queryByText } = renderFAQ("masters");

    const moreBtn = queryByText("더보기");
    expect(moreBtn).toBeNull();
  });
  it("FAQ의 갯수가 6개 이상이면 더보기 버튼이 보여진다.", async () => {
    useStaticQuery.mockImplementation(() => FAQQueryResult_ForMoreButtonTest);
    const { lists }: { lists: FAQType[] } = strainMdxInfo(FAQQueryResult_ForMoreButtonTest);
    const { getByText } = renderFAQ("masters");

    const faqList = lists.filter((list: FAQType) => list.course === "masters");
    expect(faqList.length).toEqual(12);

    getByText("더보기");
  });
  it("화면에 보여지는것 의외에 더 보여줄 수 있는 FAQ가 5개 이상 있다면 더보기 버튼 클릭시 5개가 추가되어 보여진다.", async () => {
    const { lists }: { lists: FAQType[] } = strainMdxInfo(FAQQueryResult_ForMoreButtonTest);
    const { getAllByLabelText, getByText } = renderFAQ("masters");

    const faqList = lists.filter((list: FAQType) => list.course === "masters");
    expect(faqList.length).toEqual(12);

    let renderedFAQList = getAllByLabelText("faq");
    expect(renderedFAQList.length).toEqual(5);

    const moreBtn = getByText("더보기");
    fireEvent.click(moreBtn);
    renderedFAQList = getAllByLabelText("faq");
    expect(renderedFAQList.length).toEqual(10);
  });
  it("화면에 보여지는것 의외에 더 보여줄 수 있는 교육과정 FAQ가 5개 미만이라면 남은 FAQ가 추가되어 보여진다.", async () => {
    const { lists }: { lists: FAQType[] } = strainMdxInfo(FAQQueryResult_ForMoreButtonTest);
    const { getAllByLabelText, getByText } = renderFAQ("masters");

    const faqList = lists.filter((list: FAQType) => list.course === "masters");
    expect(faqList.length).toEqual(12);

    let renderedFAQList = getAllByLabelText("faq");
    expect(renderedFAQList.length).toEqual(5);

    const moreBtn = getByText("더보기");
    fireEvent.click(moreBtn);
    renderedFAQList = getAllByLabelText("faq");
    expect(renderedFAQList.length).toEqual(10);

    fireEvent.click(moreBtn);
    renderedFAQList = getAllByLabelText("faq");
    expect(renderedFAQList.length).toEqual(12);
  });
});
