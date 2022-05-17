import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Components
import { DropdownItem, MButton, SectionTitle } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const FAQ: React.FC = () => {
  const { lists } = strainMdxInfo(useStaticQuery(FAQListQuery));

  const mastersFAQList = lists.filter((list: FAQType) => list.category === "교육과정");

  return (
    <FAQWrapper>
      <SectionTitle subTitle={SUBTITLE.FAQ} title={TITLE.FREQUENTLY_ASKED_QUESTIONS} />
      <DropdownWrapper>
        {mastersFAQList.map(({ category, title, content, editDate }: FAQType) => (
          <DropdownItemWrapper key={title}>
            <DropdownItem {...{ category, title, content, editDate }} />
          </DropdownItemWrapper>
        ))}
      </DropdownWrapper>
      <MButton children="더보기" to="/faq" />
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  margin-top: 16rem;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
`;
const DropdownWrapper = styled.ul`
  margin-top: 8rem;
  margin-bottom: 2.4rem;
`;
const DropdownItemWrapper = styled.li`
  margin-bottom: 4rem;
`;

const FAQListQuery = graphql`
  query FAQListQuery {
    mdx(frontmatter: { templateKey: { eq: "faq_lists" } }) {
      frontmatter {
        lists {
          content
          editDate
          index
          title
          category
        }
      }
    }
  }
`;

export default FAQ;
