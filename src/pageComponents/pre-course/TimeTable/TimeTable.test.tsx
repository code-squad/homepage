import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { PlanType, TagType } from "@type/TimeTable";
// Testing-Component
import { TimeTable } from ".";
// Mocks
import { JavascriptTimeTableQueryResult } from "./TimeTable.test.mock";
// Static
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { TestProvider } from "lib/testUtils";
import { strainMdxInfoBody } from "lib/utils";

describe("<TimeTable>", () => {
  const renderTimeTable = () =>
    render(
      <TestProvider>
        <TimeTable />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...JavascriptTimeTableQueryResult }));
  const { planList, tags, body } = strainMdxInfoBody(JavascriptTimeTableQueryResult);
  it("해당 컴포넌트의 제목이 보여진다.", () => {
    const { getByText } = renderTimeTable();

    getByText(SUBTITLE.CODE_TOGETHER);
    getByText(TITLE.HOW_STUDY);
  });
  it("각 태그의 제목이 보여진다.", () => {
    const { getByText } = renderTimeTable();

    tags.forEach(({ name }: TagType) => {
      getByText(name);
    });
  });
  it("각 태그 앞에는 태그별 연관되어 있는 색상을 가진 원이 보여진다.", () => {
    const { getByLabelText } = renderTimeTable();

    tags.forEach(({ name, color }: TagType) => {
      const tagColorElement = getByLabelText(`${name}-tag-color`);
      expect(tagColorElement).toHaveStyle(`background-color: ${color}`);
    });
  });
  it("각 계획의 항목에 대한 이름과 설명이 보여진다.", () => {
    const { getByText } = renderTimeTable();

    planList.forEach(({ name, description }: PlanType) => {
      getByText(name);
      getByText(description);
    });
  });
  it("각 계획의 항목이름은 그에 맞는 색상을 가지고 있다.", () => {
    const { getByText } = renderTimeTable();

    planList.forEach(({ name, color }: PlanType) => {
      const label = getByText(name);
      expect(label.parentElement).toHaveStyle(`background-color: ${color}`);
    });
  });
});
