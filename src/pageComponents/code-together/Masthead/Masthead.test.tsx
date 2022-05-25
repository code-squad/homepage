import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { ScheduledCourse } from "@type/ScheduledCourse";
// Testing-Component
import { Masthead } from ".";
// Mock
import { MastHeadQueryResult } from "./Masthead.test.mock";
// Lib
import { strainMdxInfo } from "lib/utils";
import { TestProvider } from "lib/testUtils";

describe("<Masthead>", () => {
  const renderMasthead = () =>
    render(
      <TestProvider>
        <Masthead />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => MastHeadQueryResult);
  const { title, description, scheduledCourses } = strainMdxInfo(MastHeadQueryResult);
  it("제목과 설명이 보여진다.", () => {
    const { getByText } = renderMasthead();

    getByText(title);
    getByText(description);
  });
  it("모집중인 과정의 이미지, 제목, 모집 마감일시가 보여진다.", () => {
    const { getByText, getByAltText } = renderMasthead();

    scheduledCourses.forEach(({ title, dueDate }: ScheduledCourse) => {
      const featureImage = getByAltText(`course-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
      getByText(title);
      getByText(dueDate);
    });
  });
  it("모집중인 과정의 이미지, 제목, 모집 마감일시가 보여진다.", () => {
    const { getByText, getByAltText } = renderMasthead();

    scheduledCourses.forEach(({ title, dueDate }: ScheduledCourse) => {
      const featureImage = getByAltText(`course-img-${title}`);
      expect(featureImage?.getAttribute("src")).toBe("test-file-stub");
      getByText(title);
      getByText(dueDate);
    });
  });
  it("각 버튼을 클릭하면 path로 설정된곳으로 페이지가 이동된다.", () => {
    const { getByLabelText } = renderMasthead();

    scheduledCourses.forEach(({ title, path }: ScheduledCourse) => {
      const courseCard = getByLabelText(`course-card-${title}`);
      expect(courseCard.getAttribute("href")).toBe(path);
    });
  });
});
