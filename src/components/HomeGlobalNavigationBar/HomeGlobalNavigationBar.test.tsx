import React from "react";
import { render, fireEvent } from "@testing-library/react";
// Testing-Component
import { HomeGlobalNavigationBar } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<HomeGlobalNavigationBar>", () => {
  const renderHomeGlobalNavigationBar = () =>
    render(
      <TestProvider>
        <HomeGlobalNavigationBar />
      </TestProvider>
    );
  it("홈 로고 이미지가 보여진다.", async () => {
    const { getByAltText } = renderHomeGlobalNavigationBar();

    getByAltText("company-logo");
  });
  it("마스터즈 버튼이 보여진다.", async () => {
    const { getByText } = renderHomeGlobalNavigationBar();

    getByText(LINK.MASTERS);
  });
  it("마스터즈 링크를 클릭하면 마스터즈 페이지로 이동된다.", async () => {
    const { getByRole } = renderHomeGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.MASTERS });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  });
  // it("마스터즈 버튼을 클릭하면 프리코스, 마스터즈•max 링크가 보여진다.", async () => {
  //   const { getByText } = renderHomeGlobalNavigationBar();

  //   const mastersBtn = getByText(LINK.MASTERS);
  //   fireEvent.click(mastersBtn);

  //   getByText(LINK.PRE_COURSE);
  //   getByText(LINK.MASTERS_MAX);
  // });
  // const whenMastersPopoverOpened = () => {
  //   const utils = renderHomeGlobalNavigationBar();
  //   const { getByText } = utils;

  //   const mastersBtn = getByText(LINK.MASTERS);
  //   fireEvent.click(mastersBtn);

  //   getByText(LINK.PRE_COURSE);
  //   getByText(LINK.MASTERS_MAX);

  //   return utils;
  // };
  // it("프리코스 코스 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
  //   const { getByRole } = whenMastersPopoverOpened();

  //   const linkEle = getByRole("link", { name: LINK.PRE_COURSE });
  //   expect(linkEle?.getAttribute("href")).toBe(INTERNAL.PRE_COURSE);
  // });
  // it("마스터즈•max 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
  //   const { getByRole } = whenMastersPopoverOpened();

  //   const linkEle = getByRole("link", { name: LINK.MASTERS_MAX });
  //   expect(linkEle?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  // });
  it("코드투게더 링크를 클릭하면 코드투게더 페이지로 이동된다.", async () => {
    const { getByRole } = renderHomeGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.CODE_TOGETHER });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.CODE_TOGETHER);
  });
  it("자주 묻는 질문 링크를 클릭하면 자주 묻는 질문 페이지로 이동된다.", async () => {
    const { getByRole } = renderHomeGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.FAQ });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.FAQ);
  });
  it("팀 문화 링크를 클릭하면 팀 문화 페이지로 이동된다.", async () => {
    const { getByRole } = renderHomeGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.TEAM_CULTURE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.TEAM_CULTURE);
  });
});
