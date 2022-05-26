import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { LinkButton } from ".";
// assets
import icons from "assets/img/icons";
// lib
import { TestProvider } from "lib/testUtils";

describe("<LinkButton>", () => {
  const props = {
    description: "코드스쿼드의 정규 교육 과정",
    title: "마스터즈 코스",
    to: "/masters",
  };
  const renderLinkButton = (icon?: string) =>
    render(
      <TestProvider>
        <LinkButton {...props} {...{ icon }} />
      </TestProvider>
    );
  it("오른쪽 방향의 화살표가 보여진다.", () => {
    const { getByLabelText } = renderLinkButton();

    getByLabelText("arrow-right");
  });
  it("title로 들어온 내용이 보여진다.", () => {
    const { getByText } = renderLinkButton();
    const { title } = props;

    getByText(title);
  });
  it("description 으로 들어온 내용이 보여진다.", () => {
    const { getByText } = renderLinkButton();
    const { description } = props;

    getByText(description);
  });
  it("버튼을 클릭하면 to로 입력받은 페이지로 이동된다.", () => {
    const { getByText } = renderLinkButton();
    const { to, title } = props;

    const titleEle = getByText(title);
    const linkEle = titleEle.closest("a");

    expect(linkEle?.getAttribute("href")).toBe(to);
  });
  it("icon props가 넘어온다면 아이콘이 보여진다.", () => {
    const { getByAltText } = renderLinkButton(icons.chevronRight);

    const linkIcon = getByAltText("link-icon");
    expect(linkIcon.getAttribute("src")).toBe(icons.chevronRight);
  });
});
