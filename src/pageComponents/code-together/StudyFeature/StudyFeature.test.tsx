import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { CodeTogetherFeatureType } from "@type/CodeTogetherFeature";
// Testing-Component
import { StudyFeature } from ".";
// Mocks
import { StudyFeatureResult } from "./StudyFeature.test.mock";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<StudyFeature>", () => {
  const renderStudyFeature = () =>
    render(
      <TestProvider>
        <StudyFeature />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...StudyFeatureResult }));
  const { studyFeatures } = strainMdxInfo(StudyFeatureResult);
  it("제목과 부제목이 보여진다.", async () => {
    const { getAllByText } = renderStudyFeature();

    getAllByText(TITLE.HOW_STUDY);
    getAllByText(SUBTITLE.CODE_TOGETHER);
  });
  // it("코드투게더 교육 방식 이미지들이 보여진다.", async () => {
  //   const { getAllByAltText } = renderStudyFeature();

  //   getAllByAltText("codetogether-study-feature");
  // });
  // it("좌우 화살표 버튼들이 보여진다.", async () => {
  //   const { getByAltText } = renderStudyFeature();

  //   getByAltText("arrow-left");
  //   getByAltText("arrow-right");
  // });
  it("코드투게더 교육 특징에 대한 내용들이 보여진다.", async () => {
    const { getByText } = renderStudyFeature();

    studyFeatures.forEach(({ title, descriptions }: CodeTogetherFeatureType) => {
      getByText(title);
      descriptions.forEach((descsiption) => {
        getByText(descsiption);
      });
    });
  });
  it("코드투게더 교육 특징들 각각에 대한 이미지가 보여진다.", async () => {
    const { getByAltText } = renderStudyFeature();

    studyFeatures.forEach(async ({ title }: CodeTogetherFeatureType) => {
      const featureImage = getByAltText(`card-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
    });
  });
});
