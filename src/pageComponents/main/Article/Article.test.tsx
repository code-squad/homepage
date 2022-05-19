import React from "react";
import * as Gatsby from "gatsby";
import { render, fireEvent } from "@testing-library/react";
// Type
import { ArticleType } from "@type/Article";
// Testing-Component
import { Article } from ".";
// Mocks
import { ArticleResult } from "./Article.test.mock";
// Assets
import { SUBTITLE, TITLE } from "assets/static/phrases";
// Libs
import { TestProvider, getQueryResultData } from "lib/testUtils";

describe("<Article>", () => {
  const renderArticle = () =>
    render(
      <TestProvider>
        <Article />
      </TestProvider>
    );
  const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
  useStaticQuery.mockImplementation(() => ({ ...ArticleResult }));
  it("제목과 부 제목이 보여진다.", async () => {
    const { getByText } = renderArticle();

    getByText(TITLE.CODESQUAD_IN_MEDIA);
    getByText(SUBTITLE.CODESQUAD_IN_MEDIA);
  });
  it("카테고리 내용이 보여지며 클릭시 해당 링크의 새 차이 보여진다.", async () => {
    window.open = jest.fn();
    const { getByText } = renderArticle();
    const articles = getQueryResultData(ArticleResult, "articles");

    articles.forEach(({ category, title, link }: ArticleType) => {
      getByText(category);
      const titleEle = getByText(title);

      fireEvent.click(titleEle);
      expect(window.open).toHaveBeenCalledWith(link);
    });
  });
});
