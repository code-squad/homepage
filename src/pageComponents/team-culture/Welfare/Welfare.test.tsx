import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { WelfareType } from "@type/Welfare";
// Testing-Component
import { Welfare } from ".";
// Mocks
import { WelfareQueryResult } from "./Welfare.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { removeLineFeed, TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Welfare>", () => {
  const renderWelfare = () =>
    render(
      <TestProvider>
        <Welfare />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => WelfareQueryResult);
  const { welfares }: { welfares: WelfareType[] } = strainMdxInfo(WelfareQueryResult);
  it("제목이 보여진다.", async () => {
    const { getByText } = renderWelfare();

    getByText(SUBTITLE.WELFARE);
    getByText(TITLE.WELFARE);
  });
  it("각 특징들의 제목과 설명이 보여진다.", () => {
    const { getByText } = renderWelfare();

    welfares.forEach(({ title, content }) => {
      getByText(title);
      getByText(removeLineFeed(content));
    });
  });
  it("각 특징들에 대한 이미지가 보여진다.", () => {
    const { getByAltText } = renderWelfare();

    welfares.forEach(({ title }) => {
      getByAltText(`card-img-${title}`);
    });
  });
});
