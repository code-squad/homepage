import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { Footer } from ".";
// Assets
import { LINK, MESSAGE } from "assets/static/phrases";
import { EXTERNAL, INTERNAL } from "assets/static/urls";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<Footer>", () => {
  const renderFooter = () =>
    render(
      <TestProvider>
        <Footer />
      </TestProvider>
    );

  it("회사 이름이 보여진다.", async () => {
    const { getAllByText } = renderFooter();

    getAllByText(MESSAGE.COMPANY_NAME);
  });
  it("회사 대표자 이름이 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.COMPANY_CEO_NAME);
  });
  it("회사 사업자번호가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.COMPANY_REGISTRATION_NUMBER);
  });
  it("회사 주소가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.COMPANY_ADDRESS);
  });
  it("회사 이메일 주소가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.COMPANY_EMAIL_ADDRESS);
  });
  it("교육 과정 문구가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.CURRICULUM);
  });
  it("팀 문화 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.TEAM_CULTURE });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.TEAM_CULTURE);
  });
  it("채용 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.RECRUIT });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.RECRUIT);
  });
  it("마스터즈 코스 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.MASTERS });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  });
  it("마스터즈 코스 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.MASTERS });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.MASTERS);
  });
  it("코드투게더 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.CODE_TOGETHER });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.CODE_TOGETHER);
  });
  it("자주 묻는 질문 링크를 클릭하면 마스터즈코스 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.FAQ });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.FAQ);
  });
  it("소셜 미디어 문구가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.SOCIAL_MEDIA);
  });
  it("블로그 링크를 클릭하면 새 블로그 탭이 띄워진다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.BLOG });
    expect(linkEle?.getAttribute("href")).toBe(EXTERNAL.BLOG);
  });
  it("유튜브 링크를 클릭하면 새 블로그 탭이 띄워진다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.YOUTUBE });
    expect(linkEle?.getAttribute("href")).toBe(EXTERNAL.YOUTUBE);
  });
  it("페이스북 링크를 클릭하면 새 블로그 탭이 띄워진다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.FACEBOOK });
    expect(linkEle?.getAttribute("href")).toBe(EXTERNAL.FACEBOOK);
  });
  it("개인정보 취급방침 링크를 클릭하면 개인정보 취급방침 안내 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.PRIVACY_POLICY });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.PRIVACY_POLICY);
  });
  it("환불규정 링크를 클릭하면 환불규정 안내 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const linkEle = getByRole("link", { name: LINK.REFUND_POLICY });
    expect(linkEle?.getAttribute("href")).toBe(INTERNAL.REFUND_POLICY);
  });
});
