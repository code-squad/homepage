import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { Banner } from ".";
// Mocks
import { BannerQueryResult } from "./Banner.test.mock";
// Libs
import { removeCookie, TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Banner>", () => {
  const renderBanner = () =>
    render(
      <TestProvider>
        <Banner />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...BannerQueryResult }));
  const { title, description } = strainMdxInfo(BannerQueryResult);
  it("x버튼을 눌러 배너를 보이지 않게 할 수 있다.", async () => {
    const { getByText, getByRole } = renderBanner();

    expect(getByText(title)).toBeVisible();

    const closeBtn = getByRole("button");
    fireEvent.click(closeBtn);

    expect(getByText(title)).not.toBeVisible();
    removeCookie("ignoreBanner");
  });
  it("닫기 버튼을 클릭하면 쿠키가 설정된다.", async () => {
    const { getByRole } = renderBanner();

    expect(document.cookie).toBe("");

    const closeBtn = getByRole("button");
    fireEvent.click(closeBtn);

    expect(document.cookie).toBe("name=ignoreBanner");
  });
});
