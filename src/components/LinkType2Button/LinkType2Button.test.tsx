import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { LinkType2Button } from ".";
// assets
import icons from "assets/img/icons";
// lib
import { TestProvider } from "lib/testUtils";

describe("<LinkType2Button>", () => {
  const props = {
    description: "코드투게더 과정",
    title: "자바스크립트 파트1 신청하기",
    caption: "교육 기간: 2022년 5월 2일 ~ 5월 27일(4주)",
    to: "https://codesquad.kr/",
  };
  const renderLinkType2Button = (icon?: string) =>
    render(
      <TestProvider>
        <LinkType2Button {...props} {...{ icon }} />
      </TestProvider>
    );
  it("오른쪽 방향의 화살표가 보여진다.", () => {
    const { getByLabelText } = renderLinkType2Button();

    getByLabelText("arrow-right");
  });
  it("title로 들어온 내용이 보여진다.", () => {
    const { getByText } = renderLinkType2Button();
    const { title } = props;

    getByText(title);
  });
  it("description 으로 들어온 내용이 보여진다.", () => {
    const { getByText } = renderLinkType2Button();
    const { description } = props;

    getByText(description);
  });
  it("버튼을 클릭하면 to로 입력받은 페이지로 이동된다.", () => {
    const { getByText } = renderLinkType2Button();
    const { to, title } = props;

    const titleEle = getByText(title);
    const linkEle = titleEle.closest("a");

    expect(linkEle?.getAttribute("href")).toBe(to);
  });
  it("icon props가 넘어온다면 아이콘이 보여진다.", () => {
    const { getByAltText } = renderLinkType2Button(icons.chevronRight);

    const linkIcon = getByAltText("link-icon");
    expect(linkIcon.getAttribute("src")).toBe(icons.chevronRight);
  });
});
