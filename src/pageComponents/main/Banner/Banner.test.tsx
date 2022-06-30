import React from "react";
import * as Gatsby from "gatsby";
import { fireEvent, render } from "@testing-library/react";
// Testing-Component
import { Banner } from ".";
// Mocks
import { BannerQueryResult } from "./Banner.test.mock";
// Libs
import { TestProvider } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<Banner>", () => {
  const bannerStatus = true;
  const setBannerStatus = jest.fn();
  const renderBanner = () =>
    render(
      <TestProvider>
        <Banner {...{ bannerStatus, setBannerStatus }} />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...BannerQueryResult }));
  const { title } = strainMdxInfo(BannerQueryResult);
  it("x버튼을 누르면 setBannerStatus 함수가 실행된다.", async () => {
    const { getByText, getByRole } = renderBanner();

    expect(getByText(title)).toBeVisible();

    const closeBtn = getByRole("button");
    fireEvent.click(closeBtn);

    expect(setBannerStatus).toBeCalled();
    localStorage.removeItem("showPopup");
  });
  it("닫기 버튼을 클릭하면 로컬스토리지가 설정된다.", async () => {
    const { getByRole } = renderBanner();

    expect(localStorage.getItem("showPopup")).toBe(null);

    const closeBtn = getByRole("button");
    fireEvent.click(closeBtn);

    expect(localStorage.getItem("showPopup")).toBe("true");
  });
});
