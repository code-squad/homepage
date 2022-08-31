import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Components
import { DropdownItem, MButton, TitleSet } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Utils
import { strainMdxInfo } from "lib/utils";

type IFaq = {
  course?: "masters" | "javascript";
};

const FAQ: React.FC<IFaq> = ({ course }) => {
  const { lists } = strainMdxInfo(useStaticQuery(FAQListQuery));

  const faqList = course ? lists.filter((list: FAQType) => list.course === course) : lists;

  const [faqCount, setFAQCount] = React.useState(faqList.length > 5 ? 5 : faqList.length);

  const handleMoreButtonClick = () => {
    if (faqCount + 5 <= faqList.length) {
      setFAQCount(faqCount + 5);
      return;
    }

    setFAQCount(faqList.length);
  };

  return (
    <FAQWrapper>
      <TitleSet subtitle={SUBTITLE.FAQ} title={TITLE.FREQUENTLY_ASKED_QUESTIONS} />
      <DropdownWrapper>
        {faqList.slice(0, faqCount).map(({ category, title, content, editDate }: FAQType) => (
          <li key={title}>
            <DropdownItem {...{ category, title, content, editDate }} />
          </li>
        ))}
      </DropdownWrapper>
      {faqList.length > 5 && (
        <MoreButtonWrapper>
          <MButton
            children={TITLE.MORE}
            disabled={faqCount === faqList.length}
            onClick={handleMoreButtonClick}
            type="left"
          />
        </MoreButtonWrapper>
      )}
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  white-space: pre-line;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 8rem;
    margin-top: 12rem;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 16rem;
    margin-top: 18rem;
    box-sizing: border-box;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
    margin: 18rem 0 16rem 0;
    min-width: 144rem;
  }
`;
const DropdownWrapper = styled.ul`
  margin-bottom: 6.4rem;
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 0.8rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    margin-top: 6.4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    margin-top: 4rem;
  }
`;
const MoreButtonWrapper = styled.ul`
  display: flex;
  justify-content: center;
`;

const FAQListQuery = graphql`
  query FAQListQuery {
    mdx(frontmatter: { templateKey: { eq: "faq_lists" } }) {
      frontmatter {
        lists {
          content
          editDate
          title
          category
          course
        }
      }
    }
  }
`;

export default FAQ;
