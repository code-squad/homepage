import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { ScheduleInfo } from ".";
// Mock
import { makeScheduleInfo } from "./ScheduleInfo.test.mock";
// lib
import { TestProvider } from "lib/testUtils";
import { getSplittedPhrase } from "lib/utils";

describe("<ScheduleInfo>", () => {
  const scheduleInfo = makeScheduleInfo("지금 바로 마스터즈 코스 지원");
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
    getSplittedPhrase(description).forEach((descriptionItem) => {
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
  it("progress의 index가 0 이라도 버튼을 나타내는 텍스트가 없다면 보여지지 않는다.", async () => {
    const { getByText, queryByText } = render(
      <TestProvider>
        <ScheduleInfo {...{ selectedScheduleIndex: 0, scheduleInfo: makeScheduleInfo("") }} />
      </TestProvider>
    );

    const { waiterApplyUrlBtnText, applyBtnText } = scheduleInfo;

    getByText(waiterApplyUrlBtnText);
    expect(queryByText(applyBtnText)).toBe(null);
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
