import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { FAQType } from "@type/FAQ";
// Typography
import { Typography } from "typography";
// Components
import { DropdownItem, TagNavigationBar } from "components";
// Assets
import headers from "assets/img/illusts/header";
import { TITLE, CATEGORTY_TPL } from "assets/static/phrases";
// Lib
import { strainMdxInfo } from "lib/utils";
import { useResponsive } from "lib/hooks";

const FAQ: React.FC = () => {
  const { lists }: { lists: FAQType[] } = strainMdxInfo(useStaticQuery(FAQQuery));
  const categories = new Set<string>([]);
  lists.forEach(({ course }) => categories.add(course || "etc"));

  const { isMobile } = useResponsive();

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
      <FAQMastHead>
        <FAQContentWrapper>
          <Typography type={isMobile ? "SDisplay" : "MDisplay"}>{TITLE.FAQ}</Typography>
          <TagNavigationBar titles={categoryTitles} onIndexChanged={setCurrentIndex} />
        </FAQContentWrapper>
      </FAQMastHead>
      <DropdownListWrapper>
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
      </DropdownListWrapper>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.div`
  padding-bottom: 16rem;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
  }
`;

const FAQMastHead = styled.div`
  color: ${({ theme: { color } }) => color.black};
  background-color: ${({ theme: { color } }) => color.primary.orange4};
  // 배경 리소스 추가시 추가;
  display: flex;
  justify-content: center;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
    padding: 14.2rem 0 4rem 0;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
    padding: 16rem 0 11.2rem 0;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 144rem;
    padding: 17.9rem 0 18.5rem 0;
  }
`;

const FAQContentWrapper = styled.div`
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 32.7rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 60.8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    min-width: 106.8rem;
  }
`;

const DropdownListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    min-width: 36rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 76.8rem;
    top: -8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    top: -14.5rem;
    min-width: 144rem;
  }
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme: { color } }) => color.white};
  padding-top: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    width: 32.7rem;
    padding-top: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    width: 52.8rem;
    padding: 2.4rem 4rem 0 4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.8rem;
  }
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
