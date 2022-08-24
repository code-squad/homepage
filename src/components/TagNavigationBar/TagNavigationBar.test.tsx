import React from "react";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { TagNavigationBar } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<TagNavigationBar>", () => {
  const props = {
    onIndexChanged: jest.fn((index) => index),
    titles: ["웹 백엔드", "모바일 Android", "모바일 iOS"],
  };
  const renderTagNavigationBar = () =>
    render(
      <TestProvider>
        <TagNavigationBar {...props} />
      </TestProvider>
    );
  it("props로 전달된 제목들이 보여진다.", () => {
    const { getByText } = renderTagNavigationBar();

    props.titles.forEach((title) => {
      getByText(`${title}`);
    });
  });
  it("제목을 클릭하면 props로 전달된 onIndexChanged 콜백이 호출된다.", () => {
    const { getByText } = renderTagNavigationBar();

    props.titles.forEach((title, index) => {
      const renderedTitle = getByText(`${title}`);

      fireEvent.click(renderedTitle);
      expect(props.onIndexChanged).toBeCalledTimes(index + 1);
    });
  });
  it("onIndexChanged 콜백 호출시 전달되는 매개변수는 클릭된 제목의 순서이다.", () => {
    const { getByText } = renderTagNavigationBar();

    props.titles.forEach((title, index) => {
      const renderedTitle = getByText(`${title}`);

      fireEvent.click(renderedTitle);
      expect(props.onIndexChanged.mock.results[index].value).toBe(index);
    });
  });
});
