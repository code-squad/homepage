import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { InterviewType } from "@type/Interview";
// Testing-Component
import { InterviewSliderWrapper } from ".";
// Mock
import { InterviewListQueryResult } from "./InterviewSliderWrapper.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";

describe("<InterviewSliderWrapper>", () => {
  const renderInterviewSliderWrapper = () =>
    render(
      <TestProvider>
        <InterviewSliderWrapper />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => InterviewListQueryResult);
  const { interviewList }: { interviewList: InterviewType[] } =
    strainMdxInfo(InterviewListQueryResult);
  it("컴포넌트의 제목과 부제목이 보여진다.", () => {
    const { getByText } = renderInterviewSliderWrapper();

    getByText(TITLE.GRADUATE_INTERVIEW);
    getByText(SUBTITLE.MASTERS_COURSE_2021);
  });
  it("각 인터뷰어들의 내용들이 보여진다.", () => {
    const { getByText } = renderInterviewSliderWrapper();

    interviewList.forEach(({ nutshell, writerInfo }) => {
      getByText(nutshell);
      getByText(writerInfo);
    });
  });
});
