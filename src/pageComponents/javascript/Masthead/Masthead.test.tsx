import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { Masthead } from ".";
// Mock
import { MastHeadQueryResult } from "./Masthead.test.mock";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";

describe("<Masthead>", () => {
  const renderMasthead = () =>
    render(
      <TestProvider>
        <Masthead />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => MastHeadQueryResult);
  const { title, description, targets, trainingDuration, coreTime, cost } =
    strainMdxInfo(MastHeadQueryResult);
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
  it("교육 기간, 코어타임, 비용이 보여진다.", () => {
    const { getByText } = renderMasthead();

    getByText(trainingDuration);
    getByText(coreTime);
    getByText(cost);
  });
});
