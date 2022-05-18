import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { EducationFeatures } from ".";
// Mocks
import { EducationFeatureResult } from "./EducationFeatures.test.mock";
// lib
import { TestProvider } from "lib/testUtils";

describe("<DropdownItem>", () => {
  const renderEducationfeatures = () =>
    render(
      <TestProvider>
        <EducationFeatures />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...EducationFeatureResult }));
  it("카테고리 내용이 보여진다.", async () => {
    const { getByText } = renderEducationfeatures();

    getByText("미션과 협력 중심의 학습");
  });
});
