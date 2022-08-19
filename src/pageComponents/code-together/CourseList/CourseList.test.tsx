import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { CourseList } from ".";
// Assets
import { LINK, LINK_DESCRIPTION } from "assets/static/phrases";
import { EXTERNAL, INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<CourseList>", () => {
  const renderCourseList = () =>
    render(
      <TestProvider>
        <CourseList />
      </TestProvider>
    );
  it("자바스크립트 코스 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    getByText(LINK.JAVASCRIPT);
    getByText(LINK_DESCRIPTION.JAVASCRIPT);

    const [javascriptLink] = getAllByRole("link");
    expect(javascriptLink?.getAttribute("href")).toBe(INTERNAL.JAVASCRIPT);
  });
  it("코드투게더 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    getByText(LINK.CLEAN_SWIFT);
    getByText(LINK_DESCRIPTION.CLEAN_SWIFT);

    const [_, codeTogetherLink] = getAllByRole("link");
    expect(codeTogetherLink?.getAttribute("href")).toBe(EXTERNAL.CLEAN_SWIFT);
  });
});
