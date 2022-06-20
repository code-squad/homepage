import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { CultureType } from "@type/Culture";
// Testing-Component
import { Culture } from ".";
// Mocks
import { CultureResult } from "./Culture.test.mock";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo, getSplittedPhrase } from "lib/utils";

describe("<Culture>", () => {
  const renderCulture = () =>
    render(
      <TestProvider>
        <Culture />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...CultureResult }));
  it("제목과 부 제목이 보여진다.", async () => {
    const { getByText } = renderCulture();

    getByText(TITLE.CULTURE);
    getByText(SUBTITLE.CULTURE);
  });
  it("교육 및 학습 문화들에 대한 내용들이 보여진다.", async () => {
    const { getByText, getAllByAltText } = renderCulture();
    const { cultures } = strainMdxInfo(CultureResult);

    const images = getAllByAltText("culture-icon");
    expect(images.length).toEqual(cultures.length);

    cultures.forEach(({ title, subtitle, description }: CultureType) => {
      getByText(title);
      getByText(subtitle);
      getSplittedPhrase(description).forEach((descriptionItem) => getByText(descriptionItem));
    });
  });
});
