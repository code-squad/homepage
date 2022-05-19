import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Testing-Component
import { CourseSchedule } from ".";
// Mock
import { CourseScheduleQueryResult } from "./CourseSchedule.test.mock";
// lib
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";
import { SUBTITLE, TITLE } from "assets/static/phrases";

describe("<CourseSchedule>", () => {
  const renderCourseSchedule = () =>
    render(
      <TestProvider>
        <CourseSchedule />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => CourseScheduleQueryResult);
  it("컴포넌트의 제목과 부제목이 보여진다.", async () => {
    const { getByText } = renderCourseSchedule();

    getByText(TITLE.MASTERS_COURSE_SCHEDULE);
    getByText(SUBTITLE.MASTERS_COURSE_SCHEDULE);
  });
});
