import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Components
import { DropdownItem, EButton, TitleSet } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

const FAQ: React.FC = () => {
  const { lists } = strainMdxInfo(useStaticQuery(FAQListQuery));

  const mastersFAQList = lists.filter((list: FAQType) => list.category === "교육과정");

  const [faqCount, setFAQCount] = React.useState(
    mastersFAQList.length > 5 ? 5 : mastersFAQList.length
  );

  const handlePlusButtonClick = () => {
    if (faqCount + 5 <= mastersFAQList.length) {
      setFAQCount(faqCount + 5);
      return;
    }

    setFAQCount(mastersFAQList.length);
  };

  return (
    <FAQWrapper>
      <TitleSet subtitle={SUBTITLE.FAQ} title={TITLE.FREQUENTLY_ASKED_QUESTIONS} />
      <DropdownWrapper>
        {mastersFAQList
          .slice(0, faqCount)
          .map(({ category, title, content, editDate }: FAQType) => (
            <li key={title}>
              <DropdownItem {...{ category, title, content, editDate }} />
            </li>
          ))}
      </DropdownWrapper>
      {mastersFAQList.length > 5 && (
        <EButton
          children="더보기"
          disabled={faqCount === mastersFAQList.length}
          onClick={handlePlusButtonClick}
        />
      )}
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  margin: 16rem 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 144rem;
  flex-direction: column;
`;
const DropdownWrapper = styled.ul`
  margin-top: 4rem;
  margin-bottom: 6.4rem;
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
