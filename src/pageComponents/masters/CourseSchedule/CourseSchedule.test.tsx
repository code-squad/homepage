import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Type
import { ProgressType } from "@type/Schedule";
// Testing-Component
import { CourseSchedule } from ".";
// Mock
import { CourseScheduleQueryResult } from "./CourseSchedule.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";

describe("<CourseSchedule>", () => {
  const renderCourseSchedule = () =>
    render(
      <TestProvider>
        <CourseSchedule />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => CourseScheduleQueryResult);
  it("컴포넌트의 제목과 부제목이 보여진다.", () => {
    const { getByText } = renderCourseSchedule();

    getByText(TITLE.MASTERS_COURSE_SCHEDULE);
    getByText(SUBTITLE.MASTERS_COURSE_SCHEDULE);
  });
  it("라벨을 클릭하면 해당 라벨에 맞는 문구가 보여진다.", () => {
    const { progress }: { progress: ProgressType[] } = strainMdxInfo(CourseScheduleQueryResult);
    const { getByText, getAllByText } = renderCourseSchedule();

    progress.forEach(({ label, description }) => {
      const [labelText] = getAllByText(label);
      fireEvent.click(labelText);

      const splitedDescription = description.split("\n\n");

      splitedDescription.forEach((descriptionItem) => {
        getByText(descriptionItem.trim());
      });
    });
  });
});
