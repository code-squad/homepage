import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { InterviewType } from "@type/Interview";
// Testing-Component
import { GraduateReview } from ".";
// Mocks
import { GraduateReviewResult } from "./GraduateReview.test.mock";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider, getQueryResultData } from "lib/testUtils";

describe("<GraduateReview>", () => {
  const renderGraduateReview = () =>
    render(
      <TestProvider>
        <GraduateReview />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...GraduateReviewResult }));
  it("제목과 부 제목이 보여진다.", async () => {
    const { getByText } = renderGraduateReview();

    getByText(TITLE.GRADUATE_INTERVIEW);
    getByText(SUBTITLE.GRADUATE_INTERVIEW);
  });
  it("교육 및 학습 문화들에 대한 내용들이 보여진다.", async () => {
    const { getByText, getAllByAltText, getAllByText } = renderGraduateReview();
    const interviews = getQueryResultData(GraduateReviewResult, "interviews");

    const images = getAllByAltText("avatar");
    expect(images.length).toEqual(interviews.length);

    const writers = getAllByText("작성자");
    expect(writers.length).toEqual(interviews.length);

    interviews.forEach(({ nutshell, content, writerInfo }: InterviewType) => {
      getByText(nutshell);
      getByText(content);
      getByText(writerInfo);
    });
  });
  it("좌우 화살표 버튼들이 보여진다.", async () => {
    const { getByAltText } = renderGraduateReview();

    getByAltText("arrow-left");
    getByAltText("arrow-right");
  });
});
