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
  it("회사 통신판매신고번호가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.COMPANY_MAIL_ORDER_SALES_REGISTRATION_NUMBER);
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
  it("소셜 미디어 문구가 보여진다.", async () => {
    const { getByText } = renderFooter();

    getByText(MESSAGE.SOCIAL_MEDIA);
  });
  it("각 링크들을 클릭하면 문구에 맞는 페이지로 이동된다.", async () => {
    const { getByRole } = renderFooter();

    const links = [
      {
        name: LINK.RECRUIT,
        path: INTERNAL.RECRUIT,
      },
      {
        name: LINK.TEAM_CULTURE,
        path: INTERNAL.TEAM_CULTURE,
      },
      {
        name: LINK.RECRUIT,
        path: INTERNAL.RECRUIT,
      },
      // {
      //   name: LINK.PRE_COURSE,
      //   path: INTERNAL.PRE_COURSE,
      // },
      {
        name: LINK.MASTERS,
        path: INTERNAL.MASTERS,
      },
      // {
      //   name: LINK.CODE_TOGETHER,
      //   path: INTERNAL.CODE_TOGETHER,
      // },
      {
        name: LINK.FAQ,
        path: INTERNAL.FAQ,
      },
      {
        name: LINK.BLOG,
        path: EXTERNAL.BLOG,
      },
      {
        name: LINK.YOUTUBE,
        path: EXTERNAL.YOUTUBE,
      },
      {
        name: LINK.FACEBOOK,
        path: EXTERNAL.FACEBOOK,
      },
      {
        name: LINK.KAKAOTALK_CHANNEL,
        path: EXTERNAL.KAKAOTALK_CHANNEL,
      },
    ];

    links.forEach((link) => {
      const { name, path } = link;
      const linkEle = getByRole("link", { name });
      expect(linkEle?.getAttribute("href")).toBe(path);
    });
  });
});
