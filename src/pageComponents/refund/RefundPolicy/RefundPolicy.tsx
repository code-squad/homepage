import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { RefundPolicyType } from "@type/RefundPolicy";
// Typography
import { Typography } from "typography";
// Assets
import { DESCRIPTION, TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

type RefuncPolicyType = { policies: RefundPolicyType[]; editDate: string };

const RefundPolicy: React.FC = () => {
  const data = useStaticQuery(RefundPolicyQuery);
  const { policies, editDate }: RefuncPolicyType = strainMdxInfo(data);

  const { isDesktop, isMobile } = useResponsive();

  return (
    <RefundPolicyWrapper>
      <RefundPolicyMasthead>
        <Typography
          style={{ width: isDesktop ? "106.8rem" : "unset" }}
          type={isMobile ? "SDisplay" : "LDisplay"}
        >
          {TITLE.REFUND_POLICY}
        </Typography>
      </RefundPolicyMasthead>
      <PolicySpecificationWrapper>
        <Typography type="MBody" style={{ paddingBottom: "4rem" }}>
          {`🗓 최종 업데이트: ${editDate}`}
        </Typography>
        <RefundPolicyTableWrapper>
          <RefundPolicyTable>
            <thead>
              <tr>
                <RefundPolicyTableHeader>{TITLE.REFUND_REASON}</RefundPolicyTableHeader>
                <RefundPolicyTableHeader>{TITLE.REFUND_STANDARD}</RefundPolicyTableHeader>
              </tr>
            </thead>
            <tbody>
              {policies.map(({ reason, standard }) => (
                <tr key={reason}>
                  <RefundPolicyTableData>{reason}</RefundPolicyTableData>
                  <RefundPolicyTableData>{standard}</RefundPolicyTableData>
                </tr>
              ))}
            </tbody>
          </RefundPolicyTable>
        </RefundPolicyTableWrapper>
        <Typography
          type="MBody"
          style={{ width: "fit-content", paddingTop: "3rem", paddingBottom: "3rem" }}
        >
          {DESCRIPTION.REFUND_POLICY_INFO}
        </Typography>
        <Typography type="MBody" style={{ width: "fit-content", paddingBottom: "0.4rem" }}>
          {DESCRIPTION.REFUND}
        </Typography>
      </PolicySpecificationWrapper>
    </RefundPolicyWrapper>
  );
};

const RefundPolicyWrapper = styled.div`
  width: 100%;
  color: ${({ theme: { color } }) => color.black};
  white-space: pre-line;
  text-align: start;
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const RefundPolicyMasthead = styled.div`
  display: flex;
  white-space: pre-line;
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: flex-start;
    flex-direction: column;
    padding: 14.2rem 2.4rem 4rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
    justify-content: flex-start;
    flex-direction: column;
    padding: 16.8rem 8rem 4rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
    align-items: center;
    min-width: 144rem;
    padding: 16.8rem 0 4rem 0;
  }
`;

const PolicySpecificationWrapper = styled.div`
  border: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey4};
  background-color: ${({ theme: { color } }) => color.white};
  @media ${({ theme }) => theme.device.mobile} {
    justify-content: flex-start;
    flex-direction: column;
    padding: 8rem 2.4rem 8rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 60.8rem;
    padding: 4.8rem;
    margin: 0rem 8rem 8rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    flex-direction: column;
    align-items: center;
    padding: 4.8rem;
    width: 96.6rem;
    margin-bottom: 19rem;
  }
`;

const RefundPolicyTableWrapper = styled.div`
  padding-bottom: 1.6rem;
  overflow-x: scroll;
`;
const RefundPolicyTable = styled.table`
  width: 48rem;
  border: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  border-collapse: collapse;
  background-color: ${({ theme: { color } }) => color.white};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
const RefundPolicyTableHeader = styled.th`
  width: 24rem;
  height: 4rem;
  padding: 0 1rem;
  border: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  border-collapse: collapse;
  background-color: ${({ theme: { color } }) => color.surface.offWhite1};
  vertical-align: middle;
  text-align: start;
`;
const RefundPolicyTableData = styled.td`
  width: 24rem;
  height: 4rem;
  padding: 0 1rem;
  border: 0.1rem solid ${({ theme: { color } }) => color.greyScale.grey3};
  border-collapse: collapse;
  vertical-align: middle;
  text-align: start;
`;

const RefundPolicyQuery = graphql`
  query RefundPolicyQuery {
    mdx(frontmatter: { templateKey: { eq: "refund_policies" } }) {
      frontmatter {
        editDate
        policies {
          reason
          standard
        }
      }
    }
  }
`;

export default RefundPolicy;
