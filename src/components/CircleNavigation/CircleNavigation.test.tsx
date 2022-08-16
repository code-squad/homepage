import React from "react";
import { fireEvent, render } from "@testing-library/react";
// Theme
import theme from "styles/theme";
// Testing-Component
import { CircleNavigation } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<CircleNavigation>", () => {
  const props = {
    count: 10,
    index: 9,
    onIndexChanged: jest.fn((index) => index),
  };
  const renderCircleNavigation = () =>
    render(
      <TestProvider>
        <CircleNavigation {...props} />
      </TestProvider>
    );

  it("props로 전달된 count수만큼 버튼들이 보여진다.", async () => {
    const { getAllByRole } = renderCircleNavigation();

    const circleBtns = getAllByRole("button");
    expect(circleBtns.length).toBe(props.count);
  });
  it("현재 인덱스에 해당되는 버튼은 검은색으로 보여진다.", () => {
    const { getAllByRole } = renderCircleNavigation();
    const {
      color: {
        blackAndWhite: { black },
      },
    } = theme;

    const circleBtns = getAllByRole("button");
    circleBtns.forEach((circleBtn, index) => {
      if (index === props.index) expect(circleBtn).toHaveStyle(`background-color: ${black}`);
      if (index !== props.index) expect(circleBtn).toHaveStyle(`background-color: transparent`);
    });
  });
  it("현재 인덱스에 해당되는 버튼을 클릭하면 props로 전달된 onIndexChanged 콜백이 호출되지 않는다.", () => {
    const { getAllByRole } = renderCircleNavigation();

    const circleBtns = getAllByRole("button");
    fireEvent.click(circleBtns[props.index]);
    expect(props.onIndexChanged).toBeCalledTimes(0);
  });
  it("현재 인덱스에 해당되지않는 버튼을 클릭하면 props로 전달된 onIndexChanged 콜백이 호출된다.", () => {
    const { getAllByRole } = renderCircleNavigation();

    const circleBtns = getAllByRole("button");
    circleBtns.forEach((circleBtn, index) => {
      fireEvent.click(circleBtn);
      expect(props.onIndexChanged).toBeCalledTimes(index + 1);
    });
  });
  it("onIndexChanged 콜백 호출시 전달되는 매개변수는 클릭된 제목의 순서이다.", () => {
    const { getAllByRole } = renderCircleNavigation();

    const circleBtns = getAllByRole("button");
    circleBtns.forEach((circleBtn, index) => {
      fireEvent.click(circleBtn);
      expect(props.onIndexChanged.mock.results[index].value).toBe(index);
    });
  });
});
