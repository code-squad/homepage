import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { CourseList } from ".";
// Assets
import { LINK, LINK_DESCRIPTION } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<CourseList>", () => {
  const renderCourseList = () =>
    render(
      <TestProvider>
        <CourseList />
      </TestProvider>
    );
  it("프리코스 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    getByText(LINK.PRE_COURSE);
    getByText(LINK_DESCRIPTION.PRE_COURSE);

    const [preCourseLink] = getAllByRole("link");
    expect(preCourseLink?.getAttribute("href")).toBe(INTERNAL.PRE_COURSE);
  });
  it("마스터즈•max 링크가 보여진다.", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    getByText(LINK.MASTERS_MAX);
    getByText(LINK_DESCRIPTION.MASTERS);

    const [_, mastersLink] = getAllByRole("link");
    expect(mastersLink?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  });
  it("코드투게더 링크가 보여진다..", async () => {
    const { getByText, getAllByRole } = renderCourseList();
    getByText(LINK.CODE_TOGETHER);
    getByText(LINK_DESCRIPTION.CODE_TOGETHER);

    const [_, __, codeTogetherLink] = getAllByRole("link");
    expect(codeTogetherLink?.getAttribute("href")).toBe(INTERNAL.CODE_TOGETHER);
  });
});
