import React from "react";
import { render } from "@testing-library/react";
// Testing-Component
import { CourseCard } from ".";
// assets
import thumbnail from "assets/img/illusts/thumbnail";
// lib
import { TestProvider } from "lib/testUtils";

describe("<CourseCard>", () => {
  const props = {
    category: "기초 프로그래밍",
    title: "자바스크립트 파트1",
    cost: "300,000 원",
    tags: ["대기자 모집중"],
    img: thumbnail.mediumJavascript,
    path: "/code-together/javascript",
  };
  const renderCourseCard = () =>
    render(
      <TestProvider>
        <CourseCard {...props} />
      </TestProvider>
    );
  it("카테고리, 제목, 가격이 보여진다.", async () => {
    const { getByText } = renderCourseCard();
    const { category, title, cost } = props;

    getByText(category);
    getByText(title);
    getByText(cost);
  });
  it("태그 배열의 문구가 보여진다.", async () => {
    const { getByText } = renderCourseCard();
    const { tags } = props;

    getByText(tags[0]);
  });
  it("썸네일의 이미지가 보여진다.", async () => {
    const { getByAltText } = renderCourseCard();
    const { img, title } = props;

    const cardImg = getByAltText(`card-img-${title}`);
    expect(cardImg.getAttribute("src")).toBe(img);
  });
});
