import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { Masthead } from ".";
// Mock
import { MastHeadQueryResult } from "./Masthead.test.mock";
// Lib
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Masthead>", () => {
  const renderMasthead = () =>
    render(
      <TestProvider>
        <Masthead />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => MastHeadQueryResult);
  const { title, description, targets, courseInfos } = strainMdxInfo(MastHeadQueryResult);
  it("제목과 설명이 보여진다.", () => {
    const { getByText } = renderMasthead();

    getByText(title);
    getByText(description);
  });
  it("교육과정의 대상자가 보여진다.", () => {
    const { getByText } = renderMasthead();

    targets.forEach((target: string) => {
      getByText(target);
    });
  });
  it("코스에 대한 정보들의 제목과 설명이 보여진다.", () => {
    const { getByText } = renderMasthead();

    for (const { title, content } of courseInfos) {
      getByText(title + (content ? "/" : ""));
      if (content) getByText(content);
    }
  });
  it("코스에 대한 정보들의 아이콘들이 보여진다.", () => {
    const { getByAltText } = renderMasthead();

    for (const { img, title } of courseInfos) {
      const featureImage = getByAltText(`course-info-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
    }
  });
});
