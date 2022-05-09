import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { TeamGlobalNavigationBar } from ".";
// Assets
import { LINK } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<TeamGlobalNavigationBar>", () => {
  const renderTeamGlobalNavigationBar = () =>
    render(
      <TestProvider>
        <TeamGlobalNavigationBar />
      </TestProvider>
    );
  it("홈 로고 이미지가 보여진다.", async () => {
    const { getByAltText } = renderTeamGlobalNavigationBar();

    getByAltText("company-logo");
  });
  it("팀 문화 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderTeamGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.TEAM_CULTURE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.TEAM_CULTURE);
  });
  it("채용소식 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderTeamGlobalNavigationBar();

    const linkEle = getByRole("link", { name: LINK.RECRUIT });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.RECRUIT);
  });
});
