import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Typography
import { MDisplay } from "typography";
// Components
import { DropdownItem, TagNavigationBar } from "components";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE, CATEGORTY_TPL } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";

const FAQ: React.FC = () => {
  const { lists }: { lists: FAQType[] } = strainMdxInfo(useStaticQuery(FAQQuery));
  const categories = new Set<string>([]);
  lists.forEach(({ course }) => categories.add(course || "etc"));

  const categoryTitles = Array.from(categories).map((category) => CATEGORTY_TPL[category]);

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const [faqList, setFAQList] = React.useState<FAQType[]>(lists);

  React.useEffect(() => {
    const course = Array.from(categories)[currentIndex];
    const filteredLists =
      course === "etc"
        ? lists.filter((list) => !list.course)
        : lists.filter((list) => list.course === course);

    setFAQList(filteredLists);
  }, [currentIndex]);

  return (
    <FAQWrapper>
      <FAQMasthead />
      <FAQContentWrapper>
        <MDisplay style={{ paddingTop: "16rem", paddingBottom: "3.2rem" }}>{TITLE.FAQ}</MDisplay>
        <TagNavigationBar titles={categoryTitles} onIndexChanged={setCurrentIndex} />
        <DropdownList>
          {faqList.map(({ course, title, content, editDate }) => (
            <li key={course + title}>
              <DropdownItem
                short
                category={course ? CATEGORTY_TPL[course] : "기타"}
                {...{ title, content, editDate }}
              />
            </li>
          ))}
        </DropdownList>
      </FAQContentWrapper>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  width: 100%;
  min-width: 144rem;
  padding-bottom: 16rem;
  background-image: ${`url(${headers.pattern1})`};
  background-repeat: no-repeat;
  background-position: top right;
  color: ${({ theme: { color } }) => color.blackAndWhite.black};
  white-space: pre-line;
  text-align: center;
  display: flex;
  flex-direction: column;
  text-align: start;
  & > *:not(:last-child) {
    margin-bottom: 4.8rem;
  }
`;

const FAQMasthead = styled.div`
  position: absolute;
  top: 0;
  background-color: ${({ theme: { color } }) => color.primary.orange4};
  height: 56rem;
  width: 100%;
  z-index: -1;
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
  background-color: ${({ theme: { color } }) => color.blackAndWhite.white};
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
          course
        }
      }
    }
  }
`;

export default FAQ;
