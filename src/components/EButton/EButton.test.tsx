import React from "react";
import { render, fireEvent } from "@testing-library/react";
// Testing-Component
import { EButton } from ".";
// Assets
import { LINK } from "assets/static/phrases";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<EButton>", () => {
  const onClick = jest.fn();
  const props = {
    accent: false,
    disabled: false,
    onClick,
  };
  const renderEButton = (buttonText: string) =>
    render(
      <TestProvider>
        <EButton {...props}>{buttonText}</EButton>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderEButton(LINK.SUBSCRIPTION);

    getByText(LINK.SUBSCRIPTION);
  });
  it("버튼을 클릭하면 props로 전달된 onClick 콜백이 호출된다.", () => {
    const { getByText } = renderEButton(LINK.SUBSCRIPTION);

    const button = getByText(LINK.SUBSCRIPTION);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
