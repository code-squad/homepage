import React from "react";
import styled from "styled-components";
// Type
import { ArticleType } from "@type/Article";
// Typography
import { LBody, SDisplay } from "typography";
// Components
import { DropdownItem } from "components";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";

interface IArticle {
  articles: ArticleType[];
}

const Article: React.FC<IArticle> = ({ articles }) => {
  return (
    <ArticleWrapper>
      <TitleWrapper>
        <LBody>{SUBTITLE.CODESQUAD_IN_MEDIA}</LBody>
        <SDisplay>{TITLE.CODESQUAD_IN_MEDIA}</SDisplay>
      </TitleWrapper>
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

// 언론 보도 및 매체 미디어에서 본 코드스쿼드
const ArticleWrapper = styled.div`
  width: 106.2rem;
  padding: 0 18.9rem;
  padding-bottom: 16rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 8rem;
`;

const TitleWrapper = styled.div`
  width: 144rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ArticleList = styled.ul`
  display: flex;
  gap: 4rem;
  flex-direction: column;
`;

export default Article;