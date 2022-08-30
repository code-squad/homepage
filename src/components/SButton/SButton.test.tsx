import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { SButton } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<SButton>", () => {
  const props = {
    type: "Black" as "Black" | "Orange" | "Green",
    to: INTERNAL.SUBSCRIPTION,
    children: "test",
  };
  const renderSButton = (buttonText: string) =>
    render(
      <TestProvider>
        <SButton {...props}>{buttonText}</SButton>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderSButton(LINK.SUBSCRIPTION);

    getByText(LINK.SUBSCRIPTION);
  });
  it("버튼을 클릭하면 props로 전달된곳으로 페이지가 이동된다.", () => {
    const { getByRole } = renderSButton(LINK.SUBSCRIPTION);

    const linkEle = getByRole("link", { name: LINK.SUBSCRIPTION });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.SUBSCRIPTION);
  });
});
