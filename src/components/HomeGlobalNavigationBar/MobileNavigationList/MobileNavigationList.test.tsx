import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { MobileNavigationList } from ".";
// Assets
import { LINK, MESSAGE } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<MobileNavigationList>", () => {
  const links = [
    {
      title: LINK.MASTERS,
      path: INTERNAL.MASTERS,
      subLinks: [
        {
          title: LINK.PRE_COURSE,
          path: INTERNAL.PRE_COURSE,
        },
        {
          title: LINK.MASTERS_MAX,
          path: INTERNAL.MASTERS,
        },
      ],
    },
    {
      title: LINK.CODE_TOGETHER,
      path: INTERNAL.CODE_TOGETHER,
    },
    {
      title: LINK.FAQ,
      path: INTERNAL.FAQ,
    },
    {
      title: LINK.TEAM_CULTURE,
      path: INTERNAL.TEAM_CULTURE,
    },
  ];
  const open = true;
  const setOpen = jest.fn();

  const renderMobileNavigationList = () =>
    render(
      <TestProvider>
        <MobileNavigationList {...{ links, open, setOpen }} />
      </TestProvider>
    );
  it("프리코스 코스 링크가 보여진다.", async () => {
    const { getByText } = renderMobileNavigationList();

    getByText(LINK.PRE_COURSE);
  });
  it("프리코스 링크를 클릭하면 프리코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderMobileNavigationList();

    const linkEle = getByRole("link", { name: LINK.PRE_COURSE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.PRE_COURSE);
  });
  it("마스터즈•max 링크가 보여진다.", async () => {
    const { getByText } = renderMobileNavigationList();

    getByText(LINK.MASTERS_MAX);
  });
  it("마스터즈•max 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderMobileNavigationList();

    const linkEle = getByRole("link", { name: LINK.MASTERS_MAX });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  });
  it("코드투게더 링크를 클릭하면 코드투게더 페이지로 이동된다.", async () => {
    const { getByRole } = renderMobileNavigationList();

    const linkEle = getByRole("link", { name: LINK.CODE_TOGETHER });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.CODE_TOGETHER);
  });
  it("자주 묻는 질문 링크를 클릭하면 자주 묻는 질문 페이지로 이동된다.", async () => {
    const { getByRole } = renderMobileNavigationList();

    const linkEle = getByRole("link", { name: LINK.FAQ });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.FAQ);
  });
  it("팀 문화 링크를 클릭하면 팀 문화 페이지로 이동된다.", async () => {
    const { getByRole } = renderMobileNavigationList();

    const linkEle = getByRole("link", { name: LINK.TEAM_CULTURE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.TEAM_CULTURE);
  });
  it("저작권 문구, 전화번호, 주소가 보여진다.", async () => {
    const { getByText } = renderMobileNavigationList();

    getByText(MESSAGE.COPYRIGHT);
    getByText(MESSAGE.ADDRESS);
    getByText(MESSAGE.TEL_NUMBER);
  });
});
