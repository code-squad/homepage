import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { BackgroundLink } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<BackgroundLink>", () => {
  const props = {
    to: "/recruit",
    title: "채용 소식 알아보기",
    subtitle: "코드스쿼드의",
  };
  const { to, title, subtitle } = props;
  const renderBackgroundLink = () =>
    render(
      <TestProvider>
        <BackgroundLink {...props} />
      </TestProvider>
    );
  it("링크 설명 문구가 보여진다.", () => {
    const { getByText } = renderBackgroundLink();

    getByText(subtitle);
  });
  it("버튼을 클릭하면 props로 전달된곳으로 페이지가 이동된다.", () => {
    const { getByRole } = renderBackgroundLink();

    const linkEle = getByRole("link", { name: title });
    expect(linkEle?.getAttribute("href")).toBe(to);
  });
});
