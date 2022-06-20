import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { RecruitLink } from ".";
// Assets
import { TITLE } from "assets/static/phrases";
import { INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<RecruitLink>", () => {
  const renderRecruitLink = () =>
    render(
      <TestProvider>
        <RecruitLink />
      </TestProvider>
    );
  it("신청 가능한 코스에대한 설명들이 보여진다..", () => {
    const { getByText } = renderRecruitLink();

    getByText(TITLE.CODESQUAD_RECRUIT_NEWS);
  });
  it("문구를 클릭하면 채용소식 페이지로 이동된다.", async () => {
    const { getByRole } = renderRecruitLink();

    const linkEle = getByRole("link", { name: TITLE.CODESQUAD_RECRUIT_NEWS });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.RECRUIT);
  });
});
