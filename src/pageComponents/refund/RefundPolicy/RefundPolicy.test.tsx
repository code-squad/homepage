import React from "react";
import * as Gatsby from "gatsby";
import { render } from "@testing-library/react";
// Type
import { RefundPolicyType } from "@type/RefundPolicy";
// Testing-Component
import { RefundPolicy } from ".";
// Mocks
import { RefundPolicyResult } from "./RefundPolicy.test.mock";
// Assets
import { DESCRIPTION, TITLE } from "assets/static/phrases";
// Libs
import { TestProvider, removeLineFeed } from "lib/testUtils";
import { strainMdxInfo } from "lib/utils";

describe("<RefundPolicy>", () => {
  const renderRefundPolicy = () =>
    render(
      <TestProvider>
        <RefundPolicy />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...RefundPolicyResult }));
  it("제목이 보여진다.", async () => {
    const { getByText } = renderRefundPolicy();

    getByText(removeLineFeed(TITLE.REFUND_POLICY));
  });
  it("최종 업데이트 날짜가 보여진다.", async () => {
    const { getByText } = renderRefundPolicy();
    const { editDate } = strainMdxInfo(RefundPolicyResult);

    getByText(`🗓 최종 업데이트: ${editDate}`);
  });
  it("환불규정에 대한 표가 보여진다.", async () => {
    const { getByText } = renderRefundPolicy();
    const { policies } = strainMdxInfo(RefundPolicyResult);

    getByText(TITLE.REFUND_REASON);
    getByText(TITLE.REFUND_STANDARD);
    policies.forEach(({ reason, standard }: RefundPolicyType) => {
      getByText(reason);
      getByText(standard);
    });
  });
  it("안내 문구가 보여진다.", async () => {
    const { getByText } = renderRefundPolicy();

    getByText(removeLineFeed(DESCRIPTION.REFUND));
  });
});
