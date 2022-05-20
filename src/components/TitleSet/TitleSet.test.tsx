import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { TitleSet } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<TitleSet>", () => {
  const props = {
    title: "코드스쿼드",
    subtitle: "우리들의",
  };
  const renderTitleSet = () =>
    render(
      <TestProvider>
        <TitleSet {...props} />
      </TestProvider>
    );
  it("props로 들어온 제목과 부제목이 보여진다.", () => {
    const { title, subtitle } = props;
    const { getByText } = renderTitleSet();

    getByText(title);
    getByText(subtitle);
  });
});
