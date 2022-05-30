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
    onClick,
  };
  const renderEButton = (disabled: boolean = false) =>
    render(
      <TestProvider>
        <EButton {...props} {...{ disabled }}>
          {LINK.SUBSCRIPTION}
        </EButton>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderEButton();

    getByText(LINK.SUBSCRIPTION);
  });
  it("disabled상태일경우 버튼을 클릭해도 props로 전달된 onClick 콜백이 호출되지 않는다.", () => {
    const { getByText } = renderEButton(true);

    const button = getByText(LINK.SUBSCRIPTION);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(0);
  });
  it("버튼을 클릭하면 props로 전달된 onClick 콜백이 호출된다.", () => {
    const { getByText } = renderEButton();

    const button = getByText(LINK.SUBSCRIPTION);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
