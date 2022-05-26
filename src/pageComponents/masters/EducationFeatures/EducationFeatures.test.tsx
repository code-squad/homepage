import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { EducationFeatureType } from "@type/EducationFeature";
// Testing-Component
import { EducationFeatures } from ".";
// Mocks
import { EducationFeatureResult } from "./EducationFeatures.test.mock";
// lib
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<EducationFeatures>", () => {
  const renderEducationfeatures = () =>
    render(
      <TestProvider>
        <EducationFeatures />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...EducationFeatureResult }));
  it("각 카테고리의 내용들이 보여진다.", async () => {
    const { getByText } = renderEducationfeatures();
    const { features } = strainMdxInfo(EducationFeatureResult);

    features.forEach(({ title, content }: EducationFeatureType) => {
      getByText(title);
      getByText(content);
    });
  });
  it("카테고리에 맞는 이미지가 보여진다.", async () => {
    const { getByAltText } = renderEducationfeatures();
    const { features } = strainMdxInfo(EducationFeatureResult);

    features.forEach(({ title }: EducationFeatureType) => {
      const featureImage = getByAltText(`card-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
    });
  });
});
