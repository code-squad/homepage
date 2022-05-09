import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { SButton } from ".";
// Assets
import { LINK } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";
import { INTERNAL } from "assets/static/urls";

describe("<MButton>", () => {
  const props = {
    disabled: false,
    to: INTERNAL.SUBSCRIBE,
  };
  const renderMButton = (buttonText: string) =>
    render(
      <TestProvider>
        <SButton {...props}>{buttonText}</SButton>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderMButton(LINK.SUBSCRIBE);

    getByText(LINK.SUBSCRIBE);
  });
  it("버튼을 클릭하면 props로 전달된곳으로 페이지가 이동된다.", () => {
    const { getByRole } = renderMButton(LINK.SUBSCRIBE);

    const linkEle = getByRole("link", { name: LINK.SUBSCRIBE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.SUBSCRIBE);
  });
});
