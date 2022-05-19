import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { CultureType } from "@type/Culture";
// Testing-Component
import { Feature } from ".";
// Mocks
import { FeatureResult } from "./Feature.test.mock";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider, getQueryResultData } from "lib/testUtils";

describe("<Feature>", () => {
  const renderFeature = () =>
    render(
      <TestProvider>
        <Feature />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...FeatureResult }));
  it("제목과 부 제목이 보여진다.", async () => {
    const { getByText } = renderFeature();

    getByText(TITLE.FEATURE);
    getByText(SUBTITLE.FEATURE);
  });
  it("코드스쿼드 특징에 대한 제목, 부제목, 설명, 이미지가 보여진다.", async () => {
    const { getByText, getByAltText } = renderFeature();
    const title = getQueryResultData(FeatureResult, "title");
    const subtitle = getQueryResultData(FeatureResult, "subtitle");
    const description = getQueryResultData(FeatureResult, "description");

    getByText(title);
    getByText(subtitle);
    description.split("\n\n").forEach((descriptionItem: string) => getByText(descriptionItem));
    getByAltText("feature");
  });
});
