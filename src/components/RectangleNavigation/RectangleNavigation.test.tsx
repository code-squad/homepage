import React from "react";
import { fireEvent, render } from "@testing-library/react";
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
    onIndexChanged: jest.fn((index) => index),
  };
  const renderRectangleNavigation = () =>
    render(
      <TestProvider>
        <RectangleNavigation {...props} />
      </TestProvider>
    );

  it("props로 전달된 count수만큼 버튼들이 보여진다.", async () => {
    const { getAllByRole } = renderRectangleNavigation();

    const rectangleBtns = getAllByRole("button");
    expect(rectangleBtns.length).toBe(props.count);
  });
  it("현재 인덱스에 해당되는 버튼은 검은색으로 보여진다.", () => {
    const { getAllByRole } = renderRectangleNavigation();
    const {
      color: {
        blackAndWhite: { black },
      },
    } = theme;

    const rectangleBtns = getAllByRole("button");
    rectangleBtns.forEach((RectangleBtn, index) => {
      if (index === props.index) expect(RectangleBtn).toHaveStyle(`background-color: ${black}`);
      if (index !== props.index) expect(RectangleBtn).toHaveStyle(`background-color: transparent`);
    });
  });
  it("현재 인덱스에 해당되는 버튼을 클릭하면 props로 전달된 onIndexChanged 콜백이 호출되지 않는다.", () => {
    const { getAllByRole } = renderRectangleNavigation();

    const rectangleBtns = getAllByRole("button");
    fireEvent.click(rectangleBtns[props.index]);
    expect(props.onIndexChanged).toBeCalledTimes(0);
  });
  it("현재 인덱스에 해당되지않는 버튼을 클릭하면 props로 전달된 onIndexChanged 콜백이 호출된다.", () => {
    const { getAllByRole } = renderRectangleNavigation();

    const rectangleBtns = getAllByRole("button");
    rectangleBtns.forEach((rectangleBtn, index) => {
      fireEvent.click(rectangleBtn);
      expect(props.onIndexChanged).toBeCalledTimes(index + 1);
    });
  });
  it("onIndexChanged 콜백 호출시 전달되는 매개변수는 클릭된 제목의 순서이다.", () => {
    const { getAllByRole } = renderRectangleNavigation();

    const rectangleBtns = getAllByRole("button");
    rectangleBtns.forEach((rectangleBtn, index) => {
      fireEvent.click(rectangleBtn);
      expect(props.onIndexChanged.mock.results[index].value).toBe(index);
    });
  });
});
