import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { Masthead } from ".";
// Mock
import { MastHeadQueryResult } from "./Masthead.test.mock";
// Lib
import { strainMdxInfo } from "lib/utils";
import { removeLineFeed, TestProvider } from "lib/testUtils";

describe("<Masthead>", () => {
  const renderMasthead = () =>
    render(
      <TestProvider>
        <Masthead />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => MastHeadQueryResult);
  const { title, description, scheduledCourses } = strainMdxInfo(MastHeadQueryResult);
  it("제목과 설명이 보여진다.", () => {
    const { getByText } = renderMasthead();

    getByText(title);
    getByText(removeLineFeed(description));
  });
});
