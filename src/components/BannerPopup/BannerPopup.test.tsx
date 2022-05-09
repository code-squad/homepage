import React from "react";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { BannerPopup } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<BannerPopup>", () => {
  const props = {
    title: "마스터즈 코스 2023 대기자 접수 중!",
    description: "2022. 12. 00부터 12. 00 오후 1시까지",
    onCloseButtonClicked: jest.fn(),
  };
  const renderBannerPopup = () =>
    render(
      <TestProvider>
        <BannerPopup {...props} />
      </TestProvider>
    );

  it("props를 통해 전달받은 정보를 통해 팝업 제목과 설명이 보여진다.", async () => {
    const { getByText } = renderBannerPopup();
    const { title, description } = props;

    getByText(title);
    getByText(description);
  });
  it("close 버튼을 클릭하면 props로 전달된 onCloseButtonClicked 콜백이 호출된다.", async () => {
    const { getByRole } = renderBannerPopup();
    const { onCloseButtonClicked } = props;

    const closeBtn = getByRole("button");
    fireEvent.click(closeBtn);

    expect(onCloseButtonClicked).toHaveBeenCalledTimes(1);
  });
});
