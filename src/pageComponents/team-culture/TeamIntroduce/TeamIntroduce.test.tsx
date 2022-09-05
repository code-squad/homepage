import React from "react";
import { render } from "@testing-library/react";
// Components
import { TeamIntroduce } from ".";
// Assets
import { TITLE, SUBTITLE } from "assets/static/phrases";
// Libs
import { removeLineFeed, TestProvider } from "lib/testUtils";

describe("<TeamIntroduce>", () => {
  const renderRefundPolicy = () =>
    render(
      <TestProvider>
        <TeamIntroduce />
      </TestProvider>
    );
  it("제목과 부제목이 보여진다.", async () => {
    const { container } = renderRefundPolicy();

    const pTag = container.querySelector("p");
    expect(pTag?.textContent).toBe(TITLE.TEAM_CULTURE);
  });
});
