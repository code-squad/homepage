import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { StudyMethod } from ".";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<StudyMethod>", () => {
  const renderStudyMethod = () =>
    render(
      <TestProvider>
        <StudyMethod />
      </TestProvider>
    );
  it("제목과 부제목이 보여진다.", async () => {
    const { getAllByText } = renderStudyMethod();

    getAllByText(TITLE.HOW_STUDY);
    getAllByText(SUBTITLE.CODE_TOGETHER);
  });
  it("코드스쿼드 장소 이미지들이 보여진다.", async () => {
    const { getAllByAltText } = renderStudyMethod();

    getAllByAltText("codetogether-studymethod");
  });
  it("좌우 화살표 버튼들이 보여진다.", async () => {
    const { getByAltText } = renderStudyMethod();

    getByAltText("arrow-left");
    getByAltText("arrow-right");
  });
});
