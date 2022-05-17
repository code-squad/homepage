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
import images from "assets/images";
import { TITLE } from "assets/static/phrases";

const FAQ: React.FC = () => {
  const data = useStaticQuery(FAQQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { lists }: { lists: FAQType[] } = frontmatter;
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
    <FAQWrapper image={images["hero"]}>
      <FAQContentWrapper>
        <LDisplay style={{ paddingTop: "16rem", paddingBottom: "3.2rem" }}>{TITLE.FAQ}</LDisplay>
        <TagNavigationBar titles={Array.from(categories)} onIndexChanged={setCurrentIndex} />
        <DropdownItemWrapper>
          {faqList.map(({ category, title, content, editDate }) => (
            <DropdownItem key={title} short {...{ category, title, content, editDate }} />
          ))}
        </DropdownItemWrapper>
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
  text-align: start;
`;

const FAQContentWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  margin: 0 auto;
`;

const DropdownItemWrapper = styled.ul`
  margin-top: 4.7rem;
  padding: 4rem 4.8rem 4.8rem 4.8rem;
  display: flex;
  flex-direction: column;
  & > *:not(:first-child) {
    margin-top: 4rem;
  }
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
