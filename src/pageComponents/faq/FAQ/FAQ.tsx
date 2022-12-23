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
  lists.forEach(({ course }) => {
    if (course) categories.add(course || "etc");
  });
  categories.add("etc");

  const { isDesktop, isMobile } = useResponsive();

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
        <Typography
          style={{ width: isDesktop ? "106.8rem" : "unset" }}
          type={isMobile ? "SDisplay" : "MDisplay"}
        >
          {TITLE.FAQ}
        </Typography>
        <TagNavigationBar titles={categoryTitles} onIndexChanged={setCurrentIndex} />
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
  background-position: top right;
  background-position: center;
  background-size: cover;
  display: flex;
  white-space: pre-line;
  & > *:not(:last-child) {
    margin-bottom: 2.4rem;
  }
  @media ${({ theme }) => theme.device.mobile} {
    background-image: ${`url(${headers.mobilePattern3})`};
    justify-content: flex-start;
    flex-direction: column;
    padding: 14.2rem 2.4rem 4rem 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    background-image: ${`url(${headers.tabletPattern3})`};
    min-width: 76.8rem;
    justify-content: flex-start;
    flex-direction: column;
    padding: 16rem 8rem 11.2rem 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: ${`url(${headers.desktopPattern3})`};
    min-width: 144rem;
    padding: 17.9rem 0 18.5rem 0;
  }
`;

const DropdownListWrapper = styled.div`
  position: relative;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    min-width: 60.8rem;
    top: -8rem;
    padding: 0 8rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
    top: -14.5rem;
    min-width: 144rem;
  }
`;

const DropdownList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { color } }) => color.white};
  padding-top: 0.8rem;
  @media ${({ theme }) => theme.device.mobile} {
    padding-top: 4rem;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 2.4rem 4rem 0 4rem;
  }
  @media ${({ theme }) => theme.device.desktop} {
    align-items: center;
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
