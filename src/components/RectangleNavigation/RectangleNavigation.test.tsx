import React from "react";
import { render } from "@testing-library/react";
// Theme
import theme from "styles/theme";
// Testing-Component
import { RectangleNavigation } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<RectangleNavigation>", () => {
  const props = {
    count: 3,
    index: 2,
  };
  const renderRectangleNavigation = () =>
    render(
      <TestProvider>
        <RectangleNavigation {...props} />
      </TestProvider>
    );

  it("props로 전달된 count수만큼 버튼들이 보여진다.", async () => {
    const { getAllByLabelText } = renderRectangleNavigation();

    const rectangles = getAllByLabelText("rectangle");
    expect(rectangles.length).toBe(props.count);
  });
  it("현재 인덱스에 해당되는 버튼은 검은색으로 보여진다.", () => {
    const { getAllByLabelText } = renderRectangleNavigation();
    const {
      color: {
        black,
        greyScale: { grey3 },
      },
    } = theme;

    const rectangles = getAllByLabelText("rectangle");
    rectangles.forEach((rectangle, index) => {
      if (index === props.index) expect(rectangle).toHaveStyle(`background-color: ${black}`);
      if (index !== props.index) expect(rectangle).toHaveStyle(`background-color: ${grey3}`);
    });
  });
});
