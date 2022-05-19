import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Typography
import { LDisplay } from "typography";
// Components
import { DropdownItem, TagNavigationBar } from "components";
// Assets
import backgrounds from "assets/images/backgrounds";
import { TITLE } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const FAQ: React.FC = () => {
  const { lists }: { lists: FAQType[] } = strainMdxInfo(useStaticQuery(FAQQuery));
  const categories = new Set<string>(["전체"]);
  lists.forEach((list) => categories.add(list.category));

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [faqList, setFAQList] = React.useState<FAQType[]>(lists);

  React.useEffect(() => {
    if (currentIndex === 0) {
      setFAQList(lists);
      return;
    }

    const category = Array.from(categories)[currentIndex];
    const filteredLists = lists.filter((list) => list.category === category);
    setFAQList(filteredLists);
  }, [currentIndex]);

  return (
    <FAQWrapper image={backgrounds["faq"]}>
      <FAQContentWrapper>
        <LDisplay style={{ paddingTop: "16rem", paddingBottom: "3.2rem" }}>{TITLE.FAQ}</LDisplay>
        <TagNavigationBar titles={Array.from(categories)} onIndexChanged={setCurrentIndex} />
        <DropdownList>
          {faqList.map(({ category, title, content, editDate }) => (
            <DropdownItem key={title} short {...{ category, title, content, editDate }} />
          ))}
        </DropdownList>
      </FAQContentWrapper>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div<{ image: string }>`
  width: 100%;
  min-width: 144rem;
  padding-bottom: 16rem;
  background-image: ${({ image }) => `url(${image})`};
  background-repeat: no-repeat;
  background-size: 100%;
  color: ${({ theme: { color } }) => color.greyScale.black};
  white-space: pre-line;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: start;
  & > *:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`;

const FAQContentWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
`;

const DropdownList = styled.ul`
  margin-top: 4.7rem;
  padding: 0.8rem 4.8rem 4.8rem 4.8rem;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.greyScale.white};
`;

const FAQQuery = graphql`
  query FAQQuery {
    mdx(frontmatter: { templateKey: { eq: "faq_lists" } }) {
      frontmatter {
        lists {
          category
          title
          content
          editDate
        }
      }
    }
  }
`;

export default FAQ;
