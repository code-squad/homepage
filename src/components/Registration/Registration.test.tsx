import React from "react";
import { render } from "@testing-library/react";
// Type
import { RegistrationType } from "@type/Registration";
// Testing-Component
import { Registration } from ".";
// Libs
import { TestProvider } from "lib/testUtils";

describe("<Registration>", () => {
  const registrations: RegistrationType[] = [
    {
      title: "코드투게더 자바스크립트 과정",
      description: "대기자 신청하기",
      caption: "교육 기간 : 2022년 하반기 (예정)",
      path: "https://docs.google.com/forms/d/e/1FAIpQLSdjZIqBAxYHtBxFjXCUD9B5dAljmbMfuPfVTc-DF2xdn1EuCA/viewform",
    },
    {
      title: "마스터즈 코스 과정",
      description: "대기자 신청",
      caption: "교육 기간 : 2023년 1월~6월 (예정)",
      path: "https://docs.google.com/forms/d/e/1FAIpQLScHRPc7dTFVuMiTeCy7kpp6ks23jtkiiB-qZ3Lv0QtDNPU28w/viewform",
    },
  ];
  const renderRegistration = () =>
    render(
      <TestProvider>
        <Registration {...{ registrations }} />
      </TestProvider>
    );
  it("신청 가능한 코스에대한 설명들이 보여진다..", () => {
    const { getByText } = renderRegistration();

    registrations.forEach(({ title, description, caption, path }) => {
      const titleEle = getByText(title);
      getByText(description);
      getByText(caption);
      const linkEle = titleEle.closest("a");
      expect(linkEle?.getAttribute("href")).toBe(path);
    });
  });
});
