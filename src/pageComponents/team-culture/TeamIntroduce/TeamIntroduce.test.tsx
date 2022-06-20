import React from "react";
import { render } from "@testing-library/react";
// Components
import { TeamIntroduce } from ".";
// Assets
import { TITLE } from "assets/static/phrases";
// Libs
import { removeLineFeed, TestProvider } from "lib/testUtils";

describe("<TeamIntroduce>", () => {
  const renderRefundPolicy = () =>
    render(
      <TestProvider>
        <TeamIntroduce />
      </TestProvider>
    );
  it("제목이 보여진다.", async () => {
    const { getByText } = renderRefundPolicy();

    getByText(removeLineFeed(TITLE.TEAM_CULTURE));
  });
});
