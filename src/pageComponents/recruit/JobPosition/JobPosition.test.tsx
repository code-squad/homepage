import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { JobPositionType } from "@type/JobPosition";
// Testing-Component
import { JobPosition } from ".";
// Mocks
import { JobPositionResult } from "./JobPosition.test.mock";
// Assets
import { TITLE } from "assets/static/phrases";
// Libs
import { TestProvider, getQueryResultData, removeLineFeed } from "lib/testUtils";

describe("<JobPosition>", () => {
  const renderJobPosition = () =>
    render(
      <TestProvider>
        <JobPosition />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...JobPositionResult }));
  it("제목이 보여진다.", async () => {
    const { getByText } = renderJobPosition();

    getByText(removeLineFeed(TITLE.FAQ));
  });
  it("채용 분야, 포지션, 채용 정보, 최종 업데이트 날짜가 보여진다.", async () => {
    const { getByText, getAllByLabelText } = renderJobPosition();
    const jobPositions = getQueryResultData(JobPositionResult, "jobPositions");

    const arrowDownImages = getAllByLabelText("arrow-down");
    expect(arrowDownImages.length).toEqual(jobPositions.length);

    jobPositions.forEach(({ title, content, editDate }: JobPositionType) => {
      getByText(title);
      getByText(removeLineFeed(content));
      getByText(`최종 업데이트: ${editDate}`);
    });
  });
});
