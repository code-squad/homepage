import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Testing-Component
import { Feature } from ".";
// Mocks
import { FeatureResult } from "./Feature.test.mock";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Feature>", () => {
  const renderFeature = () =>
    render(
      <TestProvider>
        <Feature />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...FeatureResult }));
  const { features } = strainMdxInfo(FeatureResult);
  it("제목과 부 제목이 보여진다.", async () => {
    const { getByText } = renderFeature();

    getByText(TITLE.FEATURE);
    getByText(SUBTITLE.CODE_TOGETHER_FEATURE);
  });
  it("교육 및 학습 문화들에 대한 내용들이 보여진다.", async () => {
    const { getByText } = renderFeature();

    features.forEach(({ title, descriptions }: CodeTogetherFeatureType) => {
      getByText(title);
      descriptions.forEach((description) => getByText(description));
    });
  });
  it("카테고리에 맞는 이미지가 보여진다.", async () => {
    const { getByAltText } = renderFeature();

    features.forEach(({ title }: CodeTogetherFeatureType) => {
      const featureImage = getByAltText(`card-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
    });
  });
});
