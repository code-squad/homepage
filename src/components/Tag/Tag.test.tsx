import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Tag } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<Tag>", () => {
  const renderTag = (tagText: string) =>
    render(
      <TestProvider>
        <Tag type="Black" text={tagText} />
      </TestProvider>
    );
  it("버튼 문구가 보여진다.", () => {
    const { getByText } = renderTag(LINK.SUBSCRIPTION);

    getByText(LINK.SUBSCRIPTION);
  });
});
