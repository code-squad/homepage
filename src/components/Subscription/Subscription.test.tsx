import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Subscription } from ".";
// Assets
import { LINK, LINK_DESCRIPTION } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<Subscription>", () => {
  const renderSubscription = () =>
    render(
      <TestProvider>
        <Subscription />
      </TestProvider>
    );
  it("링크 설명 문구가 보여진다.", () => {
    const { getByText } = renderSubscription();

    getByText(LINK_DESCRIPTION.RECEIVE_SUBSCRIPTION);
  });
  it("버튼을 클릭하면 props로 전달된곳으로 페이지가 이동된다.", () => {
    const { getByRole } = renderSubscription();

    const linkEle = getByRole("link", { name: LINK.RECEIVE_SUBSCRIPTION });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.SUBSCRIPTION);
  });
});
