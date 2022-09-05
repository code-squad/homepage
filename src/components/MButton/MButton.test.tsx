import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { MButton } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<MButton>", () => {
  const props = {
    accent: false,
    disabled: false,
    to: INTERNAL.SUBSCRIPTION,
  };
  const renderMButton = (buttonText: string) =>
    render(
      <TestProvider>
        <MButton {...props} type="right">
          {buttonText}
        </MButton>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderMButton(LINK.SUBSCRIPTION);

    getByText(LINK.SUBSCRIPTION);
  });
  it("버튼을 클릭하면 props로 전달된곳으로 페이지가 이동된다.", () => {
    const { getByRole } = renderMButton(LINK.SUBSCRIPTION);

    const linkEle = getByRole("link", { name: LINK.SUBSCRIPTION });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.SUBSCRIPTION);
  });
});
