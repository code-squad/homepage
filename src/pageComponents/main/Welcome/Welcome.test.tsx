import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Welcome } from ".";
// Assets
import { TITLE } from "assets/static/phrases";
// Libs
import { removeLineFeed, TestProvider } from "lib/testUtils";

describe("<Welcome>", () => {
  const renderWelcome = () =>
    render(
      <TestProvider>
        <Welcome />
      </TestProvider>
    );
  it("환영 문구가 보여진다.", async () => {
    const { getByText } = renderWelcome();

    getByText(removeLineFeed(TITLE.WELCOME));
  });
});
