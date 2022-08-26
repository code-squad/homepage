import React from "react";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
// Type
import { ArticleType } from "@type/Article";
// Components
import { DropdownItem, TitleSet } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

const Article: React.FC = () => {
  const data = useStaticQuery(ArticleQuery);
  const { mdx } = data;
  const { frontmatter } = mdx;
  const { articles }: { articles: ArticleType[] } = frontmatter;

  return (
    <ArticleWrapper>
      <TitleSet subtitle={SUBTITLE.CODESQUAD_IN_MEDIA} title={TITLE.CODESQUAD_IN_MEDIA} />
      <ArticleList>
        {articles.map((article) => (
          <DropdownItem
            key={article.title}
            category={article.category!}
            title={article.title!}
            link={article.link!}
          />
        ))}
      </ArticleList>
    </ArticleWrapper>
  );
};

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 0 2.4rem;
    padding-bottom: 12rem;
    & > *:not(:last-child) {
      margin-bottom: 0.8rem;
    }
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 0 8rem;
    padding-bottom: 18rem;
    & > *:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
  @media ${({ theme }) => theme.device.desktop} {
    width: 106.2rem;
    padding: 0 18.9rem;
    padding-bottom: 18rem;
    margin: 0 auto;
    & > *:not(:last-child) {
      margin-bottom: 4rem;
    }
  }
`;

const ArticleList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const ArticleQuery = graphql`
  query ArticleQuery {
    mdx(frontmatter: { templateKey: { eq: "main_articles" } }) {
      frontmatter {
        articles {
          category
          title
          link
        }
      }
    }
  }
`;

export default Article;
