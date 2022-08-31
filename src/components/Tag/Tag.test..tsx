import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Tag } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<SButton>", () => {
  const props = {
    type: "Black" as "Black" | "Orange" | "Green",
    text: "test",
  };
  const renderSButton = (buttonText: string) =>
    render(
      <TestProvider>
        <Tag {...props}>{buttonText}</Tag>
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderSButton(LINK.SUBSCRIPTION);

    getByText(LINK.SUBSCRIPTION);
  });
});
