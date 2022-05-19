import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { ScheduleInfo } from ".";
// Mock
import { scheduleInfo } from "./ScheduleInfo.test.mock";
// lib
import { TestProvider } from "lib/testUtils";

describe("<ScheduleInfo>", () => {
  const renderScheduleInfo = (selectedScheduleIndex: number) =>
    render(
      <TestProvider>
        <ScheduleInfo {...{ selectedScheduleIndex, scheduleInfo }} />
      </TestProvider>
    );
  const { progress } = scheduleInfo;
  it("선택된 index에 맞는 progress 정보가 보여진다.", async () => {
    progress.forEach((progressItem, i) => {
      const { getByText } = renderScheduleInfo(i);
      const { title } = progressItem;

      getByText(title);
    });
  });
  it("progress의 설명들은 띄어쓰기가 되어 보여진다.", async () => {
    const index = 1;
    const { getByText } = renderScheduleInfo(index);

    const { description } = progress[index];
    const splitedDescription = description.split("\n\n");

    splitedDescription.forEach((descriptionItem) => {
      getByText(descriptionItem.trim());
    });
  });
  it("progress의 index가 0 이라면 버튼들이 보여진다.", async () => {
    const index = 0;
    const { getByText } = renderScheduleInfo(index);

    const { waiterApplyUrlBtnText, applyBtnText } = scheduleInfo;

    getByText(waiterApplyUrlBtnText);
    getByText(applyBtnText);
  });
  it("버튼들에는 각 버튼에 맞는 링크주소가 주어져있다.", async () => {
    window.open = jest.fn();
    const index = 0;
    const { getByText } = renderScheduleInfo(index);

    const { waiterApplyUrlBtnText, applyBtnText, waiterApplyUrl, applyUrl } = scheduleInfo;

    const waiterBtn = getByText(waiterApplyUrlBtnText);
    const applyBtn = getByText(applyBtnText);

    expect(waiterBtn.closest("a")).toHaveAttribute("href", waiterApplyUrl);
    expect(applyBtn.closest("a")).toHaveAttribute("href", applyUrl);
  });
});
