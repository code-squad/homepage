import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { ScheduleNav } from ".";
// Mock
import { progress } from "./ScheduleNav.test.mock";
// lib
import { TestProvider } from "lib/testUtils";

describe("<ScheduleNav>", () => {
  const props = {
    progress,
    selectedScheduleIndex: 0,
    setSelectedScheduleIndex: () => {},
  };
  const renderScheduleNav = () =>
    render(
      <TestProvider>
        <ScheduleNav {...props} />
      </TestProvider>
    );
  it("progress의 라벨이 보여진다.", async () => {
    const { getByText } = renderScheduleNav();

    progress.forEach(({ label }) => {
      getByText(label);
    });
  });
});
