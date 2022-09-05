import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { CourseListType } from "@type/Course";
// Testing-Component
import { CourseList } from ".";
// Mocks
import { CourseListQueryResult } from "./CourseList.test.mock";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<CourseList>", () => {
  const renderCourseList = () =>
    render(
      <TestProvider>
        <CourseList />
      </TestProvider>
    );

  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => CourseListQueryResult);
  const { courses }: { courses: CourseListType[] } = strainMdxInfo(CourseListQueryResult);
  const javascriptCourse = courses[0];
  const iOSCourse = courses[1];
  it("자바스크립트 코스 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    const { title, path, description } = javascriptCourse;
    getByText(title);
    getByText(description);

    const [javascriptLink] = getAllByRole("link");
    expect(javascriptLink?.getAttribute("href")).toBe(path);
  });
  it("iOS 코스 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    const { title, path, description } = iOSCourse;
    getByText(title);
    getByText(description);

    const [_, codeTogetherLink] = getAllByRole("link");
    expect(codeTogetherLink?.getAttribute("href")).toBe(path);
  });
});
